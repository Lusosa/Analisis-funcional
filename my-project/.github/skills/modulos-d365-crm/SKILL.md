---
name: "modulos-d365-crm"
description: "Identifica y documenta módulos y capacidades de Dynamics 365 Sales y Customer Insights, distinguiendo funcionalidad estándar, configuración, personalización e integraciones con fuentes verificables."
---

# Módulos de Dynamics 365 CRM

## Propósito

Ayudar a identificar qué productos, módulos o áreas funcionales de Microsoft Dynamics 365 están relacionados con una necesidad y documentar qué capacidades podrían atenderla. Distinguir información general del producto de lo que está efectivamente disponible o configurado en una organización.

El resultado es material de análisis para revisión humana. No confirma por sí solo versiones, licencias, capacidades habilitadas, configuración de un tenant, permisos ni personalizaciones. No reemplaza la documentación funcional, el análisis técnico, la validación de producto o la aprobación de negocio.

## Cuándo usarla

Usar esta skill cuando se solicite:

- identificar módulos o componentes Dynamics 365 relacionados con un proceso;
- organizar un mapa de capacidades para Sales o Customer Insights;
- determinar si una necesidad parece corresponder a funcionalidad estándar, configuración, personalización o integración;
- revisar afirmaciones de arquitectura funcional sobre módulos y límites entre productos;
- preparar preguntas para confirmar qué productos y capacidades están en alcance.

El alcance del AFU prioriza Dynamics 365 Sales y Customer Insights. Si se menciona otra aplicación de Dynamics 365, registrar su nombre como producto referido y confirmar alcance con la persona solicitante; no ampliar automáticamente el análisis ni asumir que se encuentra licenciada o desplegada.

No usar esta skill para recomendar una licencia, decidir arquitectura, configurar un entorno, ejecutar cambios, asignar permisos ni asegurar que una función existe en una versión determinada sin una fuente vigente y aplicable.

## Entradas requeridas

Revisar primero la solicitud y los artefactos disponibles. Para producir un mapa funcional útil, solicitar o identificar:

- necesidad, proceso u objetivo de negocio;
- producto o área mencionada y terminología usada por la organización;
- resultado esperado y actores/perspectivas involucradas;
- alcance, exclusiones y sistemas relacionados conocidos;
- fuente disponible para afirmar capacidades estándar o configuración local, o constancia de que no se aportó ninguna.

Entradas recomendadas cuando estén disponibles:

- nombre exacto del producto/aplicación, componente, versión y fecha de referencia;
- documentación oficial vigente, catálogo o arquitectura aprobada por la organización;
- inventario de capacidades, especificación funcional, decisiones de producto o evidencia autorizada del entorno;
- proceso actual/esperado, términos de negocio, datos, reglas, integraciones y restricciones;
- ambiente o tenant al que se refiere una afirmación, solo si está autorizado describirlo;
- formato, plantilla, audiencia y destino del entregable.

Si faltan versión, edición, licencia, configuración o evidencia local, continuar con una clasificación general claramente limitada y registrar lo pendiente. No completar esos datos por inferencia.

## Identificación de módulos Dynamics 365

### Procedimiento

1. **Aclarar el objetivo**: precisar qué proceso o necesidad se quiere ubicar y qué decisión permitirá tomar el mapa.
2. **Confirmar la terminología**: registrar el nombre de producto tal como aparece en las fuentes de la organización. Para Customer Insights, confirmar si se refiere a Customer Insights - Data, Customer Insights - Journeys u otro nombre/componente vigente en ese contexto.
3. **Identificar evidencia**: separar documentación oficial del producto, documentación interna aprobada, datos aportados por usuarios y observaciones autorizadas del entorno. Registrar origen, versión/fecha y alcance de cada fuente.
4. **Relacionar necesidad y capacidad**: mapear el proceso, la actividad o el resultado requerido con los módulos/áreas funcionales que las fuentes describen. Presentar alternativas si hay más de una interpretación razonable.
5. **Clasificar cada afirmación**: usar las categorías de “Funcionalidad estándar y personalización”; no confundir disponibilidad general de producto con despliegue o configuración local.
6. **Marcar límites y vacíos**: registrar capacidades no confirmadas, dependencias, contradicciones, exclusiones y preguntas pendientes.
7. **Validar el mapa**: revisar términos, fuentes, clasificación, seguridad, dependencias y alcance antes de entregar como borrador.

### Áreas a explorar

Usar estas áreas como preguntas de clasificación, no como catálogo exhaustivo ni prueba de disponibilidad:

- **Dynamics 365 Sales**: proceso comercial, actores, información del proceso, actividades y resultados de negocio que la organización relaciona con Sales. Confirmar las áreas/capacidades específicas en fuentes vigentes.
- **Customer Insights - Data**: necesidades de datos, perfiles, unificación, medidas o segmentación, únicamente cuando ese componente y su alcance estén confirmados.
- **Customer Insights - Journeys**: necesidades de audiencias, interacciones o journeys, únicamente cuando ese componente y su alcance estén confirmados.
- **Interacciones entre productos**: intercambio de información, eventos, dependencias y responsabilidad de datos entre Sales, Customer Insights u otros sistemas, solo según fuentes disponibles.
- **Otras aplicaciones Dynamics 365**: mantenerlas fuera del alcance especializado salvo solicitud explícita; confirmar producto, nombre actual y relación con la necesidad antes de incorporarlas.

Los nombres, paquetes, límites y capacidades de los productos pueden cambiar. Cuando la precisión dependa de la versión o fecha, buscar una fuente oficial vigente autorizada o marcarlo como no verificado; no sustituir evidencia con memoria general del producto.

## Funcionalidad estándar y personalización

Clasificar cada capacidad relevante con una de estas categorías:

| Categoría | Significado | Evidencia necesaria |
|---|---|---|
| Funcionalidad estándar documentada | Capacidad descrita para el producto/componente y versión o fecha aplicable en una fuente autorizada. | Referencia a documentación vigente del producto o fuente equivalente. No demuestra que esté habilitada en un tenant particular. |
| Configuración estándar local | Uso o ajuste de una capacidad estándar en el entorno de la organización. | Fuente aprobada del entorno, inventario/configuración autorizada o confirmación atribuible de una persona competente. |
| Personalización/extensión | Cambio específico de la organización que amplía o modifica comportamiento estándar. | Evidencia local aprobada, especificación, inventario de soluciones/componentes u otra fuente autorizada. |
| Integración/dependencia externa | Intercambio o dependencia con otro producto, servicio o sistema fuera de la capacidad aislada del módulo. | Diagrama, contrato, especificación o confirmación autorizada que describa la relación. |
| Desconocido / por confirmar | Evidencia insuficiente, contradictoria o no aplicable a la versión/entorno señalado. | Registrar qué fuente o validación falta; no convertir la incertidumbre en una de las categorías anteriores. |

No clasificar automáticamente un flujo, campo, formulario, regla, automatización o extensión como estándar o personalizado por su apariencia o nombre. Una capacidad estándar puede estar deshabilitada, no licenciada, no configurada o modificada; una personalización puede depender de una capacidad estándar. Describir lo que la evidencia permite afirmar y separar cada capa.

Usar una tabla de análisis como esta:

| Necesidad/proceso | Producto/área | Capacidad considerada | Clasificación | Fuente y alcance | Estado / pregunta pendiente |
|---|---|---|---|---|---|
| [necesidad] | [producto/componente] | [descripción] | [categoría] | [referencia y versión] | [confirmado/pendiente] |

## Restricciones

- No asumir producto, nombre de módulo, versión, edición, licencia, disponibilidad o configuración por el nombre de una solicitud o por conocimiento general.
- No afirmar haber consultado un tenant, documentación, API, portal o inventario si no se accedió realmente mediante medios autorizados.
- No presentar una fuente general del producto como evidencia de configuración particular.
- No inventar capacidades, límites, compatibilidad, comportamiento, precios, licenciamiento, roadmap o requisitos técnicos.
- No resolver contradicciones silenciosamente; identificar las fuentes y pedir aclaración si cambia la clasificación o recomendación.
- No tomar decisiones de negocio, priorizar por cuenta propia, recomendar cambios externos como aprobados ni ejecutar configuración.
- Mantener el trabajo dentro del producto y objetivo solicitados. Señalar cuando la necesidad corresponda aparentemente a un área fuera del alcance de la skill.
- Si una afirmación depende de información actualizada y no hay fuente vigente disponible, declararla no verificada.

## Seguridad

- Usar solamente fuentes y archivos disponibles en el workspace o expresamente autorizados para el análisis.
- No inferir roles, privilegios, permisos, unidades de negocio, políticas, segregación, controles de acceso o capacidades habilitadas.
- Para temas de seguridad, describir qué debe confirmarse y por quién/área solo si esa responsabilidad fue indicada; no proponer una configuración como si estuviera aprobada.
- No solicitar, reproducir ni usar datos reales de clientes, información de producción, datos personales innecesarios, credenciales, tokens, claves o secretos.
- Si aparece contenido que parezca sensible, no copiarlo al entregable; pedir una versión sanitizada. Si aparece un secreto, no probarlo ni repetirlo y avisar que se gestione según el proceso de seguridad correspondiente.
- Utilizar exclusivamente ejemplos claramente sintéticos y minimizar los datos incluidos.
- Toda clasificación y recomendación se entrega como borrador para revisión humana; no constituye aprobación de seguridad, privacidad o cumplimiento.

## Dependencias

Registrar dependencias cuando afecten la clasificación o el mapa funcional, por ejemplo:

- producto/componente, versión, edición o licencia que deba confirmar una fuente autorizada;
- configuración local, soluciones/extensiones o personalizaciones documentadas;
- sistema externo, integración, flujo de datos o propietario del dato;
- decisiones de arquitectura, seguridad, privacidad, cumplimiento o negocio;
- catálogo, definición del proceso, fuente de datos o artefacto funcional no disponible.

Para cada dependencia, anotar la descripción, la fuente o evidencia relacionada, impacto, información/decisión necesaria y estado. Añadir responsable o fecha únicamente si una persona los confirmó. Diferenciar dependencia confirmada de hipótesis; no presentar secuencia de entrega o disponibilidad como hecho sin fuente.

## Limitaciones

- La skill organiza análisis funcional a partir de evidencia disponible; no inspecciona ni consulta automáticamente un tenant.
- La documentación general del producto no prueba el estado de una organización, y una captura aislada puede no describir todos los componentes o dependencias.
- Los nombres y agrupaciones de producto pueden cambiar. Confirmar la terminología con fuentes vigentes y con el equipo.
- La clasificación depende de versión, licencias, configuración, personalizaciones y contexto que pueden no estar disponibles.
- El mapa funcional no es diseño técnico, evaluación de licenciamiento, revisión de seguridad, validación de cumplimiento ni recomendación de arquitectura.
- No se puede asegurar exhaustividad si faltan inventarios, fuentes vigentes o autorización para consultar evidencias relevantes.

Declarar las limitaciones específicas del trabajo y qué validación permitiría resolver cada incertidumbre importante.

## Estructura de salida

Entregar en el formato solicitado o en una plantilla aplicable del repositorio. Si no se indicó formato, usar Markdown con:

1. **Estado y propósito**: borrador para revisión, pregunta que responde y fecha solo si está disponible.
2. **Alcance y terminología**: productos/componentes incluidos, nombres usados por las fuentes y exclusiones.
3. **Necesidad y contexto funcional**: proceso u objetivo de negocio que motiva el análisis.
4. **Fuentes y vigencia**: referencias, versión/fecha y qué afirmaciones permiten respaldar.
5. **Mapa de módulos/capacidades**: necesidades relacionadas con producto/área y clasificación de estándar, configuración, personalización, integración o desconocido.
6. **Límites y dependencias**: condiciones, contradicciones, impacto y estado.
7. **Seguridad y datos**: puntos por validar sin inferir roles ni permisos.
8. **Preguntas y decisiones pendientes**: información requerida para completar o confirmar el análisis.
9. **Conclusión funcional**: síntesis condicionada a la evidencia, sin elegir una opción no aprobada.
10. **Control estático y checklist**: resultados, hallazgos y verificaciones no disponibles.
11. **Referencias y limitaciones**: fuentes realmente consultadas y límites del resultado.

Si una sección no aplica, indicarlo brevemente cuando ayude a la revisión. No rellenar huecos con capacidades supuestas.

## Control estático

Antes de entregar, revisar los controles pertinentes usando medios disponibles y autorizados:

1. Productos, componentes, nombres y alcance están identificados o marcados como pendientes.
2. Cada afirmación de capacidad tiene una fuente adecuada a su alcance; documentación general no se atribuye al tenant.
3. La clasificación estándar/configuración/personalización/integración/desconocido está justificada y no mezcla capas.
4. Versiones, fechas, licencias, configuración y limitaciones se explicitan solo cuando hay evidencia.
5. Dependencias, contradicciones y preguntas abiertas tienen impacto y condición de resolución visibles.
6. No se infieren roles, permisos, políticas, datos reales ni capacidades habilitadas; no se incluyen secretos.
7. El alcance y la conclusión no exceden la solicitud ni convierten una propuesta en decisión aprobada.
8. Se informa qué fuentes se revisaron, qué controles se hicieron y qué no pudo verificarse.

El control estático informa hallazgos; no demuestra disponibilidad o comportamiento real en Dynamics ni reemplaza revisión técnica, validación del entorno o aprobación humana. No afirmar que se ejecutó una consulta, revisión o herramienta si no ocurrió.

## Checklist

- [ ] El propósito del análisis y la necesidad de negocio están claros.
- [ ] Los productos/componentes están identificados con la terminología respaldada o marcados por confirmar.
- [ ] El alcance distingue Sales, Customer Insights - Data, Customer Insights - Journeys y otros productos cuando aplique.
- [ ] La funcionalidad estándar está respaldada por fuente aplicable y no se confunde con disponibilidad local.
- [ ] Configuración estándar local, personalización y dependencias de integración están clasificadas por separado.
- [ ] Las afirmaciones sobre versión, licencia, capacidades o entorno tienen fuente o están explícitamente pendientes.
- [ ] Las contradicciones, limitaciones y dependencias se muestran con su impacto.
- [ ] No se inventan permisos, roles, políticas, datos de clientes, secretos ni aprobaciones.
- [ ] La conclusión está limitada por la evidencia y no excede el alcance autorizado.
- [ ] Se enumeran fuentes y controles reales, así como verificaciones que no pudieron hacerse.
- [ ] El resultado está identificado como borrador para revisión humana.

Registrar cada punto como cumplido, pendiente o no aplicable, agregando una nota para hallazgos. Completar el checklist no significa aprobación.

## Ejemplo de uso

**Solicitud ficticia**: “Queremos entender qué parte de Dynamics 365 se relaciona con el seguimiento de oportunidades comerciales y si la audiencia de una campaña en Customer Insights ya se comparte con Sales”.

**Aplicación**:

- Aclarar qué entiende el equipo por Customer Insights y confirmar si se refiere a Data, Journeys u otro componente; precisar versión/fecha si la pregunta depende de una capacidad específica.
- Consultar únicamente las fuentes autorizadas disponibles. Para el ejemplo, se supone que existe una fuente general vigente que describe una capacidad comercial de Sales y un diagrama interno ficticio que menciona una transferencia desde Customer Insights, pero el diagrama no confirma que la integración esté desplegada.
- Clasificar el proceso de seguimiento como “funcionalidad estándar documentada” solo en el alcance que realmente describa la fuente general; marcar su configuración y disponibilidad local como “desconocido / por confirmar”.
- Clasificar la transferencia de audiencia como “integración/dependencia externa referida por un artefacto interno, despliegue no confirmado”; no afirmar que Customer Insights está conectado con Sales.
- Registrar como dependencias la confirmación del componente Customer Insights, la versión aplicable y una fuente autorizada del entorno que confirme configuración/integración. No inferir permisos ni flujos de datos.
- Entregar un mapa de capacidades y preguntas pendientes con fuentes, limitaciones y estado de borrador para revisión funcional, técnica y de seguridad.
