#!/usr/bin/env node
// Uso: node tools/lint-hu.mjs <historia.md> [otra-historia.md ...]
// Control estatico: no comprueba Dynamics ni sustituye aprobacion humana.
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

function normalize(text) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function plain(text) {
  return text.replace(/[*_`]/g, '').replace(/^\s*>\s?/gm, '').trim();
}

// Ignorar ejemplos en bloques de codigo y comentarios para evitar falsos positivos.
function visibleLines(markdown) {
  let fence = null;
  return markdown.replace(/<!--[\s\S]*?(?:-->|$)/g, '').split(/\r?\n/).map((line) => {
    const marker = line.match(/^ {0,3}(`{3,}|~{3,})/);
    if (fence) {
      if (new RegExp(`^ {0,3}${fence.character}{${fence.length},}\\s*$`).test(line)) {
        fence = null;
      }
      return '';
    }
    if (marker) {
      fence = { character: marker[1][0], length: marker[1].length };
      return '';
    }
    return line;
  });
}

// Una seccion incluye sus subsecciones, pero termina ante un encabezado par o superior.
function sectionsFrom(lines) {
  const headings = [];
  lines.forEach((line, index) => {
    const match = line.match(/^ {0,3}(#{1,6})\s+(.+?)\s*#*\s*$/);
    if (match) {
      headings.push({ index, level: match[1].length, title: normalize(plain(match[2])) });
    }
  });
  return headings.map((heading, position) => {
    const next = headings.slice(position + 1).find((item) => item.level <= heading.level);
    return { ...heading, body: lines.slice(heading.index + 1, next?.index ?? lines.length).join('\n') };
  });
}

// Descartar filas de cabecera, separadores y placeholders, no datos de las tablas.
function meaningfulText(body) {
  const lines = body.split('\n');
  return plain(lines.filter((line, index) => {
    const separator = /^\s*\|?\s*:?-{3,}:?\s*(?:\|\s*:?-{3,}:?\s*)+\|?\s*$/;
    return !separator.test(line) && !(line.includes('|') && separator.test(lines[index + 1] ?? ''));
  }).join('\n'))
    .replace(/^\s*#{1,6}\s+.*$/gm, '')
    .replace(/\[[^\]\n]+\](?!\()/g, '')
    .replace(/[\s|:.,;\-]/g, '');
}

function ids(text, prefix) {
  return [...new Set(text.match(new RegExp(`\\b${prefix}-\\d{2,}\\b`, 'g')) ?? [])];
}

export function lintHistory(markdown) {
  const messages = [];
  const report = (level, message) => messages.push({ level, message });
  const lines = visibleLines(markdown);
  const text = lines.join('\n');
  const sections = sectionsFrom(lines);
  const required = [
    ['Historia', ['historia']],
    ['RN asociados', ['rn asociados', 'rn asociado']],
    ['CA asociados', ['ca asociados', 'ca asociado', 'criterios de aceptacion']],
    ['Dependencias', ['dependencias']],
    ['Pendientes', ['pendientes']],
    ['Bloqueantes', ['bloqueantes']],
    ['Definicion de terminado', ['definicion de terminado']],
    ['Trazabilidad', ['trazabilidad']],
  ];
  const found = new Map();

  for (const [label, aliases] of required) {
    const matching = sections.filter((section) => aliases.includes(section.title));
    if (!matching.length) {
      report('ERROR', `Falta ${label}.`);
      continue;
    }
    const body = matching.map((section) => section.body).join('\n');
    found.set(label, body);
    if (!meaningfulText(body)) {
      report('WARNING', `Seccion vacia o con placeholders: ${label}.`);
    }
  }

  if (ids(text, 'HU').length) {
    report('INFO', '\u2713 Historia encontrada');
  } else if (/\bHU-XX\b/.test(text)) {
    report('WARNING', 'HU-XX es un placeholder; falta el identificador concreto.');
  } else {
    report('ERROR', 'Falta identificador HU-XX (por ejemplo HU-01).');
  }

  const story = found.get('Historia');
  if (story !== undefined) {
    for (const keyword of ['Como', 'Quiero', 'Para']) {
      const match = plain(story).match(new RegExp(`^\\s*(?:[-+]\\s+)?${keyword}\\b[:\\s]*(.*)$`, 'im'));
      if (!match) {
        report('ERROR', `Falta formato ${keyword}... en Historia.`);
      } else if (!meaningfulText(match[1])) {
        report('WARNING', `${keyword} sin contenido concreto en Historia.`);
      }
    }
  }

  for (const [label, prefix] of [['RN asociados', 'RN'], ['CA asociados', 'CA']]) {
    const body = found.get(label);
    if (body === undefined) continue;
    // Incluir encabezados CA, utilizados como identificadores en la plantilla local.
    const count = ids(body, prefix).length;
    report('INFO', `\u2713 ${prefix} encontrados: ${count}`);
    if (!count) report('WARNING', `No se encontraron ${prefix} concretos en ${label}.`);
  }

  for (const label of ['Dependencias', 'Pendientes']) {
    const body = found.get(label);
    if (body === undefined) continue;
    const value = normalize(plain(body));
    if (!meaningfulText(body) || /^(?:ningun[ao]s?|sin\b|no\s+(?:hay|se\s+(?:encontraron|identificaron)))/.test(value)) {
      report('WARNING', `No se ${label === 'Pendientes' ? 'encontraron pendientes' : 'informaron dependencias'}.`);
    }
  }

  const trace = found.get('Trazabilidad');
  if (trace !== undefined) {
    const arrowChain = /\bRN(?:-\d{2,})?\s*(?:\u2192|->)\s*HU(?:-\d{2,})?\s*(?:\u2192|->)\s*CA(?:-\d{2,})?\b/i;
    const tableChain = /^\s*\|\s*RN\s*\|\s*HU\s*\|\s*CA\s*\|/im;
    if (!arrowChain.test(plain(trace)) && !tableChain.test(plain(trace))) {
      report('ERROR', 'Falta trazabilidad RN -> HU -> CA (cadena o tabla RN | HU | CA).');
    }
  }

  return {
    messages,
    errors: messages.filter((message) => message.level === 'ERROR').length,
    warnings: messages.filter((message) => message.level === 'WARNING').length,
  };
}

async function main(paths) {
  if (!paths.length) {
    console.error('ERROR: Indicar al menos un archivo Markdown.');
    console.error('Uso: node tools/lint-hu.mjs <historia.md> [otra-historia.md ...]');
    process.exitCode = 1;
    return;
  }
  let errors = 0;
  let warnings = 0;
  for (const filePath of paths) {
    console.log(`\nArchivo: ${filePath}`);
    try {
      const result = lintHistory(await readFile(filePath, 'utf8'));
      for (const message of result.messages) console.log(`${message.level}: ${message.message}`);
      errors += result.errors;
      warnings += result.warnings;
    } catch {
      // No volcar contenido de archivos ni detalles potencialmente sensibles del error.
      console.error('ERROR: No se pudo leer el archivo solicitado.');
      errors += 1;
    }
  }
  console.log(`\nINFO: Resumen general\nErrores: ${errors}\nWarnings: ${warnings}`);
  console.log('INFO: Control estatico; no implica aprobacion humana ni pruebas en Dynamics.');
  process.exitCode = errors ? 1 : 0;
}

// Permitir importar el validador para pruebas sin ejecutar la interfaz de terminal.
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  await main(process.argv.slice(2));
}