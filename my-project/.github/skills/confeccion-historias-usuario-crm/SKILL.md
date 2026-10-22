---
name: "confeccion-historias-usuario-crm"
description: "Redacta, deriva y revisa historias de usuario para Dynamics 365 Sales y Customer Insights con criterios CA-XX, trazabilidad a RN, dependencias y control de calidad."
---

# Confección de historias de usuario CRM

## Propósito

Transformar necesidades de negocio y requisitos funcionales respaldados en historias de usuario CRM comprensibles, acotadas, comprobables y trazables para Microsoft Dynamics 365 Sales, Customer Insights o una solución que los relacione. Las historias expresan valor y comportamiento esperado; no prescriben configuración técnica ni convierten una decisión pendiente en un hecho.

Todo resultado es un borrador hasta contar con revisión y aprobación humana explícita. La historia no sustituye el documento funcional, el diseño técnico, la evaluación de seguridad, la validación de producto ni las pruebas UAT.

## Cuándo usarla

Usar esta skill para crear, completar, dividir, actualizar o revisar historias de usuario, criterios de aceptación y su trazabilidad a requisitos o reglas de negocio documentadas.

Aplica a Dynamics 365 Sales y Customer Insights. Para Customer Insights, confirmar si el alcance se refiere a Customer Insights - Data, Customer Insights - Journeys u otro componente/denominación que utilice el equipo. Usar el lenguaje funcional del negocio y las fuentes locales; no asumir versiones, capacidades habilitadas, licencias, personalizaciones, integraciones o configuración del tenant.

No usarla para descubrir por sí sola reglas faltantes, redactar el documento funcional completo, diseñar la solución, crear casos UAT completos o implementar cambios. Si se requieren varios artefactos, delimitar cada uno y recurrir a la skill correspondiente.

## Entradas requeridas

Revisar primero lo que ya aportó la persona y los archivos disponibles. Para redactar una historia confirmada se requiere:

- necesidad/resultado de negocio y usuario o perspectiva beneficiada;
- producto/componente y escenario en alcance, o marca explícita de que falta confirmarlos;
- requisito o regla de negocio RN existente, aprobado o respaldado por fuente atribuible;
- límites, exclusiones y decisiones conocidas que puedan cambiar el comportamiento;
- convención de IDs y artefactos relacionados, si el proyecto ya los define.

Entradas útiles cuando estén disponibles:

- Documento Funcional y ubicación de las secciones pertinentes;
- proceso actual/esperado, actores, escenarios, excepciones y vocabulario aprobado;
- criterios de aceptación, restricciones y datos necesarios;
- dependencias, integraciones, riesgos, decisiones de seguridad y responsables de confirmación;
- prioridad, estimación, release, sprint o estado, solo si ya fueron asignados por personas/proceso;
- plantilla, formato y destino del archivo.

Si no existe RN ni fuente que respalde la necesidad, no inventar una historia como si fuera compromiso. Se puede preparar un borrador exploratorio rotulado como hipótesis y registrar qué evidencia o decisión se necesita para convertirlo en requisito. No volver a pedir información presente en el workspace.

## Validaciones previas

Antes de redactar o modificar historias:

1. Confirmar el resultado solicitado, producto/componente, alcance, audiencia, formato y destino.
2. Leer `AGENTS.md`, `.github/agents/analista-funcional-afu.agent.md`, el Documento Funcional y los artefactos SDD relacionados disponibles.
3. Comprobar convención local de HU/RN/CA, conservar IDs existentes y revisar historias relacionadas para evitar duplicación o contradicción.
4. Confirmar que la necesidad provenga de fuente atribuible o requisito aprobado; distinguir hechos, información aportada, supuestos y decisiones abiertas.
5. Determinar si los vacíos son pendientes que permiten avanzar parcialmente o bloqueantes para escribir/verificar la historia responsablemente.
6. Inspeccionar la plantilla de `templates/` solo si existe y aplica; no asumir su disponibilidad.
7. Revisar entradas para no reproducir datos personales, productivos, confidenciales o secretos. Usar solamente datos sintéticos en ejemplos.
8. Si hay contradicciones, identificar las fuentes y pedir resolución cuando altere el comportamiento; no elegir silenciosamente una interpretación.

## Historia completa

Usar el formato del repositorio si existe. Si no existe uno, estructurar cada historia con estos campos y marcar los no definidos:

1. **Identificación y estado**: HU-XX u otro ID local, título breve, versión/estado según el proceso y condición de borrador/aprobación.
2. **Historia**: “Como [persona/actor], quiero [capacidad o resultado], para [valor/beneficio]”. Evitar nombres de roles de seguridad si no están respaldados.
3. **Contexto y alcance**: necesidad, proceso, producto/componente, escenario incluido y exclusiones.
4. **Fuente y trazabilidad**: RN-XX, ubicación en Documento Funcional, origen de la necesidad y relaciones a otros artefactos.
5. **Reglas y restricciones**: reglas respaldadas, condiciones y límites que afectan la historia; enlazar RN en lugar de duplicar o reinterpretar su contenido.
6. **Criterios de aceptación CA-XX**: resultados observables, condiciones y excepciones necesarias, vinculados a RN.
7. **Datos y ejemplos**: conceptos o valores relevantes; ejemplos exclusivamente sintéticos y sin revelar información sensible.
8. **Dependencias**: insumos, decisiones, equipos o artefactos necesarios; estado e impacto, sin inventar responsables o fechas.
9. **Pendientes y bloqueantes**: IDs, información requerida, impacto y condición para continuar.
10. **Notas de seguridad/privacidad**: necesidades confirmadas y puntos a validar; nunca inventar permisos, roles, políticas o configuración.
11. **Definición de terminado**: verificación de la historia como artefacto y sus criterios de aceptación; aprobación humana por separado.
12. **Referencias y revisión**: fuentes, revisiones realizadas, verificaciones no disponibles y estado de aprobación.

La historia debe caber en una unidad de valor coherente. Si abarca varios actores, resultados independientes o flujos que se pueden aceptar por separado, proponer división y explicar las relaciones; no fragmentar para eludir una decisión pendiente.

## HU corta

Usar la forma corta cuando se solicite una síntesis o el proceso del equipo así lo requiera:

> Como **[actor funcional]**, quiero **[resultado/capacidad]**, para **[valor]**.

Adjuntar como mínimo los RN fuente y los CA necesarios para que la HU sea verificable. Una HU corta no elimina trazabilidad, supuestos, bloqueantes ni restricciones de seguridad; resumirlos mediante referencias al Documento Funcional o a un registro relacionado.

No usar un rol de Dynamics como actor por defecto. Escribir la perspectiva de negocio conocida (por ejemplo, “persona usuaria del equipo comercial”) y dejar la asignación de privilegios a la validación correspondiente.

## Revisión de HU

Revisar cada historia con estas preguntas:

- ¿El actor representa una persona o perspectiva funcional real, en vez de un perfil de seguridad inferido?
- ¿El objetivo describe una necesidad o resultado, no una solución técnica prematura?
- ¿El beneficio es concreto y está respaldado; la historia tiene valor identificable?
- ¿El alcance puede comprenderse y aceptarse sin decisiones ocultas?
- ¿La HU es lo bastante acotada para entregar y validar como unidad coherente?
- ¿Sus requisitos fuente existen y su estado permite derivar la historia?
- ¿Los criterios son observables, no ambiguos y suficientes para los flujos importantes?
- ¿Las reglas, datos, excepciones, dependencias y restricciones relevantes están enlazadas?
- ¿Las decisiones abiertas y los bloqueantes aparecen explícitamente?
- ¿No se inventan prioridades, estimaciones, fechas, roles, permisos, capacidades o aprobaciones?
- ¿El texto evita términos vagos y criterios de implementación no requeridos?

Si no cumple, corregir, dividir con trazabilidad o registrar el hallazgo. No declarar “lista” solo porque tenga la frase Como/Quiero/Para.

## Derivación desde Documento Funcional

Cuando la fuente sea un Documento Funcional:

1. Localizar las secciones vigentes de alcance, actores, procesos, RN, datos, excepciones, seguridad, dependencias, pendientes y criterios existentes.
2. Verificar el estado y la fuente de cada RN. Derivar historias solo de requisitos respaldados o indicar claramente el borrador no confirmado.
3. Identificar actor, objetivo y valor a partir de la necesidad de negocio; no derivarlos de roles técnicos ni del nombre de una entidad.
4. Agrupar RN que conduzcan a una capacidad coherente y aceptación conjunta. Separar resultados independientes si pueden priorizarse/aceptarse por separado; pedir decisión si dividir altera el alcance o el valor.
5. Derivar CA únicamente de RN y reglas documentadas. Conservar las condiciones y excepciones del documento fuente; no añadir comportamientos “habituales” del CRM como si fueran requisitos.
6. Mantener referencias bidireccionales: la HU referencia RN/CA y el documento funcional o la matriz señala las HU derivadas cuando el formato lo permita.
7. Relacionar pendientes y bloqueantes del documento con las HU/CA afectados. No convertir una decisión pendiente en una condición de aceptación definitiva.
8. Comparar la propuesta con historias y RN existentes para evitar duplicados, cambios silenciosos y enlaces rotos.
9. Informar requisitos sin historia cuando la cobertura esté dentro del alcance de la tarea; no crear historias ficticias para completar una matriz.

Si el Documento Funcional contradice otra fuente, registrar ambas ubicaciones y solicitar resolución cuando cambie el resultado. El Documento Funcional no es automáticamente autoridad si su estado es borrador o sus fuentes no están confirmadas.

## Criterios de aceptación CA-XX

- Usar `CA-01`, `CA-02`, etc. si la convención del proyecto es RN/CA/TC; respetar otra convención local. Los IDs deben ser únicos y estables.
- Cada CA debe vincularse con uno o más RN existentes; no crear CA huérfanos ni inventar RN para respaldarlos.
- Expresar condición y resultado verificable. Gherkin (`Dado/Cuando/Entonces`) es opcional; priorizar claridad y consistencia con el repositorio.
- Describir comportamiento desde el punto de vista funcional, sin prescribir interfaz, tabla, automatización o configuración a menos que una fuente lo requiera.
- Cubrir flujo principal y excepciones que afecten materialmente la aceptación. Evitar criterios redundantes, subjetivos o que combinen resultados independientes.
- Definir términos, umbrales, fechas, cálculos, estados o valores cuando estén respaldados; si no, crear pendiente y explicar la cobertura condicionada.
- No incluir permisos ni acceso como criterio confirmado sin evidencia aprobada de seguridad.
- Mantener coherencia con el estado del RN. Una regla en discusión solo puede tener criterios propuestos y claramente pendientes, no aceptación definitiva.
- Incluir datos sintéticos en ejemplos o pruebas derivadas. Los CA expresan condiciones de aceptación; no afirmar que se ejecutaron.

## Definición de terminado

Usar la definición de terminado del equipo si está documentada. Si no existe, proponer una lista local como control de completitud de la historia, no como autorización de release o aprobación automática:

- necesidad, actor, beneficio y alcance descritos y comprensibles;
- fuente/RN relacionado y estado documentados;
- CA vinculados, observables y revisados contra requisitos y excepciones;
- dependencias, riesgos, supuestos, pendientes y bloqueantes visibles;
- seguridad, datos y permisos no inferidos; datos de ejemplo sintéticos;
- IDs y trazabilidad revisados, sin duplicados ni referencias inválidas conocidas;
- formato y campos requeridos por la plantilla local completos o marcados como pendientes/no aplicables;
- revisión funcional realizada por las personas indicadas por el proceso, con evidencia registrada si está disponible.

La aprobación humana y la decisión de priorización quedan fuera de esta definición automática. No asumir aprobación del PO, negocio, seguridad o arquitectura por silencio, checklist completo ni estado del semáforo.

## Calidad funcional

La historia tiene calidad funcional cuando:

- representa una necesidad verificable y aporta un resultado de negocio identificable;
- usa vocabulario del dominio definido en fuentes, evitando ambigüedad y duplicación;
- puede validarse sin conocer una implementación técnica no especificada;
- sus CA son completos para el alcance, consistentes con RN y observables por participantes;
- identifica condiciones, errores y excepciones que alteran el resultado;
- explicita datos requeridos y límites de uso según fuentes aprobadas;
- trata seguridad y privacidad como requisitos a validar, no como configuración inferida;
- permite rastrear su origen, cambios, dependencias y estado de revisión.

No calificar calidad únicamente por la forma sintáctica de la HU ni por métricas arbitrarias. Si el repositorio tiene una rúbrica aprobada, usarla y señalar hallazgos concretos.

## Dependencias

Registrar para cada dependencia: ID si el proyecto lo usa, descripción, fuente/artefacto, historia y CA afectados, impacto si falta y condición requerida. Distinguir dependencia confirmada de hipótesis.

Considerar, solo cuando aplique y esté respaldado:

- decisión o catálogo de negocio;
- datos, sistemas o procesos upstream/downstream;
- integración o evento externo;
- otra HU, RN, capacidad o artefacto aún no aprobado;
- definición de seguridad, privacidad, cumplimiento o propiedad del dato;
- validación de producto, arquitectura o usuarios.

No inventar responsables, fechas, orden de entrega, equipos ni disponibilidad de capacidades. Si una dependencia es incierta, registrarla como pregunta/pending y no presentarla como contrato existente.

## Pendientes y bloqueantes

Conservar los IDs del Documento Funcional o del repositorio. Si no existe convención, proponer `P-XX` para pendientes y `B-XX` para bloqueantes sin duplicar IDs.

- **Pendiente**: falta información o confirmación, pero se puede redactar o validar otra parte sin asumirla como cierta. Señalar qué queda condicionado.
- **Bloqueante**: falta una condición necesaria para definir responsablemente una HU/CA o para evaluar su aceptación. Indicar qué parte se detiene y qué fuente o decisión permite continuar.

En cada registro incluir descripción, artefacto/RN/CA afectado, impacto, dato o decisión requerida, fuente relacionada, estado y responsable/fecha solo si fueron confirmados. Actualizarlo ante nueva evidencia conservando historial cuando el repositorio lo permita. Reflejar el impacto en el semáforo Verde/Amarillo/Rojo con motivo y alcance; el semáforo nunca significa aprobación.

## Trazabilidad RN → CA

Mantener una relación verificable **fuente/necesidad → RN-XX → HU-XX → CA-XX** cuando el proyecto use esta convención. En esta skill la relación central de aceptación es RN → CA; la HU es el artefacto que organiza el valor entregable.

- Cada CA referencia al menos un RN respaldado.
- Cada RN dentro del alcance de la HU se vincula con uno o más CA, o se reporta explícitamente sin cobertura.
- Cada HU referencia el RN/Documento Funcional del que deriva.
- IDs únicos, estables y válidos; conservar los existentes y actualizar enlaces al cambiar alcance o división.
- Informar RN sin historia/CA, CA sin RN, enlaces inválidos, duplicaciones y elementos huérfanos.
- No completar la matriz con relaciones ficticias ni ocultar brechas de cobertura.
- Si el proyecto utiliza otra convención, respetarla y documentar el mapeo solo cuando corresponda.

Matriz mínima:

| Fuente/necesidad | RN | HU | CA | Estado/cobertura |
|---|---|---|---|---|
| [referencia] | [RN-XX] | [HU-XX] | [CA-XX] | [cubierto/pendiente/huérfano] |

## Control estático

Antes de entregar o modificar historias, realizar los controles pertinentes con herramientas disponibles y autorizadas:

1. **Estructura**: campos requeridos presentes; placeholders y pendientes explícitos; formato de plantilla respetado.
2. **Origen**: cada HU/RN/CA se apoya en fuente, o queda marcado como propuesta/pendiente; contradicciones visibles.
3. **IDs**: HU/RN/CA y P/B únicos, estables, con formato válido y sin referencias rotas.
4. **Calidad funcional**: historia clara, valiosa, acotada y no prescriptiva en lo técnico sin respaldo.
5. **Aceptación**: CA observables, alineados con RN, cubren el alcance y no incorporan decisiones abiertas como hechos.
6. **Trazabilidad**: RN → HU → CA consistente; cobertura y huérfanos reportados.
7. **Coherencia**: alcance, reglas, CA, dependencias, riesgos, pendientes y estado no se contradicen.
8. **Seguridad y datos**: no se infieren roles/permisos ni capacidades; no se reproducen datos reales o secretos; ejemplos sintéticos.
9. **Estado y revisión**: aprobaciones solo con evidencia explícita; herramientas y fuentes citadas son las realmente consultadas.

Informar verificaciones hechas, resultado, hallazgos y controles no disponibles. El control estático no demuestra el comportamiento en Dynamics, no sustituye pruebas UAT, revisión experta ni aprobación humana. No afirmar que se ejecutó una prueba o herramienta que no se utilizó.

## Checklist

- [ ] El objetivo, el actor, el valor y el alcance de cada HU son claros.
- [ ] La historia deriva de una fuente/RN respaldado o está claramente marcada como propuesta pendiente.
- [ ] La HU es una unidad coherente y no mezcla resultados independientes sin justificación.
- [ ] Los RN referenciados existen, conservan sus IDs y tienen estado/fuente visibles.
- [ ] Cada CA-XX es observable, verificable, no ambiguo y vinculado a RN.
- [ ] Las reglas, excepciones y límites relevantes están incluidos o registrados como pendientes.
- [ ] Dependencias, supuestos, pendientes y bloqueantes indican impacto y condición de resolución.
- [ ] No se inventan prioridad, estimación, fechas, responsables, roles, permisos, configuraciones ni aprobación.
- [ ] Datos y ejemplos son sintéticos; no se reproducen datos sensibles ni secretos.
- [ ] La matriz RN → HU → CA no tiene enlaces inválidos ni brechas ocultas.
- [ ] La definición de terminado sigue la convención del equipo y no sustituye la aprobación humana.
- [ ] El resultado, las limitaciones y las verificaciones no disponibles quedan comunicados.

Marcar cada punto como cumplido, pendiente o no aplicable, con una nota breve para hallazgos. El checklist no otorga aprobación.

## Salida a archivo

Si se solicita un archivo:

1. Revisar archivos e IDs existentes, convenciones, plantilla pertinente y destino acordado.
2. Usar el formato/ruta indicados por la persona o por una convención inequívoca. Si no puede deducirse el destino, preguntar o proponerlo antes de crear.
3. No sobrescribir historias existentes sin solicitud clara. En actualizaciones, preservar contenido ajeno, IDs, enlaces e historial aplicable.
4. Modificar únicamente los artefactos autorizados; no ejecutar acciones en Dynamics ni otros servicios externos.
5. Presentar el resultado como borrador pendiente de revisión humana e informar ruta, fuentes, estado, verificaciones, limitaciones, dependencias y bloqueantes.

Si no se pidió un archivo, entregar las historias en la conversación. No afirmar que se consultó plantilla, tenant, sistema o herramienta si no ocurrió.

## Ejemplo completo

Ejemplo totalmente ficticio con valores sintéticos. No representa una organización, configuración ni aprobación real.

### Fuente funcional ilustrativa

- Documento: `DF-EJ-01`, versión de ejemplo 0.1, estado borrador.
- RN-02: “Para cada seguimiento realizado sobre una consulta, el proceso debe permitir registrar el resultado del seguimiento.”
- Fuente: minuta ficticia `F-EJ-01`; la necesidad fue atribuida a una persona representante de negocio para este ejemplo.
- Pendiente P-03: catálogo de resultados aún no recibido. El resultado válido y sus valores siguen por confirmar.
- El contexto es Dynamics 365 Sales a solicitud del ejemplo; no se confirma entidad, configuración, permisos ni integración.

### HU-01: registrar el resultado de seguimiento

**Estado**: borrador para revisión; RN-02 y el catálogo deben ser confirmados. Sin prioridad ni estimación asignadas.

**Historia completa**

> Como persona usuaria del equipo comercial, quiero registrar el resultado de un seguimiento de una consulta, para que el equipo pueda conocer qué ocurrió con esa gestión.

**Contexto y alcance**: permitir identificar el resultado asociado a un seguimiento realizado. No define catálogo, mecanismo de almacenamiento, interfaz, asignación de consultas ni permisos.

**Fuente y trazabilidad**: `DF-EJ-01`, RN-02, derivado de la necesidad sintetizada en `F-EJ-01`.

**Criterios de aceptación**

| ID | Criterio | RN relacionado |
|---|---|---|
| CA-01 | Dada una consulta sintética con un seguimiento realizado, cuando se registra el resultado del seguimiento, entonces la información funcional permite identificar el resultado asociado a ese seguimiento. Los valores válidos quedan condicionados a la resolución de P-03. | RN-02 |

**Dependencias**: P-03, recepción y validación del catálogo de resultados; sin fecha o responsable asignados.

**Pendiente/bloqueante**:

| ID | Tipo | Impacto | Resolución requerida | Estado |
|---|---|---|---|---|
| P-03 | Pendiente | No se pueden especificar los valores válidos ni cerrar la validación del catálogo. | Recibir y confirmar catálogo desde una fuente autorizada. | Abierto |

**Seguridad y privacidad**: actor expresado como perspectiva funcional; no se infiere rol ni permiso. La matriz de acceso y el tratamiento de datos requieren validación de las áreas competentes antes de cerrar el alcance.

**Definición de terminado propuesta**: historia revisada contra RN-02; CA-01 validado por negocio; P-03 resuelto o su impacto aceptado explícitamente; IDs y enlaces comprobados; decisiones de seguridad revisadas por responsables autorizados; revisión humana registrada. Este checklist no equivale a aprobación.

**HU corta**

> Como persona usuaria del equipo comercial, quiero registrar el resultado de un seguimiento, para que el equipo conozca qué ocurrió con esa gestión.

**Trazabilidad**

| Fuente/necesidad | RN | HU | CA | Estado/cobertura |
|---|---|---|---|---|
| `F-EJ-01`, reflejada en `DF-EJ-01` | RN-02 | HU-01 | CA-01 | Trazado en borrador; valores del criterio condicionados a P-03 |

**Revisión estática ilustrativa**: ID RN/CA/HU enlazados; CA observable a nivel funcional; P-03 visible; ningún permiso o valor de catálogo inventado; no se ejecutaron pruebas ni se consultó un tenant. Estado: **Amarillo — pendiente**, hasta validar el catálogo y revisar la historia con negocio. Aprobación humana: pendiente.
