# AFU corporativo de Wemox

Asistente local de análisis funcional con Ollama y conversor de historias a Azure DevOps.
La IA produce borradores para revisión humana; no configura sistemas ni publica por sí sola.

## Arranque en Windows

Desde esta carpeta:

```powershell
node tools/preview-server.mjs
```

Abrir la URL que imprime la terminal. Usa `127.0.0.1:4173` o el siguiente puerto libre.
Mantener esa terminal abierta. `Ctrl+C` detiene el front.

## Ollama

Ollama debe estar instalado y activo en `http://127.0.0.1:11434`.
Instalador oficial: <https://ollama.com/download/windows>.

```powershell
ollama pull qwen2.5:0.5b
```

Si `ollama` no se reconoce en una terminal ya abierta:

```powershell
& "$env:LOCALAPPDATA\Programs\Ollama\ollama.exe" pull qwen2.5:0.5b
```

La vista Asistente permite actualizar y elegir los modelos descargados. El modelo de 0,5B
es el predeterminado por su menor consumo, pero puede seguir peor las instrucciones.
El modelo `qwen2.5:1.5b` también puede descargarse para probar mejor calidad cuando haya memoria
disponible. En este equipo de aproximadamente 6 GB se observó muy poca memoria libre durante
la prueba de 1,5B. La calidad de cualquier modelo debe revisarse; puede omitir información o
inventar afirmaciones. El modelo se retiene durante 30 segundos para evitar recargarlo en
consultas consecutivas y luego puede liberarse.

## Contexto y flujo

- Confirmar cliente y proyecto, o seleccionar consulta metodológica general.
- El núcleo se lee de `AGENTS.md`; al modelo se envían identidad y reglas innegociables,
  junto con pautas metodológicas compactas para reducir latencia. No se envía el archivo completo.
  El perfil Bancor se carga solo si el cliente confirmado
  es Bancor. No se cargan automáticamente otras skills, documentación ni servicios.
- Cambiar contexto limpia conversación y borrador después de una confirmación. Los datos
  permanecen en memoria de la página, no se guardan en almacenamiento del navegador.
- Conversar con datos sintéticos. No ingresar datos personales, productivos, secretos ni PAT.
- Revisar el borrador y elegir **Llevar respuesta al conversor**. Esa acción no publica nada.
- La conversación admite hasta 20 mensajes. Se envía el historial reciente hasta un presupuesto
  de 12000 caracteres; los mensajes más antiguos pueden quedar fuera del contexto del modelo.
- La generación tiene un límite de 90 segundos y el navegador corta la espera a los 100 segundos.
  **Cancelar generación** aborta la petición sin borrar la consulta. El contador muestra la espera.
- Para una respuesta breve, incluir "respuesta corta" o "respuesta breve". Esas consultas tienen
  un presupuesto de 160 tokens; las demás, de 600. Los límites pueden cortar una respuesta larga.
- Las instrucciones guían el modelo, pero no garantizan su cumplimiento. Los controles
  deterministas verifican la entrada y la estructura, no la validez funcional del contenido.

## Azure DevOps

El destino del conversor es independiente del contexto de conversación. Por defecto usa
`CEDIConsulting / Pruebas Github / Product Backlog Item`.
Se puede configurar mediante `AZDO_ORG`, `AZDO_PROJECT` y `AZDO_WORK_ITEM_TYPE` antes de iniciar
el servidor. Si se cambia el destino, revisar también el texto de confirmación de la interfaz.

`AZDO_PAT` se configura únicamente en el entorno del servidor; nunca en código ni en el chat.
Reiniciar Node para que tome cambios de variables. La creación requiere una confirmación humana
en el front. La IA no tiene acceso al PAT ni herramientas para operar en Azure.

## Pruebas locales

```powershell
node --test tools/local-ai.test.mjs
node tools/to-ado.mjs prueba-hu.md
```

Las pruebas del adaptador usan respuestas simuladas y verifican validación y selección de
contexto. No demuestran la calidad del modelo ni crean elementos externos.