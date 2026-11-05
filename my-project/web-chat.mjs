const contextForm = document.querySelector('#context-form');
const contextConfirmed = document.querySelector('#context-confirmed');
const contextSummary = document.querySelector('#context-summary');
const clientInput = document.querySelector('#context-client');
const projectInput = document.querySelector('#context-project');
const modelSelect = document.querySelector('#ai-model');
const chatInput = document.querySelector('#chat-input');
const chatSend = document.querySelector('#chat-send');
const chatCancel = document.querySelector('#chat-cancel');
const chatLog = document.querySelector('#chat-log');
const chatStatus = document.querySelector('#chat-status');
const useDraft = document.querySelector('#use-ai-draft');
let context = null;
let messages = [];
let lastAnswer = '';
let busy = false;
let modelsAvailable = false;
let contextVersion = 0;
let activeRequest = null;

function updateControls() {
  chatInput.disabled = !context || !modelsAvailable || busy;
  chatSend.disabled = chatInput.disabled;
  modelSelect.disabled = !modelsAvailable || busy;
  useDraft.disabled = !lastAnswer || busy || context?.mode !== 'project';
  chatSend.textContent = busy ? 'Generando…' : 'Enviar consulta';
  chatCancel.hidden = !busy;
}

chatCancel.addEventListener('click', () => activeRequest?.abort());

function selectView(view) {
  for (const name of ['assistant', 'converter']) {
    const selected = name === view;
    document.querySelector(`#${name}-tab`).setAttribute('aria-selected', String(selected));
    document.querySelector(`#${name}-view`).hidden = !selected;
  }
}

document.querySelector('#assistant-tab').addEventListener('click', () => selectView('assistant'));
document.querySelector('#converter-tab').addEventListener('click', () => {
  if (!context || context.mode !== 'project') {
    chatStatus.textContent = 'Confirmá cliente y proyecto para trabajar con una historia.';
    contextForm.scrollIntoView({ block: 'start', behavior: 'smooth' });
    return;
  }
  selectView('converter');
});

contextForm.addEventListener('change', () => {
  const general = contextForm.elements['context-mode'].value === 'general';
  document.querySelector('#project-fields').hidden = general;
  clientInput.required = !general;
  projectInput.required = !general;
});

function appendMessage(role, text) {
  const article = document.createElement('article');
  article.className = 'chat-message';
  article.dataset.role = role;
  const label = document.createElement('strong');
  label.textContent = role === 'user' ? 'Analista' : 'AFU · Borrador';
  const content = document.createElement('p');
  content.textContent = text;
  article.append(label, content);
  chatLog.append(article);
  chatLog.scrollTop = chatLog.scrollHeight;
}

contextForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const mode = contextForm.elements['context-mode'].value;
  context = {
    mode,
    client: mode === 'project' ? clientInput.value.trim() : '',
    project: mode === 'project' ? projectInput.value.trim() : '',
    newProject: document.querySelector('#new-project').checked,
  };
  if (mode === 'project' && (!context.client || !context.project)) return;
  contextSummary.textContent = mode === 'general'
    ? 'Contexto confirmado: consulta general, sin documentación de clientes.'
    : `Contexto confirmado: ${context.client} / ${context.project}${context.newProject ? ' · Proyecto nuevo' : ''}.`;
  contextForm.hidden = true;
  contextConfirmed.hidden = false;
  appendMessage('assistant', mode === 'general'
    ? 'Podemos trabajar con metodología general. ¿Qué necesitás analizar?'
    : context.newProject
      ? 'Comencemos el relevamiento. ¿Qué problema debe resolver el proyecto y quiénes participarán?'
      : '¿Qué solicitud querés trabajar y qué fuentes tenés disponibles?');
  updateControls();
});

document.querySelector('#change-context').addEventListener('click', () => {
  if (!confirm('Cambiar contexto borrará la conversación y el borrador de esta página. ¿Continuar?')) return;
  contextVersion += 1;
  activeRequest?.abort();
  context = null;
  messages = [];
  lastAnswer = '';
  chatLog.replaceChildren();
  chatInput.value = '';
  chatStatus.textContent = '';
  for (const selector of ['#source', '#hu-id', '#hu-title']) {
    const input = document.querySelector(selector);
    input.value = '';
    input.dispatchEvent(new Event('input', { bubbles: true }));
  }
  document.querySelector('#result').textContent = '';
  document.querySelector('#result-meta').textContent = 'Esperando conversión';
  document.querySelector('#result-message').textContent = '';
  contextForm.hidden = false;
  contextConfirmed.hidden = true;
  selectView('assistant');
  updateControls();
});

async function refreshModels() {
  document.querySelector('#ai-status').textContent = 'Comprobando Ollama…';
  try {
    const response = await fetch('/api/ai/status');
    if (!response.ok) throw new Error('server');
    const status = await response.json();
    modelsAvailable = status.available && status.models.length > 0;
    modelSelect.replaceChildren();
    for (const model of status.models) modelSelect.add(new Option(model, model));
    if (status.models.includes(status.defaultModel)) modelSelect.value = status.defaultModel;
    if (!modelsAvailable) modelSelect.add(new Option('Sin modelos disponibles', ''));
    document.querySelector('#ai-status').textContent = !status.available
      ? 'Ollama no está disponible'
      : modelsAvailable ? 'Ollama conectado' : 'Ollama activo, sin modelo descargado';
  } catch {
    modelsAvailable = false;
    document.querySelector('#ai-status').textContent = 'Servidor local no disponible';
  }
  updateControls();
}

document.querySelector('#refresh-models').addEventListener('click', refreshModels);

document.querySelector('#chat-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const content = chatInput.value.trim();
  if (!content || !context || busy || !modelsAvailable) return;
  if (messages.length >= 20) {
    chatStatus.textContent = 'Llegaste al límite de esta conversación. Cambiá el contexto para iniciar una nueva.';
    return;
  }
  const version = contextVersion;
  const requestMessages = [...messages, { role: 'user', content }];
  const controller = new AbortController();
  activeRequest = controller;
  let timedOut = false;
  const started = Date.now();
  const progressTimer = setInterval(() => {
    if (version === contextVersion) chatStatus.textContent = `Generando borrador local… ${Math.floor((Date.now() - started) / 1000)} s. Podés cancelar la generación.`;
  }, 1000);
  const deadline = setTimeout(() => {
    timedOut = true;
    controller.abort();
  }, 100000);
  busy = true;
  updateControls();
  chatStatus.textContent = 'Generando borrador local. Usá solo datos sintéticos; no incluyas secretos ni datos personales.';
  try {
    const response = await fetch('/api/ai/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({ context, messages: requestMessages, model: modelSelect.value }),
    });
    const result = await response.json();
    if (version !== contextVersion) return;
    if (!response.ok) throw new Error(result.error || 'No se pudo generar el borrador.');
    appendMessage('user', content);
    appendMessage('assistant', result.content);
    messages = [...requestMessages, { role: 'assistant', content: result.content }];
    lastAnswer = result.content;
    chatInput.value = '';
    chatStatus.textContent = 'Borrador generado. Verificá reglas, IDs y supuestos antes de utilizarlo.';
  } catch (error) {
    if (version === contextVersion) {
      chatStatus.textContent = controller.signal.aborted
        ? timedOut ? 'Se agotó el tiempo de espera. Probá una consulta más breve y liberá memoria.' : 'Generación cancelada. La consulta se conserva para que puedas editarla.'
        : error.message;
    }
  } finally {
    clearInterval(progressTimer);
    clearTimeout(deadline);
    activeRequest = null;
    busy = false;
    updateControls();
  }
});

useDraft.addEventListener('click', () => {
  if (!lastAnswer || context?.mode !== 'project') return;
  const source = document.querySelector('#source');
  if (source.value.trim() && !confirm('¿Reemplazar el texto del conversor por este borrador?')) return;
  source.value = lastAnswer;
  source.dispatchEvent(new Event('input', { bubbles: true }));
  selectView('converter');
});

await refreshModels();