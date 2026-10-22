---
name: "preparacion-relevamiento-crm"
description: "Prepara guías de relevamiento funcional para Microsoft Dynamics 365 Sales y Customer Insights, con objetivos, agenda, preguntas, fuentes, supuestos y pendientes para revisión humana."
---

# Preparación de relevamiento CRM

## Propósito

Preparar una guía práctica para que una persona facilite una sesión de relevamiento funcional sobre Microsoft Dynamics 365 Sales, Customer Insights o ambos cuando el alcance esté relacionado. La guía ayuda a descubrir el proceso, las necesidades, las reglas, las excepciones, los datos y las decisiones pendientes; no documenta como hechos configuraciones que no estén respaldadas por fuentes.

El resultado es un borrador para facilitar una conversación y registrar evidencia. No reemplaza la validación de las personas participantes, el documento funcional, el análisis técnico ni la aprobación de negocio.

## Cuándo usarla

Usar esta skill cuando se solicite preparar, estructurar o mejorar una sesión de descubrimiento, entrevista, taller o relevamiento funcional para:

- Dynamics 365 Sales;
- Customer Insights, aclarando si el alcance corresponde a Customer Insights - Data, Customer Insights - Journeys u otro componente/producto nombrado por la organización;
- una iniciativa que involucre ambos productos y requiera relevar sus interacciones.

No usarla para redactar el documento funcional definitivo, derivar historias de usuario o preparar pruebas UAT, salvo que la persona solicite explícitamente esos entregables como una tarea adicional. No asumir edición, versión, licencias, capacidades habilitadas, personalizaciones ni integraciones del entorno.

## Entradas requeridas

Revisar primero lo ya aportado por la persona y los archivos pertinentes del workspace. Solicitar solo lo que falte y pueda cambiar materialmente la guía.

Entradas mínimas para una guía enfocada:

- objetivo de la sesión o problema/necesidad que se quiere explorar;
- producto o área de producto: Sales, Customer Insights - Data, Customer Insights - Journeys, combinación, o pendiente de confirmar;
- audiencia o participantes previstos, indicando funciones conocidas sin inferir permisos ni autoridad;
- proceso, escenario o alcance inicial, aunque sea tentativo.

Entradas útiles si están disponibles:

- duración, modalidad, fecha o restricciones de agenda;
- proceso actual y resultado esperado, diferenciando evidencia de hipótesis;
- fuentes autorizadas (especificaciones, procedimientos, diagramas, políticas o artefactos existentes) y qué afirmación respalda cada fuente;
- sistemas relacionados, eventos de entrada/salida e integraciones conocidas;
- decisiones ya tomadas, restricciones, exclusiones, dependencias y temas sensibles;
- formato y destino de la guía, plantilla existente y convención de identificadores del proyecto.

Si no se conoce un dato opcional, dejarlo como pendiente o proponer un supuesto explícito, conservador y reversible. No bloquear toda la preparación por información que pueda confirmarse durante la sesión.

## Preguntas previas

Estas preguntas sirven para acordar la preparación con quien solicita la guía. No confundirlas con el banco de preguntas para participantes.

1. ¿Qué resultado concreto debería producir la sesión y qué problema busca aclarar?
2. ¿Qué producto o componente está en alcance: Sales, Customer Insights - Data, Customer Insights - Journeys, ambos u otro? ¿Cómo lo denomina el equipo?
3. ¿Qué proceso, segmento, canal, etapa o escenario se va a relevar, y qué queda fuera?
4. ¿Quiénes participarán y qué perspectiva aporta cada persona? ¿Quién puede confirmar reglas o decisiones de negocio?
5. ¿Qué información o artefactos existentes deben revisarse y cuáles son fuentes autorizadas?
6. ¿Cuánto dura la sesión y qué formato, audiencia o plantilla debe respetarse?
7. ¿Hay restricciones de privacidad, seguridad, cumplimiento, integración o datos que deban guiar las preguntas?
8. ¿Qué decisiones ya están aprobadas y cuáles deben quedar expresamente abiertas para decisión humana?

Agrupar preguntas y limitarse a las necesarias. Si una respuesta no está disponible, registrar la incertidumbre en la guía en lugar de inventarla.

## Flujo paso a paso

1. **Delimitar el pedido**: identificar objetivo, producto, escenario, participantes, resultado esperado, exclusiones y formato. Distinguir la guía solicitada de cualquier entregable posterior.
2. **Revisar el contexto disponible**: consultar `AGENTS.md`, artefactos relacionados y plantillas pertinentes del workspace. Usar solo fuentes autorizadas y no afirmar que se consultó un tenant o documentación externa si no ocurrió.
3. **Separar evidencia y vacíos**: clasificar la información como hecho respaldado (con fuente), información aportada, supuesto explícito, recomendación o pregunta/decisión pendiente. Registrar contradicciones con sus fuentes, sin resolverlas silenciosamente.
4. **Resolver lo imprescindible**: hacer preguntas previas solo cuando una respuesta pueda cambiar materialmente el alcance, la audiencia, el riesgo o la estructura. Para vacíos menores, formular una hipótesis verificable y marcarla como tal.
5. **Diseñar la sesión**: proponer objetivo, resultados esperados, agenda proporcional al tiempo, participantes necesarios por perspectiva y una secuencia que vaya de contexto a proceso, casos, reglas, datos, excepciones y decisiones.
6. **Preparar preguntas por producto y proceso**: priorizar preguntas abiertas, neutrales y observables. Usar los temas de Sales o Customer Insights de esta skill como disparadores, no como afirmaciones sobre capacidades o configuración local.
7. **Preparar captura y seguimiento**: incluir espacio para respuestas, fuente/evidencia, ejemplos sintéticos, responsable de confirmar (solo si fue indicado), decisión pendiente, impacto y próximo paso. No asignar responsables ni fechas por inferencia.
8. **Aplicar controles**: revisar cobertura de objetivo y alcance, claridad, neutralidad, seguridad de datos, consistencia de supuestos y visibilidad de decisiones pendientes.
9. **Entregar como borrador**: indicar fuentes realmente usadas, verificaciones realizadas, limitaciones y estado. Dejar explícito que la guía requiere revisión humana y que la sesión no aprueba automáticamente reglas o decisiones.

### Temas de exploración para Dynamics 365 Sales

Elegir solo los temas pertinentes al escenario. No presentar la lista como inventario confirmado del entorno.

- necesidad comercial, resultado esperado y métricas que negocio ya haya definido;
- actores y recorrido comercial actual, desde el inicio hasta el resultado relevante para el alcance;
- entidades, registros, relaciones y datos necesarios, según fuentes disponibles;
- criterios y reglas de negocio para transiciones, asignación, seguimiento, calificación o cierre, si aplican;
- actividades, tareas, comunicaciones, colaboración y notificaciones esperadas;
- excepciones, duplicados, reprocesos, registros incompletos y rutas alternativas;
- reportes, indicadores y decisiones que la información debe permitir;
- entradas/salidas con otros procesos o sistemas, propiedad del dato y manejo de errores;
- necesidades de acceso y segregación como preguntas para responsables autorizados; nunca inferir roles o privilegios.

### Temas de exploración para Customer Insights

Primero confirmar qué componente y terminología usa la organización. No asumir que Data y Journeys están implementados, conectados o habilitados.

- objetivo de negocio, audiencia y resultado esperado del uso de Customer Insights;
- fuentes de datos consideradas, propósito, autoridad, frecuencia y calidad conocida;
- identidad, coincidencia, unificación, consentimientos y tratamiento de conflictos, como reglas a confirmar;
- segmentos, señales, eventos o criterios de entrada/salida relevantes para el escenario;
- si corresponde a Journeys: objetivo del recorrido, disparadores, pasos, canales, ramas, salidas y excepciones esperadas;
- si corresponde a Data: perfiles, medidas, segmentos u otros resultados requeridos, solo según el alcance declarado;
- transferencias a Sales u otros sistemas, dirección del intercambio, latencia esperada y gestión de fallas;
- privacidad, base/estado de consentimiento, retención y controles aplicables, que deben confirmarse con las fuentes y personas responsables;
- medición, pruebas, monitoreo y criterios de éxito ya definidos por negocio.

Evitar pedir datos reales de clientes en la sesión o en la guía. Cuando haga falta ilustrar un caso, usar exclusivamente datos claramente sintéticos.

## Estructura de salida

Entregar en el formato solicitado o en la plantilla aplicable del repositorio. Si no se indicó formato, usar Markdown con estas secciones:

1. **Estado y control del documento**: borrador para revisión, fecha solo si está disponible en el contexto, producto(s) y versión de la guía si el proyecto la usa.
2. **Propósito y resultado esperado**: objetivo de la sesión y qué se espera obtener, sin prometer decisiones que competen a participantes.
3. **Contexto y alcance**: proceso/escenario, inclusiones, exclusiones y términos que requieren definición.
4. **Participantes y perspectivas**: roles funcionales esperados y decisiones que cada perspectiva puede confirmar; indicar como pendiente lo no confirmado.
5. **Fuentes y preparación**: artefactos revisados, autoridad/alcance de cada fuente, material que se solicita revisar y limitaciones.
6. **Agenda**: bloques, duración estimada, objetivo y resultado/captura esperados por bloque. Ajustar la suma al tiempo de sesión disponible; si se desconoce, señalarlo.
7. **Guía de conversación**: preguntas priorizadas y agrupadas por tema, con preguntas de profundización y espacio para respuestas/evidencia.
8. **Reglas, datos, excepciones e integraciones a explorar**: temas aplicables y puntos de confirmación; no completar valores sin respaldo.
9. **Supuestos, preguntas abiertas y decisiones pendientes**: identificadores estables si el repositorio los usa, impacto, fuente relacionada, información requerida y estado. No inventar responsable ni fecha.
10. **Riesgos y cuidados**: privacidad, seguridad, dependencias y asuntos que requieren consulta especializada, cuando apliquen.
11. **Cierre y próximos pasos**: resumen leído de vuelta, confirmaciones a solicitar, artefactos a producir después y seguimiento sin asignaciones inventadas.
12. **Checklist de revisión**: resultado de cada control pertinente.
13. **Fuentes, verificaciones y limitaciones**: qué se revisó, qué control estático se hizo y qué no pudo verificarse.

## Checklist de revisión

- [ ] El objetivo de la sesión y el resultado esperado son concretos y compatibles con el pedido.
- [ ] El alcance identifica producto/componente, proceso y exclusiones; lo no confirmado está marcado.
- [ ] Las preguntas previas y las preguntas para participantes están diferenciadas.
- [ ] La agenda es proporcional al tiempo y reserva espacio para excepciones, decisiones y cierre.
- [ ] Las preguntas son neutrales, comprensibles, no redundantes y no inducen una solución.
- [ ] Las preguntas de producto son pertinentes y no afirman que una función esté habilitada o configurada.
- [ ] Hechos, fuentes, información aportada, supuestos, recomendaciones y decisiones abiertas se distinguen.
- [ ] Las contradicciones, dependencias, pendientes y bloqueantes son visibles, con su impacto y condición para resolverlos.
- [ ] No se inventan permisos, roles, políticas, configuraciones, capacidades, responsables, fechas ni aprobaciones.
- [ ] No se solicitan ni reproducen datos reales de clientes, datos productivos o secretos; los ejemplos son sintéticos.
- [ ] La captura permite registrar respuesta, evidencia, confirmación requerida y seguimiento sin atribuciones inferidas.
- [ ] Se indican fuentes y verificaciones reales, limitaciones y revisión/aprobación humana pendiente.

Registrar cada control como cumplido, pendiente o no aplicable, con una nota breve cuando haya un hallazgo. No marcar la guía como aprobada por haber completado el checklist.

## Ejemplo de uso

**Pedido**: “Prepará una guía de 60 minutos para entender cómo el equipo comercial recibe y da seguimiento a oportunidades originadas por una campaña. Participarán una persona de ventas y una de marketing. Todavía no sabemos si Customer Insights - Journeys está conectado con Sales.”

**Aplicación esperada**:

- Preparar un borrador centrado en el flujo campaña → interacción con ventas, sin afirmar una integración existente.
- Marcar como pregunta previa o pendiente qué componente de Customer Insights se usa, cómo se identifica el origen de una oportunidad y quién puede confirmar el proceso actual.
- Proponer una agenda de 60 minutos que cubra objetivo, recorrido actual, datos/eventos, seguimiento comercial, excepciones, medición y cierre; ajustar los bloques para que sumen 60 minutos.
- Incluir preguntas neutrales, por ejemplo: “¿Qué evento o información indica hoy que una interacción debe recibir seguimiento comercial?” y “¿Cómo se registra y confirma actualmente el origen de una oportunidad?”.
- Pedir ejemplos con valores ficticios, anotar fuentes y respuestas por validar, y no inferir sincronización, permisos, reglas de asignación ni consentimiento.
- Entregar el material como guía para revisión humana, con las decisiones abiertas y verificaciones realizadas claramente indicadas.
