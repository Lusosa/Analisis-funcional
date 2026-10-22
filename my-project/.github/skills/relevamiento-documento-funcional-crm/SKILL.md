---
name: "relevamiento-documento-funcional-crm"
description: "Redacta y revisa documentos funcionales para Dynamics 365 Sales y Customer Insights con requisitos RN-XX, seguridad, pendientes y trazabilidad verificable."
---

# Relevamiento y documento funcional CRM

## Propósito

Convertir necesidades y evidencia de negocio en un documento funcional claro, revisable, comprobable y trazable para Microsoft Dynamics 365 Sales, Customer Insights o una solución que los relacione. El documento describe qué necesidad debe atenderse y qué resultados se esperan; no inventa cómo está configurado el tenant ni decide por negocio, arquitectura, seguridad o cumplimiento.

El entregable es un borrador hasta contar con aprobación humana explícita. No sustituye el diseño técnico, la evaluación de seguridad y privacidad, la validación de producto, las pruebas UAT ni la aprobación de quienes tienen autoridad sobre las decisiones.

## Cuándo usarla

Usar esta skill para crear, completar, actualizar o revisar un documento funcional CRM que describa procesos, actores, requisitos, reglas de negocio, datos, integraciones, seguridad, excepciones y criterios de aceptación.

Aplica a Dynamics 365 Sales y Customer Insights. Para Customer Insights, confirmar si el alcance se refiere a Customer Insights - Data, Customer Insights - Journeys u otro componente/denominación vigente para el equipo. Puede documentar interacciones entre productos cuando estén dentro del alcance y respaldadas por fuentes.

No usarla como sustituto de una guía de sesión, un diseño técnico, una especificación de configuración, un plan de implementación o un paquete UAT. Si también se piden esos resultados, delimitarlos como entregables separados y usar las skills pertinentes. No asumir edición, versión, licencia, capacidad habilitada, personalización, integración o comportamiento del entorno.

## Entradas requeridas

Revisar primero la solicitud y los artefactos disponibles; no volver a preguntar por información ya aportada. Para producir un borrador enfocado, se necesita como mínimo:

- necesidad, problema u objetivo de negocio;
- producto o componente en alcance, o constancia de que aún debe confirmarse;
- proceso o escenario afectado y límites conocidos;
- al menos una fuente o declaración atribuible que respalde cada requisito que se presente como confirmado.

Entradas recomendadas, si existen:

- actores y perspectivas de las personas usuarias;
- proceso actual, proceso esperado, excepciones y resultados observables;
- fuentes autorizadas, fecha/versión o ubicación, autoridad y alcance de cada fuente;
- reglas, restricciones, decisiones aprobadas y decisiones abiertas;
- datos tratados, fuentes de datos, propiedad, calidad, retención y sensibilidad según fuentes aprobadas;
- sistemas, interfaces, eventos, reportes y dependencias conocidos;
- necesidades de seguridad, privacidad y cumplimiento definidas por responsables autorizados;
- identificadores, estructura documental, plantilla y ubicación de salida del repositorio;
- criterios de aceptación, pruebas o artefactos relacionados ya existentes.

Si faltan entradas, determinar si son pendientes o bloqueantes según su impacto. Continuar las secciones no afectadas y señalar qué no se puede definir responsablemente.

## Validaciones previas

Antes de redactar o modificar el documento:

1. Confirmar el tipo de tarea, producto/componente, objetivo, audiencia, alcance, exclusiones, formato y destino solicitado.
2. Leer `AGENTS.md`, `.github/agents/analista-funcional-afu.agent.md` y los artefactos SDD, requisitos, historias, pruebas y documentos funcionales relacionados que estén disponibles.
3. Revisar las convenciones locales y la plantilla pertinente en `templates/`, si existe y aplica. No asumir que la carpeta o una plantilla están disponibles sin inspeccionarlas.
4. Confirmar la convención de IDs vigente. Conservar IDs existentes; no renumerar, duplicar ni reutilizar identificadores.
5. Identificar fuente, ubicación, vigencia y autoridad para las afirmaciones que afectan alcance, reglas, datos, seguridad o aceptación. La información general del producto no prueba la configuración de una organización.
6. Separar hechos respaldados, información aportada aún no validada, supuestos, recomendaciones y preguntas/decisiones abiertas. Registrar contradicciones y sus fuentes sin escoger silenciosamente una versión.
7. Revisar si la entrada contiene datos personales, datos productivos, información comercial confidencial o secretos. No copiarlos al documento; solicitar una versión sanitizada cuando sea necesaria y continuar solo con información segura.
8. Verificar si una incertidumbre impide redactar un elemento o si permite documentarlo como pendiente. Formular preguntas concisas solo cuando la respuesta cambie materialmente el resultado.

## Estructura completa del documento funcional

Usar la plantilla del repositorio cuando corresponda. Si no existe o no aplica, adaptar esta estructura; justificar secciones no aplicables en lugar de rellenarlas con contenido supuesto. Marcar claramente campos pendientes.

1. **Control del documento**
	- título, identificador del artefacto y versión si la convención los contempla;
	- estado: borrador, en revisión, aprobado solo con evidencia explícita, u otro estado definido por el proyecto;
	- fecha/autores únicamente si se conocen y corresponde registrarlos;
	- historial de cambios y aprobaciones con referencias disponibles; no inferirlos.
2. **Resumen y propósito**: necesidad, resultado esperado, audiencia del documento y decisiones que busca soportar.
3. **Contexto y fuentes**: antecedentes relevantes, fuentes utilizadas con ubicación/versión y qué afirmaciones respaldan; registrar límites y contradicciones.
4. **Objetivos, alcance y exclusiones**: objetivos verificables; productos/componentes confirmados; procesos incluidos; fuera de alcance y motivos cuando estén documentados.
5. **Glosario**: términos, siglas y definiciones respaldadas; marcar los términos que requieren validación.
6. **Interesados y actores**: perspectivas funcionales, necesidades y decisiones que deben confirmar. No asignar autoridad, responsabilidad o permisos por inferencia.
7. **Proceso actual (AS-IS)**: pasos, disparadores, entradas, salidas, variantes, actores y problemas, siempre atribuidos a fuente o participante; vacíos como pendientes.
8. **Proceso esperado (TO-BE)**: flujo funcional objetivo y límites de lo decidido. Distinguir propuesta de decisión aprobada y destacar cambios respecto del proceso actual.
9. **Escenarios y flujos**: flujo principal, alternativos, excepciones, errores, cancelaciones, reintentos y resultados observables relevantes.
10. **Requisitos y reglas de negocio RN-XX**: catálogo estable y verificable, siguiendo las reglas de esta skill.
11. **Datos e información**: conceptos/campos requeridos, significado, origen, destino, obligatoriedad, calidad, conservación y sensibilidad cuando estén respaldados; no crear un modelo físico o valores de configuración no solicitados.
12. **Integraciones y dependencias**: sistemas/interacciones, dirección, evento o propósito, datos intercambiados, frecuencia/latencia y errores solo según fuentes; si no se conocen, registrar preguntas, no diseñar interfaces.
13. **Seguridad, permisos y privacidad**: necesidades confirmadas, matriz por validar, clasificación de datos y decisiones pendientes según la sección específica de esta skill.
14. **Reportes, medición y auditoría**: indicadores, consultas, evidencia o historial que negocio requiere, con definiciones y fuentes; no inventar métricas ni políticas de retención.
15. **Requisitos no funcionales y restricciones**: disponibilidad, rendimiento, accesibilidad, cumplimiento u otras cualidades únicamente si están requeridas o aprobadas; indicar fuente y método de validación esperado cuando se conozcan.
16. **Criterios de aceptación CA-XX**: condiciones observables relacionadas con requisitos respaldados; documentar escenarios y límites.
17. **Supuestos, preguntas abiertas, pendientes y bloqueantes**: registro con IDs, impacto y condición de resolución.
18. **Riesgos, dependencias y decisiones**: impactos conocidos, opciones si corresponde y quién debe resolver solo si la persona lo confirmó.
19. **Trazabilidad**: matriz de necesidades/fuentes ↔ RN ↔ CA ↔ TC y enlaces a historias u otros artefactos, si existen.
20. **Anexos y referencias**: material relevante, diagramas o artefactos relacionados sin duplicar información desactualizada.
21. **Revisión y aprobación humana**: personas/áreas y evidencia de revisión solo cuando esté disponible; aprobación de una sección o artefacto no implica aprobación de otros.

No todas las secciones necesitan contenido extenso. Si una sección no aplica al alcance, consignar “No aplica” con motivo cuando ayude a la revisión. Si no hay evidencia suficiente, usar “Pendiente de confirmación” y relacionarlo con su registro.

## Reglas para RN-XX

- **Significado**: RN-XX identifica un requisito funcional o regla de negocio documentada. Debe derivar de una necesidad, fuente autorizada o confirmación humana atribuible; no se inventa para completar una plantilla.
- **Formato y estabilidad**: si el proyecto adopta la convención, usar `RN-01`, `RN-02`, etc. con IDs únicos y estables dentro del alcance acordado. Respetar otra convención local si existe y documentar el mapeo a RN cuando se solicite.
- **Campos recomendados**: ID, tipo (requisito/regla), enunciado, necesidad/objetivo relacionado, fuente y ubicación, actor/proceso, prioridad solo si está confirmada, estado, supuestos/pendientes relacionados, CA vinculados y notas de revisión.
- **Redacción**: una obligación o regla por enunciado, con sujeto/contexto y resultado inequívoco. Usar lenguaje comprobable. Evitar “rápido”, “intuitivo”, “normalmente”, “adecuado” o “según corresponda” sin definir cómo verificarlos.
- **Origen**: mantener separado el enunciado respaldado de su interpretación. Las propuestas deben marcarse como propuestas hasta que las confirme una persona autorizada.
- **No mezclar**: no registrar una pregunta abierta como requisito decidido. No convertir una solución técnica sugerida, una capacidad general del producto, un permiso supuesto o un criterio de aceptación en una regla de negocio sin fuente.
- **Edición**: conservar IDs al cambiar redacción. Si un requisito se divide, fusiona, elimina o sustituye, actualizar referencias y conservar una nota de historial según la convención del repositorio; no reasignar un ID silenciosamente.
- **Estado**: distinguir borrador, por validar, confirmado/aprobado si existe evidencia, rechazado o reemplazado según los estados del proyecto. No declarar aprobación por una revisión automática.

Plantilla breve de fila RN:

| ID | Tipo | Enunciado verificable | Fuente/evidencia | Estado | CA relacionados | Pendientes |
|---|---|---|---|---|---|---|
| RN-01 | Requisito o regla | [una obligación/regla respaldada] | [referencia exacta] | [estado] | [CA-XX] | [P-XX/B-XX o Ninguno] |

## Seguridad y permisos

Documentar necesidades de seguridad como requisitos y decisiones que deben validarse con responsables autorizados. Nunca inferir nombres de roles, privilegios, unidades de negocio, políticas, acceso a registros/campos, configuración de Customer Insights ni capacidades habilitadas por convenciones del producto o por ejemplos.

Para cada necesidad de acceso, relevar cuando aplique:

- actor o función de negocio, sin equipararla a un rol/perfil de seguridad existente;
- acción necesaria (consultar, crear, modificar, eliminar, exportar, administrar u otra), sobre qué información y en qué contexto;
- alcance de datos requerido y restricciones conocidas;
- separación de funciones, aprobaciones o controles que ya estén definidos por una fuente autorizada;
- sensibilidad, datos personales, consentimiento, finalidad, minimización, retención y auditoría si las áreas competentes lo definen;
- fuente, responsable que debe confirmar y evidencia de decisión.

Puede usarse una matriz provisional sin valores inventados:

| Actor/función de negocio | Acción e información | Alcance requerido | Restricción/justificación | Fuente | Validación de seguridad |
|---|---|---|---|---|---|
| [por confirmar] | [por confirmar] | [por confirmar] | [por confirmar] | [referencia] | Pendiente |

Marcar cada elemento como confirmado únicamente con fuente aprobada o confirmación humana de la persona/área competente. Si no existe, registrar pendiente o bloqueante. No recomendar una configuración específica como si ya estuviera autorizada.

Aplicar minimización. No solicitar ni reproducir datos reales de clientes, datos de producción, credenciales, tokens, claves o secretos. Si una entrada contiene material sensible, no citarlo en el documento; pedir una versión sanitizada y avisar que el secreto debe gestionarse según el procedimiento de la organización, sin probarlo ni repetir su valor. Los ejemplos, criterios y pruebas deben usar datos sintéticos.

## Gestión de pendientes y bloqueantes

Registrar cada asunto con un identificador estable (`P-XX` para pendiente y `B-XX` para bloqueante, si el proyecto no define otra convención), descripción, fuente/artefacto relacionado, RN/CA/TC afectados, impacto, dato o decisión requerida y estado. Añadir responsable propuesto o fecha únicamente si una persona lo indicó; de lo contrario, dejar esos campos sin asignar.

- **Pendiente**: falta información o validación, pero se puede avanzar en partes no afectadas sin presentar una suposición como hecho. Indicar qué queda condicionado.
- **Bloqueante**: falta una condición necesaria para redactar, validar o entregar responsablemente un elemento específico. Indicar exactamente qué parte se detiene y qué evidencia o decisión permite reanudarla.

No ocultar bloqueantes para completar el documento ni bloquear todo el trabajo si hay secciones independientes que pueden continuar. Al recibir nueva evidencia, actualizar estado y relaciones, conservando historial o referencia previa cuando sea posible. Reflejar los asuntos relevantes en el semáforo: Verde listo para revisión, Amarillo pendiente o Rojo bloqueado, siempre con motivo y alcance. El semáforo no equivale a aprobación.

## Trazabilidad

Cuando el proyecto use esta convención, mantener relaciones verificables **necesidad/fuente → RN-XX → CA-XX → TC-XX**. Enlazar también historias, procesos, decisiones o artefactos relacionados cuando existan y aporten valor.

- Cada RN debe tener al menos un CA o quedar reportado explícitamente sin cobertura.
- Cada CA debe relacionarse con uno o más RN respaldados; un criterio no crea ni aprueba un requisito.
- Cada TC debe verificar uno o más CA y utilizar datos sintéticos.
- Cada enlace debe referenciar IDs existentes y únicos. No crear vínculos ficticios para cerrar huecos.
- Mantener trazabilidad bidireccional mediante referencias en los artefactos o una matriz equivalente.
- Relacionar pendientes/bloqueantes con los requisitos y criterios que afectan.
- Preservar IDs existentes; actualizar referencias al cambiar artefactos y reportar relaciones huérfanas, inválidas o incompletas.
- Si el repositorio usa otra convención, respetarla; no mezclar RN/CA/TC silenciosamente.

Formato mínimo de matriz:

| Necesidad/fuente | RN | CA | TC | Estado/cobertura |
|---|---|---|---|---|
| [referencia] | [RN-XX] | [CA-XX] | [TC-XX] | [cubierto/pendiente/huérfano] |

No derivar CA o TC de reglas todavía abiertas como si estuvieran confirmadas. Se pueden describir opciones de validación, claramente marcadas como propuestas pendientes.

## Control estático

Antes de entregar o modificar sustancialmente el documento, aplicar los controles pertinentes usando únicamente medios disponibles y autorizados:

1. **Estructura**: secciones requeridas presentes; placeholders y campos vacíos obligatorios identificados; formato alineado con plantilla/convenio local.
2. **Fuentes**: afirmaciones funcionales y RN tienen fuente/ubicación o están marcadas como información aportada, supuesto o pendiente; contradicciones visibles.
3. **IDs**: RN/CA/TC y P/B únicos, estables, con formato consistente y referencias válidas; IDs locales preservados.
4. **Calidad de requisitos**: enunciados claros, atómicos cuando sea posible y verificables; prioridad/estado/autoridad no inventados.
5. **Trazabilidad**: cobertura y relaciones RN → CA → TC verificadas; huérfanos, requisitos sin criterio, pruebas sin criterio y enlaces inválidos informados.
6. **Coherencia**: alcance, procesos, requisitos, criterios, pendientes, bloqueantes, supuestos, riesgos y semáforo no se contradicen.
7. **Seguridad y datos**: accesos respaldados o pendientes; no hay permisos inferidos, datos reales, secretos ni ejemplos identificables; revisar minimización.
8. **Criterios y pruebas**: resultados observables, condiciones comprensibles y pruebas sintéticas alineadas con sus criterios.
9. **Estado humano**: aprobación solo se consigna con evidencia explícita; la validación estática no declara aprobación.

Informar qué controles se ejecutaron, resultados, hallazgos y controles no disponibles. La revisión estática no demuestra comportamiento en Dynamics, no sustituye pruebas ejecutadas, evaluación de seguridad, revisión de dominio o aprobación humana. No afirmar que una prueba, script, consulta o revisión externa se realizó si no ocurrió.

## Checklist de calidad

- [ ] El propósito, el producto/componente y los límites del documento están claros.
- [ ] Cada hecho funcional relevante tiene fuente o atribución y los supuestos se distinguen.
- [ ] AS-IS y TO-BE no se confunden; lo propuesto no se presenta como aprobado.
- [ ] Las reglas/requisitos RN-XX son claros, verificables, únicos y estables.
- [ ] Excepciones, errores, variantes y límites pertinentes están cubiertos o registrados como pendientes.
- [ ] Los datos, integraciones, reportes y requisitos no funcionales se basan en fuentes; no se inventaron detalles técnicos.
- [ ] Seguridad, privacidad y permisos están documentados como confirmados solo con evidencia; lo demás queda pendiente/bloqueante.
- [ ] Ningún requisito o criterio introduce permisos, roles, políticas o capacidades no aprobadas.
- [ ] CA-XX y TC-XX se vinculan a los requisitos adecuados, con resultados observables y datos sintéticos.
- [ ] La matriz de trazabilidad no contiene referencias inválidas ni oculta elementos huérfanos.
- [ ] Los pendientes/bloqueantes indican impacto, artefactos afectados y condición para resolverlos; no asignan personas o fechas por inferencia.
- [ ] No se copiaron datos sensibles ni secretos; no se afirma haber consultado fuentes o herramientas no utilizadas.
- [ ] Se identifican verificaciones no disponibles y el resultado sigue marcado como borrador hasta aprobación humana explícita.

Registrar cada control como cumplido, pendiente o no aplicable, con hallazgos breves. No usar una lista completa como evidencia de aprobación.

## Salida a archivo

Cuando se solicite un archivo:

1. Revisar la ubicación y los artefactos existentes, las convenciones y la plantilla aplicable de `templates/` si está disponible.
2. Usar la ruta y el formato indicados por la persona o por una convención clara del repositorio. Si no hay destino deducible, preguntar o proponer una ruta antes de crear.
3. No sobrescribir un documento funcional existente sin una solicitud clara de actualización. Si se actualiza, preservar contenido ajeno al pedido, IDs, referencias e historial aplicable.
4. Crear o modificar únicamente los archivos solicitados, en el alcance autorizado. No ejecutar cambios en Dynamics ni otros sistemas externos.
5. Presentar el archivo como borrador para revisión y aprobación humana; incluir fuentes, estado, pendientes/bloqueantes, controles realizados y limitaciones.

Si no se pidió archivo, entregar el borrador en la conversación. Si una fuente, plantilla o verificación no está disponible, señalarlo; nunca simular que se consultó o ejecutó.

## Ejemplo completo

El siguiente ejemplo es enteramente ficticio y usa datos sintéticos. No describe una configuración real de Dynamics ni una implementación aprobada. Se muestra compacto para ilustrar cómo un documento completo hace visibles los vacíos.

### Documento funcional: seguimiento de consultas comerciales

#### 1. Control del documento

- ID: DF-EJ-01 (identificador ilustrativo).
- Versión: 0.1.
- Estado: borrador para revisión humana; no aprobado.
- Producto en alcance: Dynamics 365 Sales como contexto de solución solicitado; edición, versión y configuración del entorno no confirmadas.
- Historial: creación inicial del ejemplo sintético.

#### 2. Resumen y propósito

La organización ficticia “Lumen Sur” busca documentar el registro y seguimiento de consultas comerciales recibidas desde su formulario web. El propósito de este documento es acordar qué información debe conservarse y qué resultado funcional espera negocio. No define una integración técnica ni permisos.

#### 3. Contexto y fuentes

- F-EJ-01: minuta ficticia de entrevista del 2026-10-01, atribuida a una persona representante de negocio. Para este ejemplo, confirma que se necesita registrar canal y fecha de recepción de cada consulta web, y que el seguimiento debe permitir registrar un resultado.
- F-EJ-02: catálogo ficticio de estados comerciales, mencionado en la misma minuta pero no adjunto ni validado; pendiente de recibir.
- Las fuentes son ilustrativas, no existen como evidencia del workspace y no prueban capacidades ni configuración del producto.

#### 4. Objetivos, alcance y exclusiones

- Objetivo: definir necesidades funcionales para registrar y dar seguimiento a consultas web.
- Incluye: información de origen, acción de seguimiento y registro de resultado.
- Excluye: diseño del formulario, integración técnica, automatizaciones, reportes, Customer Insights, migración y configuración del tenant.
- El significado y valores permitidos de “resultado” dependen de F-EJ-02 y quedan pendientes.

#### 5. Glosario

| Término | Definición | Estado/fuente |
|---|---|---|
| Consulta web | Solicitud comercial recibida mediante el formulario web | Aportado en F-EJ-01; confirmar alcance exacto |
| Resultado de seguimiento | Resultado registrado tras una acción comercial | F-EJ-01; catálogo de valores pendiente en F-EJ-02 |

#### 6. Interesados y actores

- Persona representante de negocio: aportó las necesidades recogidas en F-EJ-01; la autoridad formal de aprobación debe confirmarse.
- Persona usuaria comercial: perspectiva necesaria para validar el flujo de seguimiento; participante y responsabilidades concretas pendientes de confirmar.
- Responsables de seguridad/privacidad: deben validar la matriz de acceso y el tratamiento de datos antes de cerrar esos puntos; responsables individuales no asignados.

#### 7. Proceso actual (AS-IS)

No hay una fuente suficiente para describir el proceso actual. **P-01**: solicitar una descripción del registro, asignación y seguimiento actuales. No inferir pasos a partir del producto.

#### 8. Proceso esperado (TO-BE)

Según F-EJ-01, el flujo esperado debe permitir registrar el canal y fecha de recepción de una consulta web y registrar el resultado de su seguimiento. Los pasos, actores, estados y excepciones adicionales quedan por validar; no se propone una configuración específica.

#### 9. Escenarios y flujos

- Principal propuesto para validación: se recibe una consulta web, se conserva su canal y fecha de recepción, se realiza el seguimiento correspondiente y se registra el resultado acordado.
- Excepciones por relevar: información incompleta, duplicados, consulta no contactable, seguimiento repetido y corrección del resultado. No hay decisión documentada sobre su tratamiento.

#### 10. Requisitos y reglas RN-XX

| ID | Tipo | Enunciado verificable | Fuente/evidencia | Estado | CA relacionados | Pendientes |
|---|---|---|---|---|---|---|
| RN-01 | Requisito | Para cada consulta recibida desde el formulario web, el proceso debe conservar el canal de origen y la fecha de recepción. | F-EJ-01 | Por validar en el documento | CA-01 | P-02 |
| RN-02 | Requisito | Para cada seguimiento realizado sobre una consulta, el proceso debe permitir registrar el resultado del seguimiento. | F-EJ-01 | Por validar en el documento | CA-02 | P-03 |

No se define formato, zona horaria, catálogo de resultados ni mecanismo técnico porque las fuentes no lo establecen.

#### 11. Datos e información

| Dato conceptual | Uso | Definición/origen | Validación pendiente |
|---|---|---|---|
| Canal de origen | Identificar que la consulta provino del formulario web | Necesidad de F-EJ-01; valores no especificados | Confirmar representación y valores permitidos |
| Fecha de recepción | Registrar cuándo se recibió la consulta | Necesidad de F-EJ-01; formato/zona horaria no especificados | Confirmar significado y precisión requerida |
| Resultado de seguimiento | Documentar el resultado de una acción | Necesidad de F-EJ-01; catálogo F-EJ-02 no adjunto | Recibir y validar catálogo |

No se incluyen valores de clientes; cualquier ejemplo posterior debe ser sintético.

#### 12. Integraciones y dependencias

- Dependencia: conocer el comportamiento del formulario web y el traspaso de datos, si existe.
- Estado: fuera del alcance de diseño de este documento y pendiente de confirmar como dependencia real. No se afirma que haya integración.

#### 13. Seguridad, permisos y privacidad

No se recibió una política o matriz de acceso aprobada. No se definen roles ni privilegios.

| Actor/función | Acción e información | Alcance requerido | Fuente | Validación |
|---|---|---|---|---|
| Persona usuaria comercial | Consultar y registrar seguimiento, por confirmar | Por definir por negocio y seguridad | Sin fuente disponible | B-01 bloqueante para cerrar permisos |

La clasificación, retención, consentimiento y auditoría de datos deben ser validados por las áreas competentes antes de aprobar el diseño. No se incluyeron datos reales.

#### 14. Reportes, medición y auditoría

No se solicitaron métricas ni reportes en F-EJ-01. Confirmar si son necesarios; no se incluyen como requisito hasta contar con una fuente.

#### 15. Requisitos no funcionales y restricciones

No se aportaron requisitos no funcionales. Rendimiento, disponibilidad, accesibilidad y cumplimiento quedan fuera de definición y requieren fuentes/responsables si aplican.

#### 16. Criterios de aceptación y casos de prueba

| ID | Criterio observable | Verifica |
|---|---|---|
| CA-01 | Dada una consulta sintética recibida desde el formulario web, al revisar el registro funcional debe poder identificarse el canal de origen y la fecha de recepción correspondientes. | RN-01 |
| CA-02 | Dada una consulta sintética con un seguimiento realizado, al revisar su información debe poder identificarse el resultado registrado. Los valores válidos del resultado se mantienen pendientes hasta recibir F-EJ-02. | RN-02 |

| TC | CA | Datos sintéticos y resultado esperado |
|---|---|---|
| TC-01 | CA-01 | Consulta ficticia `WEB-0001`, canal `Formulario web`, fecha ficticia `2026-09-15`; verificar que ambos datos queden identificables en el registro funcional. |
| TC-02 | CA-02 | Consulta ficticia `WEB-0002`, resultado ficticio `Contactada`; verificar que el resultado se identifique. El valor no representa un catálogo aprobado y requiere validación contra F-EJ-02. |

Estos TC ilustran cobertura, no son pruebas ejecutadas ni evidencian comportamiento real del producto.

#### 17. Supuestos, preguntas abiertas, pendientes y bloqueantes

| ID | Tipo | Descripción e impacto | Relación | Información requerida | Estado |
|---|---|---|---|---|---|
| P-01 | Pendiente | No se documentó el proceso actual; limita la comparación AS-IS/TO-BE. | Secciones 7-9 | Descripción validada del proceso actual | Abierto |
| P-02 | Pendiente | No están definidos formato, valores ni zona horaria de canal/fecha. | RN-01, CA-01 | Decisión funcional respaldada | Abierto |
| P-03 | Pendiente | No se recibió el catálogo de resultados. | RN-02, CA-02, TC-02 | F-EJ-02 vigente y aprobado | Abierto |
| B-01 | Bloqueante | No se puede cerrar qué actores tendrán acceso ni qué acciones podrán realizar. | Sección 13; aprobación del documento | Fuente/matriz aprobada por negocio y seguridad | Abierto |

#### 18. Riesgos, dependencias y decisiones

- Riesgo: cerrar el alcance sin el proceso actual puede omitir excepciones importantes. Mitigación propuesta: validar P-01 antes de aprobar el flujo.
- Dependencia: confirmar si el formulario y la transferencia de datos forman parte del alcance; no se presume integración.
- Decisión pendiente: aprobar catálogo de resultados y definición de datos. No se asigna responsable ni fecha en ausencia de confirmación.

#### 19. Trazabilidad

| Necesidad/fuente | RN | CA | TC | Estado/cobertura |
|---|---|---|---|---|
| F-EJ-01: canal y fecha de recepción | RN-01 | CA-01 | TC-01 | Relación completa en borrador; requiere validación humana |
| F-EJ-01: registrar resultado del seguimiento | RN-02 | CA-02 | TC-02 | Cobertura ilustrativa; catálogo pendiente P-03 |

#### 20. Anexos y referencias

- F-EJ-01 y F-EJ-02 son referencias simuladas para este ejemplo y no deben interpretarse como archivos reales.
- No hay diagramas ni artefactos adicionales disponibles en el ejemplo.

#### 21. Revisión, control y aprobación

- Control estático ilustrativo: estructura presente; IDs y enlaces RN → CA → TC consistentes; P-01/P-03 visibles; B-01 visible; valores de TC sintéticos.
- No se verificaron configuración de Dynamics, integraciones, permisos, cumplimiento ni comportamiento en un tenant.
- Semáforo: **Amarillo — pendiente**, porque el documento puede revisarse funcionalmente, pero faltan decisiones de datos y seguridad; B-01 impide cerrar permisos.
- Estado final: borrador pendiente de revisión y aprobación humana explícita. Este ejemplo no registra una aprobación real.
