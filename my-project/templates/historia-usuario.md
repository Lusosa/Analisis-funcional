# Identificación

| Campo | Valor |
|---|---|
| ID | [HU-XX] |
| Título | [Resultado funcional breve] |
| Estado | Borrador para revisión humana |
| Fecha | [AAAA-MM-DD / Por confirmar] |
| Autor | [Autor confirmado / Por confirmar] |
| Versión | [Versión de la historia] |
| Producto/componente | [Dynamics 365 Sales / Customer Insights - Data / Customer Insights - Journeys / Por confirmar] |

Reemplazar los placeholders con información respaldada. Usar “Pendiente de confirmación” y su referencia cuando falte información; indicar “No aplica” con motivo cuando corresponda. Conservar los IDs existentes y no reutilizarlos. No asignar prioridades, estimaciones, responsables ni fechas por inferencia.

# Historia

**Como** [persona o perspectiva funcional],

**Quiero** [capacidad o resultado esperado],

**Para** [beneficio de negocio respaldado].

# Contexto

[Describir la necesidad, el escenario y el proceso afectado. Distinguir proceso actual, cambio propuesto y decisiones confirmadas. No prescribir una solución técnica sin respaldo.]

- Documento Funcional y ubicación: [Archivo, versión y sección / No disponible].
- Fuente de la necesidad: [Referencia o declaración atribuible y estado de validación].
- Supuestos explícitos: [Descripción, motivo y confirmación requerida / Ninguno identificado].
- Contradicciones entre fuentes: [Referencias, diferencia e impacto / Ninguna identificada].

Si no existe evidencia que respalde la necesidad, mantener la historia como hipótesis exploratoria y registrar qué confirmación falta; no presentarla como compromiso aprobado.

# Alcance

- Capacidad o resultado incluido: [Descripción].
- Actor y escenario de uso: [Descripción respaldada].
- Condiciones y límites: [Definiciones o pendientes relacionados].
- Datos requeridos: [Conceptos y fuentes; ejemplos exclusivamente sintéticos].

La historia debe representar una unidad coherente de valor. No asumir edición, licencia, capacidades habilitadas, integración ni configuración del entorno.

# Fuera de alcance

[Enumerar procesos, variantes o resultados excluidos y la fuente de esa delimitación.]

# RN asociados

| RN | Descripción o referencia al requisito | Fuente y ubicación | Estado del RN |
|---|---|---|---|
| [RN-XX existente] | [Requisito respaldado] | [Documento/sección o fuente atribuible] | [Estado confirmado / Por validar] |

No inventar RN para justificar la historia. Conservar su contenido y autoridad; referenciarlo sin reinterpretar decisiones de negocio.

# Criterios de aceptación

## [CA-XX]

- **RN asociado:** [Uno o más RN existentes].
- **Dado:** [Contexto y condiciones iniciales].
- **Cuando:** [Acción o evento dentro del alcance].
- **Entonces:** [Resultado observable y verificable].
- **Estado:** [Propuesto / Por validar / Aprobado con evidencia].
- **Pendientes relacionados:** [IDs existentes / Ninguno identificado].

[Repetir el bloque con un ID único para cada criterio necesario. Incluir flujo principal, límites y excepciones pertinentes respaldados por RN.]

No añadir reglas, umbrales, valores de catálogo, permisos o comportamiento no documentado. Si una decisión está abierta, marcar el criterio como propuesto/condicionado; no presentarlo como aceptación definitiva. Los CA no son pruebas ejecutadas.

# Reglas

| RN o fuente | Condición/regla aplicable | Excepción o restricción | CA afectados |
|---|---|---|---|
| [Referencia existente] | [Regla respaldada o enlace a su definición] | [Definición / Pendiente relacionado] | [CA existentes] |

No resolver conflictos entre reglas sin decisión humana; registrar las fuentes y el impacto en pendientes o bloqueantes.

# Dependencias

| Referencia | Dependencia | Fuente y estado de confirmación | HU/CA afectados | Impacto | Condición de satisfacción |
|---|---|---|---|---|---|
| [ID según convención local] | [Dato, decisión, sistema o artefacto requerido] | [Evidencia / Hipótesis por confirmar] | [IDs existentes] | [Efecto si falta] | [Información o validación requerida] |

# Riesgos

| Referencia | Riesgo | Fuente o supuesto explícito | Impacto | Mitigación propuesta |
|---|---|---|---|---|
| [ID según convención local] | [Descripción] | [Referencia] | [Impacto conocido o potencial] | [Propuesta pendiente de revisión] |

# Pendientes

Información o confirmación faltante que permite avanzar en partes no afectadas sin asumirla como cierta.

| ID | Descripción y motivo | Fuente/artefacto relacionado | RN/HU/CA afectados | Impacto | Condición de resolución | Estado |
|---|---|---|---|---|---|---|
| [ID estable] | [Vacío identificado] | [Referencia] | [IDs existentes] | [Qué queda condicionado] | [Dato o decisión requerida] | [Estado] |

# Bloqueantes

Condiciones que impiden definir o verificar responsablemente una parte de la historia o su aceptación.

| ID | Descripción y motivo | Fuente/artefacto relacionado | RN/HU/CA afectados | Trabajo detenido | Condición para continuar | Estado |
|---|---|---|---|---|---|---|
| [ID estable] | [Bloqueante] | [Referencia] | [IDs existentes] | [Alcance específico] | [Evidencia o decisión requerida] | [Estado] |

Responsables y fechas de pendientes/bloqueantes: [Registrar por ID solo los confirmados / Sin asignar]. Conservar los IDs e historial al actualizar estados.

# Seguridad

| Actor funcional | Acción e información requerida | Alcance/restricción | Fuente aprobada | Estado o pendiente |
|---|---|---|---|---|
| [Perspectiva de negocio] | [Necesidad de acceso] | [Definición / Por confirmar] | [Referencia / No disponible] | [Estado o ID relacionado] |

- Privacidad, consentimiento y tratamiento de datos: [Políticas aplicables con fuente / Decisiones pendientes].
- Validación competente requerida: [Persona/área confirmada / Por confirmar].

Un actor funcional no implica un rol de seguridad. No inferir roles, permisos, privilegios, políticas o configuración. Usar únicamente datos sintéticos en ejemplos; no incluir datos reales, información sensible ni secretos.

# Definición de terminado

Definición del equipo: [Referencia vigente / No disponible]. Si no existe, la siguiente lista es una propuesta de completitud del artefacto para revisión humana, no una definición de implementación terminada ni autorización de release.

- [ ] Actor, necesidad, beneficio y alcance descritos.
- [ ] Fuente y RN asociados documentados con estado visible.
- [ ] CA observables, vinculados a RN y revisados contra reglas y excepciones.
- [ ] Dependencias, riesgos, pendientes y bloqueantes visibles.
- [ ] Seguridad y datos revisados sin inferir permisos o políticas.
- [ ] IDs y enlaces comprobados; faltantes de cobertura reportados.
- [ ] Revisión funcional registrada cuando se haya realizado realmente.

Aprobación humana: [Pendiente / Decisión explícita, alcance, persona confirmada, fecha y evidencia]. No inferir aprobación por silencio, checklist completo ni revisión estática.

# Trazabilidad

**RN → HU → CA**

| RN | HU | CA | Fuente/ubicación | Estado o brecha de cobertura |
|---|---|---|---|---|
| [RN existente] | [HU-XX de esta historia] | [CA existente / Sin cobertura] | [Referencia] | [Descripción] |

Cada CA debe relacionarse con al menos un RN respaldado. Cada RN incluido en el alcance debe tener CA o quedar reportado sin cobertura. Informar CA huérfanos, duplicados y referencias inválidas; no inventar relaciones. Mantener IDs únicos y estables y respetar la convención del proyecto.

# Checklist

- [ ] Identificación y estado del borrador completos o pendientes explícitos.
- [ ] Historia expresa actor funcional, resultado y beneficio respaldados.
- [ ] Contexto, alcance y exclusiones claros; unidad de valor coherente.
- [ ] Hechos, información aportada, supuestos y propuestas diferenciados.
- [ ] RN existentes, fuentes atribuibles y contradicciones visibles.
- [ ] CA verificables, únicos, relacionados con RN y sin reglas adicionales inventadas.
- [ ] Reglas, límites y excepciones relevantes cubiertos o registrados como pendientes.
- [ ] Dependencias y riesgos con impacto y grado de certeza explícitos.
- [ ] Pendientes/bloqueantes con elementos afectados y condición de resolución.
- [ ] Seguridad respaldada o pendiente; sin permisos ni configuración inferidos.
- [ ] Datos de ejemplo sintéticos; sin información sensible ni secretos.
- [ ] Trazabilidad RN → HU → CA revisada, sin brechas ocultas.
- [ ] Definición de terminado alineada al equipo o marcada como propuesta.
- [ ] Aprobación humana separada del control de completitud.

Controles realmente realizados y resultados: [Descripción del control, método y hallazgos].

Verificaciones no disponibles: [Detalle y motivo / Ninguna identificada]. El control estático no demuestra comportamiento en Dynamics ni sustituye UAT, revisión experta o aprobación humana.

Semáforo: [Verde: listo para revisión / Amarillo: pendiente / Rojo: bloqueado]. Motivo y alcance: [Justificación y partes afectadas]. No equivale a aprobación.

Resultado por control: [Cumplido / Pendiente / No aplica con motivo]. Resolver los placeholders al elaborar la historia o registrarlos explícitamente como pendientes.