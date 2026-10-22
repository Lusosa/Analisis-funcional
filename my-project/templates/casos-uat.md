# Caso de prueba

| Campo | Valor |
|---|---|
| ID | [TC-XX] |
| Título | [Comportamiento funcional que se verifica] |
| Versión del caso | [Versión] |
| Producto/componente | [Dynamics 365 Sales / Customer Insights - Data / Customer Insights - Journeys / Por confirmar] |
| HU relacionada | [HU existente y ubicación] |
| Escenario | [Positivo / Alternativo / Excepción / Clasificación local] |

Reemplazar los placeholders con información respaldada. Usar “Pendiente de confirmación” para vacíos y relacionarlos con su registro; usar “No aplica” con motivo cuando corresponda. Conservar IDs únicos y estables. Repetir esta estructura para cada caso, sin reutilizar identificadores.

# Objetivo

[Describir el comportamiento observable que se comprobará, su relación con el criterio de aceptación y los límites del caso. No agregar reglas ni capacidades no respaldadas.]

# RN asociado

| RN | Descripción o referencia | Fuente y ubicación | Estado de validación |
|---|---|---|---|
| [RN existente] | [Requisito o regla respaldada] | [Documento, versión y sección] | [Estado confirmado / Por validar] |

# CA asociado

| CA | Descripción del criterio | RN relacionado | Fuente y estado de aprobación |
|---|---|---|---|
| [CA existente] | [Condición y resultado observable documentados] | [RN existente] | [Ubicación y evidencia / Pendiente] |

Cada TC debe verificar al menos un CA vigente. Si falta aprobación o el criterio es ambiguo, mantener el caso como borrador condicionado y registrar el pendiente/bloqueante; no declararlo listo para ejecutar.

# Precondiciones

| Condición requerida | Cómo se comprobará | Fuente | Estado o pendiente relacionado |
|---|---|---|---|
| [Entorno UAT autorizado y producto/componente requerido] | [Verificación prevista] | [Referencia] | [Por confirmar] |
| [Actor funcional y acceso autorizado necesarios] | [Confirmación por el proceso competente, sin credenciales] | [Referencia] | [Por confirmar] |
| [Estado inicial del proceso y registros sintéticos] | [Verificación prevista] | [Referencia] | [Por confirmar] |
| [Dependencia, catálogo o integración necesaria] | [Verificación prevista] | [Referencia] | [Por confirmar / No aplica con motivo] |
| [Aprobación de HU/CA para UAT] | [Evidencia explícita según proceso del equipo] | [Referencia] | [Por confirmar] |

No asumir entorno disponible, configuración, capacidades habilitadas, roles ni permisos. Indicar qué precondición incumplida bloquea qué paso.

# Datos sintéticos

| Dato | Valor sintético | Uso en el caso | Fuente del catálogo o regla aplicable |
|---|---|---|---|
| [Concepto o identificador] | [Valor ficticio claramente sintético] | [Propósito y paso relacionado] | [Referencia / No aplica / Pendiente] |

Preparación, reutilización y limpieza de datos: [Procedimiento autorizado o dependencia pendiente]. No ejecutar acciones externas como parte de completar esta plantilla.

No copiar datos reales, productivos, personales o confidenciales. No incluir contraseñas, tokens, claves ni secretos. Utilizar únicamente valores sintéticos mínimos y catálogos respaldados.

# Pasos

| Paso | Acción | Resultado esperado del paso |
|---|---|---|
| 1 | [Una acción concreta y reproducible] | [Resultado observable relacionado con el CA] |
| 2 | [Siguiente acción dentro del alcance autorizado] | [Resultado observable] |

[Añadir pasos en orden según el criterio. No asumir interfaces, controles visuales ni automatizaciones no especificados. Separar escenarios alternativos cuando tengan condiciones y resultados distintos.]

# Resultado esperado

[Describir el estado, dato o comportamiento final que demuestra el cumplimiento del CA. Mantener coherencia con los resultados por paso y evitar expresiones subjetivas como “funciona correctamente”.]

# Resultado obtenido

No registrado: caso no ejecutado.

| Paso/CA | Observación real | Diferencia respecto de lo esperado | Evidencia o incidencia relacionada |
|---|---|---|---|
| [Completar tras ejecutar] | [Resultado realmente observado] | [Diferencia / Sin diferencia observada] | [Referencia existente] |

Completar únicamente tras una ejecución real y autorizada. No copiar el resultado esperado como si fuera una observación.

# Evidencia

- Evidencia prevista: [Observación registrada, captura sanitizada u otro método aprobado que permita verificar el CA].
- Evidencia obtenida: [Sin evidencia: caso no ejecutado / Referencia a evidencia realmente registrada].
- Relación con pasos y CA: [Referencias].
- Tratamiento y ubicación autorizados: [Procedimiento o pendiente].

No adjuntar datos reales ni secretos; preparar evidencias con datos sintéticos y revisar que no expongan información sensible. La evidencia prevista no demuestra ejecución ni cumplimiento.

# Observaciones

| Referencia | Tipo | Descripción y fuente | Paso/RN/CA afectado | Impacto | Condición de resolución | Estado |
|---|---|---|---|---|---|---|
| [ID estable o referencia existente] | [Pendiente / Bloqueante / Incidencia / Limitación] | [Descripción] | [Referencia] | [Qué queda condicionado o detenido] | [Dato, decisión o corrección requerida] | [Estado] |

Responsables y fechas: [Solo los confirmados / Sin asignar]. Conservar historial al registrar correcciones y reejecuciones; no inventar incidencias, severidad ni resoluciones.

# Estado

| Campo | Valor |
|---|---|
| Estado documental | Borrador para revisión humana |
| Estado de ejecución | No ejecutado |
| Persona ejecutora | [No registrada; completar solo tras ejecución real] |
| Fecha de ejecución | [No registrada; completar solo tras ejecución real] |
| Entorno y versión de ejecución | [No registrados; completar con evidencia autorizada] |
| Motivo del estado | [Sin ejecución registrada / Descripción respaldada] |
| Revisión y aceptación humana | [Pendiente / Decisión explícita, alcance y evidencia] |

Usar los estados de ejecución del equipo; por ejemplo, No ejecutado, Aprobado, Fallido o Bloqueado. Cambiar el estado solo con resultados reales y evidencia suficiente. “Aprobado” como resultado de un TC no implica aceptación final de UAT, aprobación del documento ni autorización de despliegue. Si no se puede comprobar el resultado, no registrarlo como aprobado.

# Trazabilidad

**RN → CA → TC**

| RN | CA | TC | Fuente/ubicación | Cobertura y resultado de ejecución |
|---|---|---|---|---|
| [RN existente] | [CA existente] | [TC-XX de este caso] | [Referencia] | [Caso preparado; ejecución pendiente / Resultado real] |

Brechas: [RN sin CA, CA sin TC, TC sin CA, referencias inválidas o criterios no verificables / Ninguna identificada]. No inventar relaciones para completar cobertura. La cobertura documental no demuestra que el criterio se haya cumplido.

# Checklist

- [ ] Identificación y objetivo claros, dentro del alcance autorizado.
- [ ] RN, HU y CA fuente existentes, vigentes y referenciados.
- [ ] Aprobación requerida para UAT verificada o registrada como pendiente/bloqueante.
- [ ] Precondiciones comprobables; acceso y entorno no inferidos.
- [ ] Datos sintéticos, mínimos y consistentes; sin datos reales ni secretos.
- [ ] Pasos numerados, reproducibles y con resultados esperados observables.
- [ ] Resultado final alineado con el CA, sin reglas adicionales inventadas.
- [ ] Evidencia prevista definida y separada de la realmente obtenida.
- [ ] Resultado obtenido y datos de ejecución registrados únicamente si hubo ejecución real.
- [ ] Dependencias, pendientes y bloqueantes con impacto y condición de resolución.
- [ ] Trazabilidad RN → CA → TC válida, sin brechas ocultas.
- [ ] Estado coherente con resultados, evidencia y limitaciones.
- [ ] Revisión y aceptación humana separadas de la preparación y del resultado del TC.

Controles realmente realizados y hallazgos: [Descripción, método y resultado real].

Verificaciones no disponibles: [Detalle y motivo / Ninguna identificada]. El control estático no demuestra comportamiento en Dynamics ni sustituye ejecución UAT, revisión experta o aprobación humana.

Resultado por control: [Cumplido / Pendiente / No aplica con motivo]. Resolver los placeholders al elaborar el caso o registrarlos explícitamente como pendientes. El checklist completo no significa que la prueba se ejecutó o fue aprobada.