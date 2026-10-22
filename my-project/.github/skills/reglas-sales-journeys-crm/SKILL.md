---
name: "reglas-sales-journeys-crm"
description: "Usar para analizar reglas funcionales y journeys comerciales de Dynamics 365 Sales y Customer Insights, detectar segmentación, consentimiento, eventos, canales, impactos cruzados y decisiones faltantes sin asumir capacidades habilitadas."
---

# Reglas funcionales y journeys comerciales CRM

## Propósito

Detectar reglas funcionales faltantes, contradicciones, journeys incompletos, impactos cruzados y decisiones pendientes en procesos relacionados con Dynamics 365 Sales y Customer Insights. Producir un análisis trazable que permita a las personas responsables completar y revisar las definiciones antes de utilizarlas para implementar o probar una solución.

Aplicar las políticas de `AGENTS.md` y los límites de `.github/agents/analista-funcional-afu.agent.md`. Distinguir hechos respaldados, información aportada, supuestos, recomendaciones y decisiones abiertas. El resultado permanece como borrador hasta aprobación humana explícita.

## Cuándo usarla

Usar para analizar o revisar:

- reglas de entrada, calificación, asignación, seguimiento, transición y cierre de procesos comerciales;
- recorridos comerciales, journeys de interacción y transferencias entre marketing, ventas u otros procesos;
- segmentos, eventos, disparadores, canales, mensajes y sus restricciones funcionales;
- cambios que puedan afectar otros journeys, reglas, datos, integraciones o artefactos SDD;
- especificaciones parciales que requieren preguntas y decisiones antes de redactar requisitos definitivos.

Un journey comercial es el recorrido de negocio que se está analizando; no significa necesariamente un journey configurado en Customer Insights. Confirmar si Customer Insights se refiere a Data, Journeys o ambos. No asumir que los productos están implementados, conectados, licenciados o habilitados.

No reemplazar el Documento Funcional, las historias de usuario, los casos UAT, el diseño técnico ni una evaluación jurídica o de seguridad. Usar las skills especializadas para esos entregables si se solicitan dentro del alcance autorizado.

## Entradas requeridas

Identificar en la solicitud y los artefactos existentes:

- objetivo de negocio y resultado esperado;
- proceso o journey, productos/componentes mencionados y límites del análisis;
- actores y perspectivas involucradas, sin equipararlos a roles de seguridad;
- fuentes disponibles: Documento Funcional, RN, diagramas, minutas, políticas o declaraciones atribuibles;
- reglas, etapas, segmentos, eventos, canales y decisiones conocidas, aunque estén incompletas.

Solicitar cuando sea pertinente y no esté disponible:

- fuentes autorizadas y su ubicación, versión/fecha, alcance y evidencia de aprobación;
- proceso actual y esperado, variantes, exclusiones, estados y resultados observables;
- definición de datos, identidad, consentimiento, privacidad, retención y acceso;
- dependencias entre productos, intercambios de datos y sistemas relacionados;
- cambios propuestos, artefactos afectados y convenciones de identificadores;
- formato, audiencia y destino del resultado.

La falta de información no autoriza completarla por conjetura. Puede iniciarse un análisis parcial de vacíos; señalar qué partes no pueden definirse y qué evidencia permitiría completarlas. No pedir datos reales ni secretos para realizar el análisis.

## Flujo de análisis

1. Leer las políticas, los artefactos pertinentes y los IDs existentes. Confirmar objetivo, producto/componente, alcance y tipo de resultado.
2. Inventariar fuentes y distinguir proceso actual, objetivo propuesto y decisiones aprobadas. Registrar contradicciones con ambas ubicaciones.
3. Reconstruir únicamente las reglas y etapas respaldadas. Marcar conexiones propuestas o desconocidas, sin dibujarlas como funcionamiento confirmado.
4. Analizar reglas, recorrido, segmentación, consentimiento, eventos y canales según las secciones siguientes.
5. Evaluar dependencias e impacto cruzado tanto en el proceso que origina un cambio como en quienes consumen su resultado.
6. Aplicar las preguntas obligatorias a los vacíos detectados. Preguntar solo lo no resuelto que cambie materialmente alcance, seguridad o resultado.
7. Registrar hallazgos, pendientes y bloqueantes; relacionarlos con etapas, fuentes y RN existentes. No convertir un hallazgo en una regla decidida.
8. Ejecutar el control estático y presentar un borrador con semáforo, evidencia utilizada, decisiones humanas requeridas y límites de verificación.

## Análisis de reglas funcionales

Para cada regla, revisar:

- propósito y necesidad que la justifican;
- sujeto, población, proceso o registro al que aplica;
- condición de entrada y datos necesarios para evaluarla;
- acción o resultado esperado, prioridad entre reglas solo si fue decidida;
- excepciones, condiciones negativas, conflictos y valores faltantes;
- momento de evaluación, vigencia y tratamiento de cambios posteriores;
- fuente, estado de confirmación y vínculo al RN correspondiente.

Detectar reglas ambiguas, solapadas o contradictorias, condiciones sin resultado, resultados sin condición y criterios que no permiten verificación. Probar la claridad con situaciones sintéticas de límite, duplicidad y ausencia de datos; no presentar ese razonamiento como una prueba ejecutada en Dynamics.

| RN o referencia | Condición | Resultado | Excepción/conflicto | Fuente | Vacío o decisión |
|---|---|---|---|---|---|
| [RN existente o sin RN] | [condición respaldada] | [resultado respaldado] | [definido/pendiente] | [ubicación] | [P/B o ninguno] |

Si falta una definición, redactar la pregunta necesaria; no asignar un RN definitivo a una regla inventada. Las recomendaciones se etiquetan como propuestas, no como políticas aprobadas.

## Análisis de journeys comerciales

Representar el recorrido como etapas y transiciones funcionales, no como configuración de producto. Revisar para cada etapa:

- objetivo, actor y punto de entrada;
- condición para permanecer, avanzar, retroceder o salir;
- entradas/salidas de datos y efecto observable;
- esperas, vencimientos, falta de respuesta y finalización, si el negocio los define;
- rutas alternativas, cancelación, repetición y reingreso;
- transferencias entre áreas/productos y confirmación de recepción;
- manejo de errores, rechazo, duplicados y recuperación;
- reglas, segmentos, eventos, consentimiento y mensajes asociados.

Detectar etapas sin entrada/salida, ramas sin destino, recorridos sin cierre, ciclos sin condición de término, transferencias sin recepción confirmada y superposición con otros journeys. No inventar plazos, reintentos, automatizaciones ni responsables para cerrar el dibujo.

| Etapa | Entrada/disparador | Acción o resultado | Salida/transición | RN/fuente | Vacío |
|---|---|---|---|---|---|
| [etapa] | [condición] | [comportamiento] | [destino o cierre] | [referencia] | [P/B o ninguno] |

## Segmentación

Revisar la población objetivo, criterios de inclusión/exclusión, fuentes de datos, definición de identidad, datos faltantes y duplicados. Confirmar cómo se combinan condiciones, cuándo se evalúa la pertenencia y qué sucede si cambia durante el recorrido.

Investigar solapamientos entre segmentos, exclusiones contradictorias, elegibilidad frente a consentimiento y efecto de un cambio en segmentos compartidos por otros journeys. No equiparar pertenencia a segmento con autorización de contacto.

No afirmar que un segmento es estático, dinámico, en tiempo real o compartido entre productos sin evidencia aplicable. Registrar la necesidad funcional por separado del mecanismo técnico que podría implementarla.

## Consentimiento y privacidad

Identificar qué políticas y decisiones autorizadas rigen finalidad, población, canal, uso de datos y comunicaciones. Preguntar por:

- fuente autorizada del estado de consentimiento o de la condición aplicable al contacto;
- alcance por finalidad/canal y reglas para cambios, revocación, oposición o estado desconocido;
- momento de evaluación y efecto sobre acciones ya planificadas o transferencias;
- minimización, acceso, conservación y evidencia requerida por las políticas pertinentes;
- responsabilidades para confirmar decisiones de privacidad y cumplimiento.

No establecer bases jurídicas, plazos de retención, políticas ni un comportamiento por defecto para consentimiento ausente. Si no hay una regla aprobada que permita definir una comunicación, bloquear esa definición y pedir decisión competente; esto no demuestra cómo se comporta el producto.

Usar solo datos sintéticos en ejemplos. No reproducir datos personales, productivos, comerciales confidenciales o secretos. Pedir entradas sanitizadas si hace falta; ante un secreto, no usarlo ni probarlo y avisar para que se gestione según el procedimiento organizacional.

## Eventos y disparadores

Para cada evento, identificar significado de negocio, origen, condición, datos mínimos y acción esperada. Confirmar identidad/correlación, momento del evento frente a recepción, duplicados, eventos tardíos o fuera de orden, reenvíos, ausencia y errores cuando afecten al resultado.

Separar el hecho de negocio de su eventual mecanismo de integración. No asumir disponibilidad de un disparador, procesamiento inmediato, entrega garantizada, frecuencia, límites técnicos o API. Si esas propiedades son necesarias, solicitar una fuente aplicable y registrar la dependencia.

## Canales y mensajería

Confirmar para cada interacción el propósito, audiencia, canal requerido, contenido/plantilla, idioma y evidencia de aprobación cuando corresponda. Analizar restricciones de contacto, frecuencia, horarios, zona horaria, exclusión y coordinación con otras comunicaciones solo según políticas disponibles.

Relevar tratamiento de mensajes no entregados, respuestas, bajas, cambio de canal y transferencias al equipo comercial. No presuponer un canal alternativo, un envío, una plantilla aprobada ni medición disponible. Distinguir necesidad de negocio de capacidad documentada del producto y de habilitación local.

## Dependencias

Registrar fuentes de datos, catálogos, identidad, políticas, decisiones, integraciones, accesos, otros procesos y capacidades cuya confirmación sea necesaria. Para cada dependencia, incluir fuente, elemento afectado, impacto, estado y condición de satisfacción.

Distinguir dependencia confirmada de hipótesis. No inventar disponibilidad, responsables, fechas, licencias ni permisos; registrar responsables/fechas solo si fueron indicados por una persona. No asumir que una mención en un diagrama prueba una integración desplegada.

## Impacto cruzado

Analizar cambios en ambas direcciones: qué consumidores pueden verse afectados y qué condiciones del proceso de origen cambian. Explorar, según el alcance:

- reglas y datos compartidos por Sales y Customer Insights;
- segmentos usados por más de un recorrido;
- consentimiento y exclusiones frente a mensajes ya planificados;
- eventos reutilizados, duplicación de contactos y recorridos simultáneos;
- transferencia, seguimiento comercial y comunicación de resultados;
- indicadores, auditoría, HU, CA y TC existentes afectados.

| Cambio propuesto | Origen | Destino/artefacto afectado | Impacto confirmado o potencial | Fuente | Validación pendiente |
|---|---|---|---|---|---|
| [cambio] | [proceso] | [consumidor] | [efecto y grado de certeza] | [referencia] | [P/B] |

No afirmar impacto comprobado cuando solo exista una hipótesis. No modificar artefactos relacionados fuera de la autorización; informar las referencias que necesitarían revisión.

## Preguntas obligatorias para detectar información faltante

Evaluar obligatoriamente estas preguntas; no volver a formular las ya respondidas por fuentes. Marcar las no aplicables con motivo. Agrupar las preguntas abiertas por decisión y consultar primero las de impacto material:

1. ¿Qué objetivo y resultado observable definen el éxito y qué queda fuera del análisis?
2. ¿Qué productos/componentes intervienen y qué evidencia confirma su disponibilidad o configuración local?
3. ¿Qué condiciones determinan entrada, permanencia, salida y reingreso al recorrido?
4. ¿Qué dato o fuente permite evaluar cada regla y qué sucede si falta, cambia o contradice otra fuente?
5. ¿Cómo se resuelven reglas simultáneas, excepciones, duplicados o prioridades en conflicto?
6. ¿Cómo se incluye/excluye a una persona sintética de un segmento y qué ocurre si su pertenencia cambia?
7. ¿Qué fuente y política aprobadas determinan si una comunicación es admisible para esa finalidad y canal?
8. ¿Qué debe ocurrir ante consentimiento desconocido, cambio o revocación, y quién debe confirmar esa decisión?
9. ¿Qué origina cada evento y qué tratamiento está definido para duplicados, demoras, ausencia o errores?
10. ¿Qué canales y mensajes están requeridos y qué evidencia respalda restricciones, aprobación y tratamiento de fallas?
11. ¿Cómo se confirma una transferencia entre marketing y ventas, y qué ocurre si no hay recepción o seguimiento?
12. ¿Qué otros segmentos, journeys, procesos o artefactos consumen los datos/reglas afectados?
13. ¿Qué decisiones faltan, qué elemento bloquean y qué evidencia o confirmación permite continuar?
14. ¿Qué RN respaldan el recorrido y qué CA/TC existentes permiten comprobarlo? ¿Dónde hay brechas?

No es necesario resolver todo para entregar hallazgos parciales. No usar supuestos reversibles para sustituir decisiones de negocio, seguridad, permisos o consentimiento.

## Gestión de pendientes y bloqueantes

Conservar IDs existentes. Si no hay convención, usar P-XX y B-XX únicos y estables, sin renumerar registros previos. Incluir descripción, motivo, fuente/ubicación, etapa o RN afectado, impacto, dato/decisión requerida, estado y condición de resolución. Añadir responsable o fecha solo con confirmación humana.

- **Pendiente**: falta una definición, pero otras partes pueden avanzar sin asumirla cierta.
- **Bloqueante**: impide definir, verificar o entregar responsablemente un elemento específico. Precisar el trabajo detenido y cómo desbloquearlo.

Actualizar registros y relaciones al recibir evidencia, conservando historial cuando sea posible. No resolver contradicciones por cuenta propia ni convertir recomendaciones en decisiones.

Asignar semáforo con motivo y alcance: Verde, listo para revisión sin bloqueantes conocidos; Amarillo, análisis parcial con pendientes; Rojo, elemento bloqueado. Si una parte está bloqueada, mostrar su Rojo aunque otras partes avancen. Ningún color significa aprobación, habilitación ni autorización de contacto.

## Trazabilidad con RN-XX

Vincular cada regla documentada con su fuente, etapa, segmento, evento o canal y RN existente. Conservar IDs del proyecto. Crear nuevos RN únicamente para requisitos respaldados dentro del alcance autorizado, nunca para rellenar un vacío.

| Fuente | RN | Elemento del journey | CA/TC existentes | Hallazgo o pendiente |
|---|---|---|---|---|
| [ubicación] | [RN existente o sin RN] | [etapa/regla] | [referencias o sin cobertura] | [P/B o ninguno] |

Cuando existan CA/TC, comprobar la cadena RN → CA → TC y sus referencias en ambos sentidos o mediante matriz equivalente. Reportar RN sin CA, CA sin RN, TC sin CA y requisitos sin prueba. No inventar criterios, casos ni relaciones para completar cobertura. Si esos artefactos no están disponibles, indicar la verificación pendiente. Respetar otras convenciones sin mezclarlas silenciosamente.

## Estructura de salida

Entregar un borrador con:

1. Objetivo, productos/componentes, alcance y exclusiones.
2. Fuentes utilizadas, autoridad/estado y distinción entre hechos, información aportada, supuestos y propuestas.
3. Catálogo de reglas y mapa de etapas/transiciones.
4. Análisis de segmentación, consentimiento, eventos, canales y mensajería.
5. Dependencias e impactos cruzados, distinguiendo efectos confirmados y potenciales.
6. Preguntas abiertas y registro de pendientes/bloqueantes.
7. Matriz de trazabilidad a RN y cobertura CA/TC disponible.
8. Controles realizados, hallazgos, limitaciones y semáforo por alcance.
9. Decisiones y revisión humana necesarias; no presentar el análisis como aprobado.

## Control estático

Antes de entregar, comprobar manualmente o con medios disponibles y autorizados:

1. Secciones y campos requeridos presentes; placeholders y vacíos explícitos.
2. Fuentes identificadas y afirmaciones locales no inferidas de documentación general del producto.
3. Reglas comprensibles: condiciones, resultados, excepciones y conflictos definidos o registrados como pendientes.
4. Etapas con entradas/salidas y ramas/ciclos revisados; rutas incompletas visibles.
5. Segmentación, consentimiento, eventos y canales analizados sin inventar capacidades, permisos o políticas.
6. Dependencias e impactos cruzados documentados con grado de certeza y alcance.
7. IDs únicos y referencias válidas; cobertura RN/CA/TC y huérfanos reportados cuando los artefactos estén disponibles.
8. Coherencia entre hallazgos, pendientes, bloqueantes y semáforo.
9. Ejemplos exclusivamente sintéticos, sin información sensible ni secretos visibles.
10. Aprobaciones solo con evidencia humana explícita; fuentes y herramientas citadas realmente consultadas.

Informar resultado de cada control y lo no verificable. La revisión estática no demuestra comportamiento, integración, cumplimiento ni disponibilidad real de Dynamics; no sustituye UAT, revisión experta o aprobación humana. No afirmar que se ejecutó una consulta o prueba que no se realizó.

## Checklist

- [ ] Objetivo, alcance, productos y significado de journey están claros.
- [ ] Las fuentes y estados de confirmación se distinguen de supuestos y propuestas.
- [ ] Cada regla tiene condición, resultado y excepción definidos o un pendiente visible.
- [ ] Entradas, salidas, ramas, esperas, reingresos y errores pertinentes están cubiertos o señalados.
- [ ] Segmentación no se confunde con autorización de contacto.
- [ ] Consentimiento y privacidad se apoyan en fuentes aprobadas o quedan por decisión competente.
- [ ] Eventos, canales y mensajes no se presentan como configurados sin evidencia.
- [ ] Dependencias e impactos cruzados tienen fuente o están marcados como potenciales.
- [ ] Las preguntas obligatorias fueron evaluadas sin repetir las ya respondidas.
- [ ] Pendientes/bloqueantes tienen impacto, relaciones y condición de resolución.
- [ ] Trazabilidad y cobertura disponibles se revisaron sin enlaces ficticios.
- [ ] No hay permisos, responsables, fechas, datos reales ni aprobaciones inventados.
- [ ] Se informan controles, limitaciones y revisión humana pendiente.

Registrar cada punto como cumplido, pendiente o no aplicable con su motivo. Completar el checklist no aprueba el journey.

## Salida a archivo

Si se solicita un archivo, revisar convenciones, artefactos existentes y plantilla pertinente de `templates/` si está disponible. Usar el destino indicado o uno inequívoco del proyecto; si no existe, preguntar o proponerlo antes de crear.

No sobrescribir sin solicitud clara de actualización. Preservar IDs, historial y contenido ajeno al alcance. Escribir solo artefactos solicitados y autorizados; no configurar, publicar, activar journeys, enviar mensajes ni operar en servicios externos.

Si no se pidió archivo, entregar el borrador en la conversación. Informar rutas afectadas, fuentes, controles realizados, límites y decisiones pendientes, sin simular acceso al tenant o aprobaciones.

## Limitaciones

- No hay acceso implícito a tenants, APIs, permisos, configuración ni documentación externa.
- La evidencia general de producto no confirma habilitación, versión, licencias o comportamiento local.
- Un diagrama o una intención de integración no prueba una transferencia operativa.
- No se garantizan exhaustividad, cumplimiento o viabilidad técnica con fuentes incompletas.
- No se deciden políticas de consentimiento, reglas comerciales, prioridades ni configuración en nombre de una persona.
- Los hallazgos requieren validación de negocio y, según el asunto, seguridad, privacidad, arquitectura o producto.

## Ejemplo completo

### Solicitud y contexto sintéticos

“Revisá el recorrido desde una invitación comercial hasta el seguimiento en Sales y señalá lo que falta para definirlo”. Todo el ejemplo es ficticio; no describe un tenant ni una aprobación real.

**Alcance**: análisis funcional de una invitación y su transferencia comercial. Sales y Customer Insights se mencionan como productos objetivo; el componente Customer Insights y su habilitación no están confirmados. Fuera de alcance: implementación, envío real y configuración.

### Fuentes ilustrativas

- F-EJ-01, minuta ficticia, sección “Recorrido deseado”: la solicitud de negocio requiere una invitación para la audiencia denominada “Interés comercial” y que una respuesta positiva llegue al seguimiento comercial.
- F-EJ-02, borrador ficticio de recorrido: dibuja “Invitación → Respuesta positiva → Seguimiento en Sales”, sin definir consentimiento, población, transferencia ni cierre.
- No se aportó política de comunicaciones ni evidencia del entorno. Las fuentes anteriores son simuladas y no existen como archivos del workspace.

### Reglas respaldadas y vacíos

| RN | Enunciado respaldado por la fuente ficticia | Estado | Vacío |
|---|---|---|---|
| RN-01 | El recorrido propuesto debe dirigir la invitación a la audiencia denominada “Interés comercial”. | Borrador, fuente F-EJ-01 | P-01: definición de audiencia ausente |
| RN-02 | Una respuesta positiva a la invitación debe llegar al proceso de seguimiento comercial. | Borrador, fuente F-EJ-01 | B-02: respuesta positiva y recepción no definidas |

No se crea un RN sobre consentimiento, plazos, canal o automatización: esas decisiones no constan en las fuentes.

### Revisión del journey

| Etapa | Entrada | Resultado requerido | Salida/cierre | Hallazgo |
|---|---|---|---|---|
| Seleccionar audiencia | Población no definida | Audiencia de RN-01 | Elegibilidad pendiente | P-01 |
| Invitación | Elegibilidad y política no confirmadas | Invitación solicitada, canal sin definir | Respuesta o falta de respuesta | B-01, P-02 |
| Transferencia comercial | Respuesta positiva sin definición | Llegada al proceso de RN-02 | Recepción por confirmar | B-02 |
| Seguimiento | Recepción no confirmada | Resultado no especificado | Cierre y reingreso desconocidos | P-03 |

### Análisis por dimensión

- **Segmentación**: “Interés comercial” es un nombre de negocio, no evidencia de un segmento configurado. Faltan inclusión/exclusión, identidad, actualización y solapamientos.
- **Consentimiento y privacidad**: no hay política aprobada; no puede definirse la elegibilidad para comunicar ni qué hacer con estado desconocido o revocado.
- **Eventos**: “respuesta positiva” no tiene condición verificable, origen, correlación ni tratamiento de duplicados/errores. No se presume disparador disponible.
- **Canales y mensajería**: canal, contenido, idioma, restricciones y tratamiento de falta de entrega no definidos. No se propone un canal alternativo como decisión.
- **Dependencias**: componente Customer Insights, política aplicable y definición de transferencia deben confirmarse. No hay evidencia de integración desplegada.
- **Impacto cruzado potencial**: cambios de audiencia podrían afectar otras invitaciones; una respuesta duplicada podría repetir seguimiento; una revocación podría afectar acciones planificadas. Son riesgos a validar, no fallas observadas.

### Preguntas y registro de pendientes

| ID | Descripción/pregunta | Relación e impacto | Condición de resolución | Estado |
|---|---|---|---|---|
| P-01 | ¿Qué define inclusión, exclusión y cambios de audiencia? | RN-01; no permite especificar la selección | Definición de negocio atribuible y revisada | Abierto |
| B-01 | ¿Qué política autoriza la comunicación por finalidad/canal y cómo trata cambios de consentimiento? | Etapa Invitación; bloquea definir elegibilidad y comunicación | Fuente aprobada y decisión de privacidad competente | Abierto |
| P-02 | ¿Qué canal, mensaje y rutas ante falta de respuesta/entrega corresponden? | Etapa Invitación; recorrido incompleto | Decisión funcional respaldada, sin asumir capacidad local | Abierto |
| B-02 | ¿Qué es respuesta positiva y cómo se confirma la recepción comercial? | RN-02; bloquea cerrar la transición a Sales | Regla verificable y fuente autorizada del intercambio requerido | Abierto |
| P-03 | ¿Qué resultado cierra el seguimiento y cuándo se permite reingresar? | Etapa Seguimiento; cierre/reingreso desconocidos | Decisión de negocio documentada | Abierto |
| P-04 | ¿Qué componente/producto y capacidades están disponibles? | Alcance técnico por confirmar | Evidencia autorizada del entorno | Abierto |

No se asignan responsables individuales ni fechas. Las preguntas restantes de la sección obligatoria deben verificarse al ampliar las fuentes; no se consideran resueltas por este ejemplo.

### Trazabilidad y revisión

| Fuente | RN | Elemento | CA/TC | Hallazgo |
|---|---|---|---|---|
| F-EJ-01, Recorrido deseado | RN-01 | Audiencia | Sin CA/TC aportados | P-01; cobertura pendiente |
| F-EJ-01, Recorrido deseado | RN-02 | Transferencia comercial | Sin CA/TC aportados | B-02; cobertura pendiente |

**Control estático ilustrativo**: reglas y etapas enlazadas a las fuentes simuladas; vacíos de consentimiento, eventos, canales y cierre visibles; RN únicos en el ejemplo; cobertura CA/TC ausente informada. No se verificaron tenant, integración, capacidad, permisos ni cumplimiento y no se ejecutaron pruebas.

**Semáforo**: Rojo para definir la comunicación y la transición a Sales por B-01 y B-02; Amarillo para el resto del análisis, que puede continuar reuniendo definiciones. No significa que exista un journey operativo bloqueado ni que se haya activado alguno.

**Entrega**: borrador de análisis parcial para revisión humana. Decisiones requeridas: población, política aplicable, canal/mensaje, evento de respuesta, transferencia y cierre. Ninguna recomendación del ejemplo constituye aprobación o instrucción de implementación.
