#!/usr/bin/env node
// Uso: node tools/to-ado.mjs historia.md
// Convierte una HU AFU a texto para Azure DevOps sin modificar el archivo de entrada.
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

function normalize(text) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

const knownSections = new Set([
  'identificacion',
  'titulo',
  'historia',
  'descripcion funcional',
  'contexto',
  'alcance',
  'fuera de alcance',
  'rn asociados',
  'ca asociados',
  'criterios de aceptacion',
  'reglas',
  'reglas de negocio',
  'dependencias',
  'riesgos',
  'pendientes',
  'bloqueantes',
  'definicion de terminado',
  'trazabilidad',
  'checklist',
]);

function clean(text) {
  return text
    .replace(/[*_`]/g, '')
    .replace(/^\s*>\s?/gm, '')
    .replace(/^\s*[-+]\s+/, '')
    .trim();
}

function visibleMarkdown(markdown) {
  return markdown.replace(/^ {0,3}(```|~~~)[\s\S]*?^ {0,3}\1.*$/gm, '');
}

// Cada encabezado conserva su cuerpo hasta el siguiente encabezado de igual o mayor nivel.
function getSections(markdown) {
  const lines = markdown.split(/\r?\n/);
  const headings = [];
  lines.forEach((line, index) => {
    const markdownHeading = line.match(/^ {0,3}(#{1,6})\s+(.+?)\s*#*\s*$/);
    const plainHeading = clean(line).replace(/^\*\*|\*\*$/g, '');
    if (markdownHeading) {
      headings.push({ index, level: markdownHeading[1].length, title: clean(markdownHeading[2]) });
    } else if (knownSections.has(normalize(plainHeading))) {
      // Compatibilidad con historias existentes que usan etiquetas sin el prefijo #.
      headings.push({ index, level: 1, title: plainHeading });
    }
  });

  return headings.map((heading, position) => {
    const next = headings.slice(position + 1).find((item) => item.level <= heading.level);
    return {
      ...heading,
      body: lines.slice(heading.index + 1, next?.index ?? lines.length).join('\n'),
    };
  });
}

function sectionBody(sections, names) {
  const wanted = names.map(normalize);
  return sections.find((section) => wanted.includes(normalize(section.title)))?.body;
}

function actualIds(text, prefix) {
  return [...new Set(text.match(new RegExp(`\\b${prefix}-?\\d{2,}\\b`, 'gi')) ?? [])]
    .map((id) => id.toUpperCase());
}

function huIds(text) {
  return [...new Set(text.match(/\bHU-?\d{2,}\b/gi) ?? [])]
    .map((id) => id.toUpperCase());
}

function isPlaceholder(text) {
  const value = normalize(text);
  return !value
    || /\[[^\]]*\]/.test(text)
    || /^(?:por confirmar|pendiente de confirmacion|pendiente de definicion|no disponible|n\/a|tbd)$/i.test(value);
}

function tableRows(body) {
  const lines = body.split(/\r?\n/);
  return lines.flatMap((line, index) => {
    if (!line.includes('|')) return [];
    const cells = line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(clean);
    if (!cells.length || cells.every((cell) => /^:?-{3,}:?$/.test(cell))) return [];
    const nextCells = (lines[index + 1] ?? '').trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((cell) => cell.trim());
    if (nextCells.length && nextCells.every((cell) => /^:?-{3,}:?$/.test(cell))) return [];
    return [cells.filter(Boolean).join(' | ')].filter(Boolean);
  });
}

function itemsFrom(body) {
  const rows = tableRows(body);
  if (rows.length) return [...new Set(rows)];

  const lines = body.split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !/^#{1,6}\s/.test(line));
  const listItems = lines.filter((line) => /^[-+*]\s+/.test(line)).map(clean);
  return [...new Set(listItems.length ? listItems : lines.map(clean))];
}

function sectionEntries(body) {
  if (!body) return [];
  const rows = tableRows(body);
  const entries = rows.length
    ? rows
    : body.split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line && !/^#{1,6}\s/.test(line))
      .map(clean);
  return [...new Set(entries.filter((entry) => !isPlaceholder(entry)))];
}

function numberedEntries(entries) {
  return entries.map((entry, index) => /^\d+[.)]\s/.test(entry) ? entry : `${index + 1}. ${entry}`).join('\n');
}

function storySentence(label, value, punctuation) {
  const sentence = value.replace(/[,.\s]+$/, '');
  return `${label} ${sentence}${punctuation}`;
}

function tableValue(body, label) {
  for (const line of body.split(/\r?\n/)) {
    if (!line.includes('|')) continue;
    const cells = line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(clean);
    if (normalize(cells[0] ?? '') === normalize(label)) return cells[1] ?? '';
  }
  return '';
}

function extractHuId(markdown, sections) {
  const identification = sectionBody(sections, ['Identificación']);
  const tableId = huIds(tableValue(identification ?? '', 'ID'))[0];
  if (tableId) return tableId;

  const sectionId = huIds(identification ?? '')[0];
  if (sectionId) return sectionId;

  const headingId = markdown.match(/^ {0,3}#{1,6}\s+(HU-?\d{2,})\b/im)?.[1];
  return headingId?.toUpperCase() ?? huIds(markdown)[0] ?? '';
}

function extractTitle(markdown, sections) {
  const sectionTitle = sectionBody(sections, ['Título'])
    ?.split(/\r?\n/)
    .find((line) => line.trim());
  const identificationTitle = tableValue(sectionBody(sections, ['Identificación']) ?? '', 'Título');
  const labeledTitle = markdown.match(/^\s*T[ií]tulo\s*:\s*(.*?)\s*$/im);
  const headingTitle = markdown.match(/^\s*#{1,6}\s+HU-?\d{2,}\s*[-:|]\s*(.+?)\s*#*\s*$/im);
  return clean(sectionTitle ?? identificationTitle ?? labeledTitle?.[1] ?? headingTitle?.[1] ?? '');
}

function extractStory(body) {
  const story = { Como: '', Quiero: '', Para: '' };
  const completeStory = body.match(/\bComo\b\s+([\s\S]*?)\s*,?\s*\bQuiero\b\s+([\s\S]*?)\s*,?\s*\bPara\b\s+([\s\S]*?)(?=\r?\n\s*(?:#{1,6}\s*)?(?:descripci[oó]n funcional|contexto|alcance|reglas de negocio|rn asociados|ca asociados|dependencias|pendientes|bloqueantes)\b|$)/i);
  if (completeStory) {
    story.Como = clean(completeStory[1]);
    story.Quiero = clean(completeStory[2]);
    story.Para = clean(completeStory[3]);
    return story;
  }

  const labels = Object.keys(story);
  for (const line of body.split(/\r?\n/)) {
    for (const label of labels) {
      const match = line.match(new RegExp(`^\\s*(?:[-+]\\s*)?(?:\\*\\*)?${label}(?:\\*\\*)?\\s*:?\\s*(.*?)\\s*$`, 'i'));
      if (match) story[label] = clean(match[1]);
    }
  }
  return story;
}

function extractBlockers(markdown, sections, pendingBody) {
  const headingBody = sectionBody(sections, ['Bloqueantes']);
  if (headingBody !== undefined) return headingBody;

  // La plantilla corta declara bloqueantes como etiqueta dentro de Pendientes/Estado.
  const inline = markdown.match(/^\s*(?:[-+]\s*)?Bloqueantes\s*:\s*(.*?)\s*$/im);
  if (inline) return inline[1];
  const fallback = pendingBody?.match(/^\s*Bloqueantes\s*:\s*(.*?)\s*$/im);
  return fallback?.[1];
}

function traceLinks(sections, huId) {
  const links = new Set();
  const traceBody = sectionBody(sections, ['Trazabilidad']);

  // Usar las filas RN | HU | CA declaradas en la trazabilidad, si existen.
  if (traceBody) {
    for (const row of traceBody.split(/\r?\n/)) {
      const requirements = actualIds(row, 'RN');
      const criteria = actualIds(row, 'CA');
      if (requirements.length && criteria.length) {
        for (const requirement of requirements) {
          for (const criterion of criteria) links.add(`${requirement} → ${huId} → ${criterion}`);
        }
      }
    }
    const inlineChain = /\b(RN-?\d{2,})\s*(?:→|->)\s*HU-?\d{2,}\s*(?:→|->)\s*(CA-?\d{2,})\b/gi;
    for (const match of traceBody.matchAll(inlineChain)) {
      links.add(`${match[1].toUpperCase()} → ${huId} → ${match[2].toUpperCase()}`);
    }
  }

  // Si no hay matriz explícita, recuperar RN asociados dentro de cada bloque CA.
  for (const section of sections.filter((item) => /^CA-\d{2,}$/i.test(item.title))) {
    const requirementLine = section.body.match(/^\s*(?:[-+]\s*)?(?:\*\*)?RN\s+asociado(?:s)?(?:\*\*)?\s*:?\s*(.*?)\s*$/im);
    const requirements = actualIds(requirementLine?.[1] ?? '', 'RN');
    for (const requirement of requirements) {
      links.add(`${requirement} → ${huId} → ${section.title.toUpperCase()}`);
    }
  }

  return [...links];
}

export function convert(markdown, metadata = {}) {
  const visible = visibleMarkdown(markdown);
  const sections = getSections(visible);
  const warnings = [];
  const huId = extractHuId(visible, sections) || huIds(metadata.huId ?? '')[0] || '';
  const extractedTitle = extractTitle(visible, sections);
  const title = isPlaceholder(extractedTitle) ? clean(metadata.title ?? '') : extractedTitle;
  const finalTitle = isPlaceholder(title) ? '' : title;

  if (!huId) warnings.push('Falta el identificador funcional HU.');
  if (!finalTitle) warnings.push('Falta un título; completalo para habilitar la creación en Azure DevOps.');

  const storyBody = sectionBody(sections, ['Historia']) ?? visible;
  const story = extractStory(storyBody ?? '');
  for (const label of Object.keys(story)) {
    if (isPlaceholder(story[label])) warnings.push(`Falta contenido para “${label}” en la historia.`);
  }

  const requirementBody = sectionBody(sections, ['RN asociados', 'RN asociado']) ?? '';
  const acceptanceBody = sectionBody(sections, ['CA asociados', 'CA asociado', 'Criterios de aceptación', 'Criterios de aceptacion']) ?? '';
  const functionalDescription = sectionEntries(
    sectionBody(sections, ['Descripción funcional']) ?? sectionBody(sections, ['Contexto']),
  );
  const scope = sectionEntries(sectionBody(sections, ['Alcance']));
  const businessRules = sectionEntries(sectionBody(sections, ['Reglas de negocio', 'Reglas']));
  const requirements = actualIds(requirementBody, 'RN');
  const criteria = actualIds(acceptanceBody, 'CA');
  if (!requirements.length) warnings.push('Faltan RN asociados.');
  if (!criteria.length) warnings.push('Faltan CA asociados.');

  const dependencyBody = sectionBody(sections, ['Dependencias']);
  const pendingBody = sectionBody(sections, ['Pendientes']);
  const blockerBody = extractBlockers(visible, sections, pendingBody);
  const lists = [
    ['Dependencias', dependencyBody],
    ['Pendientes', pendingBody],
    ['Bloqueantes', blockerBody],
  ];
  const values = new Map();
  for (const [label, body] of lists) {
    const items = body === undefined ? [] : itemsFrom(body);
    const meaningful = items.filter((item) => !isPlaceholder(item));
    const explicitNone = /\b(?:ningun[ao]s?|no aplica|sin (?:dependencias|pendientes|bloqueantes))\b/i.test(body ?? '');
    if (body === undefined || (!meaningful.length && !explicitNone)) warnings.push(`Falta información para ${label}.`);
    values.set(label, meaningful.length ? meaningful : [explicitNone ? 'Ninguno identificado' : 'No informado']);
  }

  const links = huId ? traceLinks(sections, huId) : [];
  if (!links.length) warnings.push('Falta definir la trazabilidad explícita RN → HU → CA.');

  const bullets = (items) => items.map((item) => `- ${item}`).join('\n');
  const titleText = `${huId ? `${huId} - ` : ''}${finalTitle || 'Título pendiente de completar'}`;
  const output = [
      '# Azure DevOps',
      '',
      'Título:',
      titleText,
      '',
      'Identificador HU:',
      huId || 'No informado',
      '',
      'Descripción:',
      storySentence('Como', isPlaceholder(story.Como) ? 'No informado' : story.Como, ','),
      '',
      storySentence('Quiero', isPlaceholder(story.Quiero) ? 'No informado' : story.Quiero, ','),
      '',
      storySentence('Para', isPlaceholder(story.Para) ? 'No informado' : story.Para, '.'),
      '',
      ...(functionalDescription.length ? ['Descripción funcional:', ...functionalDescription, ''] : []),
      ...(scope.length ? ['Alcance:', numberedEntries(scope), ''] : []),
      ...(businessRules.length ? ['Reglas de negocio:', ...businessRules.map((rule) => `- ${rule}`), ''] : []),
      'RN asociados:',
      bullets(requirements.length ? requirements : ['No informados']),
      '',
      'Criterios de aceptación:',
      bullets(criteria.length ? criteria : ['No informados']),
      '',
      'Dependencias:',
      bullets(values.get('Dependencias')),
      '',
      'Pendientes:',
      bullets(values.get('Pendientes')),
      '',
      'Bloqueantes:',
      bullets(values.get('Bloqueantes')),
      '',
      'Trazabilidad:',
      links.length ? links.map((link) => `- ${link}`).join('\n') : '- Pendiente de definir',
      ...(warnings.length ? ['', 'Advertencias:', ...warnings.map((warning) => `- ${warning}`)] : []),
  ].join('\n');
  return {
    output,
    warnings,
    canCreate: Boolean(finalTitle),
    workItem: {
      title: titleText,
      description: output,
      acceptanceCriteria: bullets(criteria.length ? criteria : ['Pendiente de definir']),
    },
  };
}

async function main(args) {
  if (args.length !== 1) {
    console.error('ERROR: Uso: node tools/to-ado.mjs historia.md');
    process.exitCode = 1;
    return;
  }

  try {
    const result = convert(await readFile(args[0], 'utf8'));
    if (result.errors) {
      for (const error of result.errors) console.error(`ERROR: ${error}`);
      process.exitCode = 1;
      return;
    }
    console.log(result.output);
  } catch {
    console.error('ERROR: No se pudo leer o convertir el archivo solicitado.');
    process.exitCode = 1;
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  await main(process.argv.slice(2));
}