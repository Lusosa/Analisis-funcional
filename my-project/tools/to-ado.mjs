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
  'contexto',
  'alcance',
  'fuera de alcance',
  'rn asociados',
  'ca asociados',
  'criterios de aceptacion',
  'reglas',
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
  return [...new Set(text.match(new RegExp(`\\b${prefix}-\\d{2,}\\b`, 'gi')) ?? [])]
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
  const tableId = actualIds(tableValue(identification ?? '', 'ID'), 'HU')[0];
  if (tableId) return tableId;

  const sectionId = actualIds(identification ?? '', 'HU')[0];
  if (sectionId) return sectionId;

  const headingId = markdown.match(/^ {0,3}#{1,6}\s+(HU-\d{2,})\b/im)?.[1];
  return headingId?.toUpperCase() ?? actualIds(markdown, 'HU')[0] ?? '';
}

function extractTitle(markdown, sections) {
  const sectionTitle = sectionBody(sections, ['Título'])
    ?.split(/\r?\n/)
    .find((line) => line.trim());
  const identificationTitle = tableValue(sectionBody(sections, ['Identificación']) ?? '', 'Título');
  const labeledTitle = markdown.match(/^\s*T[ií]tulo\s*:\s*(.*?)\s*$/im);
  const headingTitle = markdown.match(/^\s*#{1,6}\s+HU-\d{2,}\s*[-:|]\s*(.+?)\s*#*\s*$/im);
  return clean(sectionTitle ?? identificationTitle ?? labeledTitle?.[1] ?? headingTitle?.[1] ?? '');
}

function extractStory(body) {
  const story = { Como: '', Quiero: '', Para: '' };
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
    const inlineChain = /\b(RN-\d{2,})\s*(?:→|->)\s*HU-\d{2,}\s*(?:→|->)\s*(CA-\d{2,})\b/gi;
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

function convert(markdown) {
  const visible = visibleMarkdown(markdown);
  const sections = getSections(visible);
  const errors = [];
  const huId = extractHuId(visible, sections);
  const title = extractTitle(visible, sections);

  if (!huId) errors.push('Falta un identificador HU concreto y único (por ejemplo HU-01).');
  if (isPlaceholder(title)) errors.push('Falta un título concreto.');

  const storyBody = sectionBody(sections, ['Historia']);
  const story = extractStory(storyBody ?? '');
  for (const label of Object.keys(story)) {
    if (isPlaceholder(story[label])) errors.push(`Falta contenido concreto para “${label}” en la historia.`);
  }

  const requirementBody = sectionBody(sections, ['RN asociados', 'RN asociado']) ?? '';
  const acceptanceBody = sectionBody(sections, ['CA asociados', 'CA asociado', 'Criterios de aceptación', 'Criterios de aceptacion']) ?? '';
  const requirements = actualIds(requirementBody, 'RN');
  const criteria = actualIds(acceptanceBody, 'CA');
  if (!requirements.length) errors.push('Faltan RN asociados concretos.');
  if (!criteria.length) errors.push('Faltan CA asociados concretos.');

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
    if (body === undefined) {
      errors.push(`Falta la sección ${label}.`);
      continue;
    }
    const items = itemsFrom(body);
    const meaningful = items.filter((item) => !isPlaceholder(item));
    const explicitNone = /\b(?:ningun[ao]s?|no aplica|sin (?:dependencias|pendientes|bloqueantes))\b/i.test(body);
    if (!meaningful.length && !explicitNone) errors.push(`${label} debe contener información o indicar explícitamente que no hay elementos.`);
    values.set(label, meaningful.length ? meaningful : ['Ninguno identificado']);
  }

  const links = huId ? traceLinks(sections, huId) : [];
  if (!links.length) errors.push('Falta al menos una relación RN → HU → CA explícita.');

  if (errors.length) return { errors };

  const bullets = (items) => items.map((item) => `- ${item}`).join('\n');
  return {
    output: [
      '# Azure DevOps',
      '',
      'Título:',
      `${huId} - ${title}`,
      '',
      'Descripción:',
      `Como ${story.Como}`,
      `Quiero ${story.Quiero}`,
      `Para ${story.Para}`,
      '',
      'RN asociados:',
      bullets(requirements),
      '',
      'Criterios de aceptación:',
      bullets(criteria),
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
      links.map((link) => `- ${link}`).join('\n'),
    ].join('\n'),
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