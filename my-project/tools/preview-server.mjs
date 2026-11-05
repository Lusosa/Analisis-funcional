#!/usr/bin/env node
// Iniciar con: node tools/preview-server.mjs
// Servidor local de vista previa; no publica ni modifica historias.
import { readFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { convert } from './to-ado.mjs';

const projectDirectory = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const host = '127.0.0.1';
const port = Number(process.env.PORT) || 4173;
const maxBodyBytes = 1_000_000;
const adoOrganization = process.env.AZDO_ORG || 'CEDIConsulting';
const adoProject = process.env.AZDO_PROJECT || 'Pruebas Github';
const adoWorkItemType = process.env.AZDO_WORK_ITEM_TYPE || 'Product Backlog Item';

function send(response, status, contentType, body) {
  response.writeHead(status, {
    'Content-Type': contentType,
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
  });
  response.end(body);
}

async function readRequestBody(request) {
  let body = '';
  for await (const chunk of request) {
    body += chunk;
    if (Buffer.byteLength(body, 'utf8') > maxBodyBytes) {
      const error = new Error('El archivo supera el límite de 1 MB.');
      error.statusCode = 413;
      throw error;
    }
  }
  return body;
}

function toAdoHtml(text) {
  const escaped = text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
  return `<pre>${escaped}</pre>`;
}

const server = createServer(async (request, response) => {
  const url = new URL(request.url, `http://${host}:${port}`);

  try {
    if (request.method === 'GET' && url.pathname === '/') {
      const page = await readFile(resolve(projectDirectory, 'index.html'));
      send(response, 200, 'text/html; charset=utf-8', page);
      return;
    }

    if (request.method === 'GET' && url.pathname === '/api/example') {
      const example = await readFile(resolve(projectDirectory, 'prueba-hu.md'));
      send(response, 200, 'text/markdown; charset=utf-8', example);
      return;
    }

    if (request.method === 'POST' && url.pathname === '/api/convert') {
      const body = await readRequestBody(request);
      const payload = JSON.parse(body);
      if (typeof payload.markdown !== 'string') {
        send(response, 400, 'application/json; charset=utf-8', JSON.stringify({ error: 'El campo markdown es obligatorio.' }));
        return;
      }

      const result = convert(payload.markdown, payload);
      send(response, 200, 'application/json; charset=utf-8', JSON.stringify({
        output: result.output,
        warnings: result.warnings,
        canCreate: result.canCreate,
      }));
      return;
    }

    if (request.method === 'POST' && url.pathname === '/api/ado/work-items') {
      const pat = process.env.AZDO_PAT;
      if (!pat) {
        send(response, 503, 'application/json; charset=utf-8', JSON.stringify({
          error: 'Azure DevOps no está configurado. Definí AZDO_PAT en el entorno local; no se creó ningún elemento.',
        }));
        return;
      }

      const body = await readRequestBody(request);
      const payload = JSON.parse(body);
      if (typeof payload.markdown !== 'string') {
        send(response, 400, 'application/json; charset=utf-8', JSON.stringify({ error: 'El campo markdown es obligatorio.' }));
        return;
      }

      const converted = convert(payload.markdown, payload);
      if (!converted.canCreate) {
        send(response, 422, 'application/json; charset=utf-8', JSON.stringify({
          error: 'Completá un título antes de crear el work item.',
          warnings: converted.warnings,
        }));
        return;
      }

      const endpoint = new URL(
        `${encodeURIComponent(adoOrganization)}/${encodeURIComponent(adoProject)}/_apis/wit/workitems/$${encodeURIComponent(adoWorkItemType)}?api-version=7.1`,
        'https://dev.azure.com/',
      );
      const authorization = Buffer.from(`:${pat}`).toString('base64');
      const adoResponse = await fetch(endpoint, {
        method: 'PATCH',
        headers: {
          Authorization: `Basic ${authorization}`,
          Accept: 'application/json',
          'Content-Type': 'application/json-patch+json',
        },
        body: JSON.stringify([
          { op: 'add', path: '/fields/System.Title', value: converted.workItem.title },
          { op: 'add', path: '/fields/System.Description', value: toAdoHtml(converted.workItem.description) },
          { op: 'add', path: '/fields/Microsoft.VSTS.Common.AcceptanceCriteria', value: toAdoHtml(converted.workItem.acceptanceCriteria) },
        ]),
      });

      if (!adoResponse.ok) {
        const adoError = await adoResponse.json().catch(() => ({}));
        const detail = typeof adoError.message === 'string'
          ? adoError.message.slice(0, 1000)
          : 'Azure DevOps no devolvió detalles adicionales.';
        send(response, 502, 'application/json; charset=utf-8', JSON.stringify({
          error: `Azure DevOps rechazó la creación (HTTP ${adoResponse.status}). Revisá la organización, el proyecto, los permisos del PAT y el tipo de elemento.`,
          detail,
        }));
        return;
      }

      const created = await adoResponse.json();
      const workItemUrl = new URL(
        `${encodeURIComponent(adoOrganization)}/${encodeURIComponent(adoProject)}/_workitems/edit/${created.id}`,
        'https://dev.azure.com/',
      ).toString();
      send(response, 201, 'application/json; charset=utf-8', JSON.stringify({
        id: created.id,
        title: converted.workItem.title,
        url: workItemUrl,
      }));
      return;
    }

    send(response, 404, 'text/plain; charset=utf-8', 'No encontrado.');
  } catch (error) {
    const status = error.statusCode ?? (error instanceof SyntaxError ? 400 : 500);
    const message = status === 413
      ? error.message
      : status === 400
        ? 'El cuerpo debe ser JSON válido.'
        : 'No se pudo procesar la solicitud.';
    send(response, status, 'application/json; charset=utf-8', JSON.stringify({ error: message }));
  }
});

function listen(listenPort) {
  const onListening = () => {
    server.removeListener('error', onError);
    const activePort = server.address().port;
    console.log(`Vista previa disponible en http://${host}:${activePort}`);
    console.log('Solo accesible desde este equipo. Presiona Ctrl+C para detenerla.');
  };

  const onError = (error) => {
    server.removeListener('listening', onListening);
    server.removeListener('error', onError);
    if (error.code === 'EADDRINUSE') {
      console.warn(`El puerto ${listenPort} está ocupado; probando ${listenPort + 1}.`);
      listen(listenPort + 1);
      return;
    }
    throw error;
  };

  server.once('error', onError);
  server.once('listening', onListening);
  server.listen(listenPort, host);
}

listen(port);