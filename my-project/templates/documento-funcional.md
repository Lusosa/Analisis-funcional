# Control del documento

| Campo | Valor |
|---|---|
| Título | [Nombre del documento funcional] |
| Identificador | [ID según convención del proyecto] |
| Estado | Borrador para revisión humana |
| Fecha | [AAAA-MM-DD / Por confirmar] |
| Autor | [Autor confirmado / Por confirmar] |
| Versión | [Versión del documento] |
| Producto/componente | [Dynamics 365 Sales / Customer Insights - Data / Customer Insights - Journeys / Por confirmar] |

Reemplazar los placeholders con información respaldada. Usar “Pendiente de confirmación” para datos faltantes y relacionarlos con su registro; usar “No aplica” con motivo cuando corresponda. Conservar IDs existentes y no reutilizarlos. Todos los ejemplos y datos de prueba deben ser sintéticos; no incluir datos reales, información sensible ni secretos.

| Versión | Cambio | Fuente o solicitud relacionada |
|---|---|---|
| [Versión] | [Descripción del cambio] | [Referencia] |

# Resumen ejecutivo

[Describir la necesidad de negocio, el problema, el resultado esperado y las principales decisiones que requiere el documento. Distinguir hechos, información aportada, supuestos y propuestas.]

## Fuentes y contexto

| Referencia | Fuente y ubicación | Versión/fecha | Información respaldada | Estado de validación |
|---|---|---|---|---|
| [ID de fuente] | [Archivo/sección o declaración atribuible] | [Versión/fecha] | [Alcance de la evidencia] | [Estado confirmado / Por validar] |

Contradicciones entre fuentes: [Referencias, diferencia e impacto / Ninguna identificada]. No resolver contradicciones por inferencia.

Supuestos y recomendaciones: [Descripción, motivo y validación requerida / Ninguno identificado]. No tratarlos como decisiones aprobadas.

# Objetivos

| Objetivo | Resultado observable | Fuente |
|---|---|---|
| [Objetivo de negocio] | [Cómo se verificará su cumplimiento] | [Referencia] |

# Alcance

- Productos/componentes: [Alcance confirmado y puntos por confirmar].
- Procesos y escenarios incluidos: [Descripción].
- Áreas y perspectivas involucradas: [Descripción respaldada].
- Límites y restricciones: [Definiciones y fuentes].

No asumir edición, versión, licencias, capacidades habilitadas ni configuración local. La documentación general del producto no demuestra la configuración de un tenant.

# Fuera de alcance

| Elemento excluido | Motivo o límite acordado | Fuente |
|---|---|---|
| [Proceso, producto o resultado excluido] | [Motivo respaldado / Por confirmar] | [Referencia] |

# Actores

| Actor o perspectiva funcional | Necesidad o intervención | Autoridad/responsabilidad confirmada | Fuente |
|---|---|---|---|
| [Actor] | [Participación en el proceso] | [Confirmación / Por confirmar] | [Referencia] |

Una perspectiva funcional no implica un rol de seguridad ni permisos asignados.

# Proceso AS-IS

[Describir el proceso actual según las fuentes. Si no existe evidencia suficiente, registrar un pendiente en lugar de inferir el proceso.]

| Paso | Actor | Entrada/disparador | Actividad | Salida | Fuente |
|---|---|---|---|---|---|
| [Número] | [Actor] | [Condición inicial] | [Actividad actual] | [Resultado] | [Referencia] |

Variantes, excepciones y problemas actuales: [Descripción, impacto y fuente].

# Proceso TO-BE

[Describir el proceso esperado, distinguiendo propuestas de decisiones respaldadas y señalando los cambios respecto del AS-IS.]

| Paso | Actor | Condición de entrada | Comportamiento esperado | Salida/transición | RN o fuente | Estado |
|---|---|---|---|---|---|---|
| [Número] | [Actor] | [Condición] | [Resultado funcional] | [Destino/cierre] | [Referencia] | [Propuesto / Confirmado con evidencia] |

Flujos alternativos, errores, cancelaciones, reintentos y reingresos: [Definiciones respaldadas o pendientes relacionados].

# Reglas de negocio

| RN-XX | Descripción | Fuente | Estado |
|---|---|---|---|
| [RN-XX] | [Regla o requisito atómico, inequívoco y verificable] | [Referencia y ubicación exacta] | [Borrador / Por validar / Aprobado con evidencia] |

Asignar RN únicamente a requisitos respaldados por fuentes atribuibles; no convertir preguntas abiertas en reglas decididas. Mantener únicos y estables los IDs. Registrar condiciones, excepciones y conflictos relevantes en la descripción o mediante referencias.

# Datos e información

| Dato/concepto | Significado y uso | Origen/destino | Obligatoriedad y calidad | Sensibilidad/conservación | Fuente o pendiente |
|---|---|---|---|---|---|
| [Dato conceptual] | [Definición] | [Fuente/destino conocidos] | [Reglas respaldadas] | [Política confirmada / Por confirmar] | [Referencia] |

Reportes o indicadores requeridos: [Propósito, definición, datos, audiencia y fuente / No aplica con motivo / Pendiente].

# Integraciones

| Interacción | Origen → destino | Evento y datos | Frecuencia/latencia requerida | Errores y recuperación | Evidencia/estado |
|---|---|---|---|---|---|
| [Interacción requerida o existente, diferenciadas] | [Sistemas] | [Definición respaldada] | [Valor respaldado / Por confirmar] | [Regla / Pendiente] | [Fuente y estado] |

No asumir una integración desplegada por su mención en un diagrama ni diseñar interfaces sin alcance y fuentes suficientes.

# Seguridad y permisos

| Actor funcional | Acción e información | Alcance de acceso requerido | Restricción/justificación | Fuente aprobada | Estado/pendiente |
|---|---|---|---|---|---|
| [Actor] | [Necesidad funcional] | [Alcance / Por confirmar] | [Restricción respaldada] | [Referencia / No disponible] | [Estado o ID] |

Privacidad, consentimiento, finalidad, retención, auditoría y segregación de funciones: [Políticas respaldadas, condiciones aplicables y decisiones por validar].

No inferir roles, privilegios, permisos, políticas o configuración. Si falta una fuente aprobada, registrar un pendiente o bloqueante y solicitar validación de las personas competentes.

# Requisitos no funcionales

| Referencia según convención local | Requisito | Condición/medida verificable | Fuente | Método de validación esperado | Estado |
|---|---|---|---|---|---|
| [ID] | [Calidad o restricción requerida] | [Umbral o resultado respaldado] | [Referencia] | [Método / Por confirmar] | [Estado] |

No inventar umbrales de rendimiento, disponibilidad, accesibilidad o cumplimiento. Registrar los valores faltantes como pendientes.

# Criterios de aceptación

| CA-XX | Descripción | RN asociado |
|---|---|---|
| [CA-XX] | [Dada una condición, cuando ocurre una acción, entonces se observa un resultado verificable] | [RN existente] |

Derivar CA solo de requisitos respaldados; no introducir reglas, permisos o comportamientos adicionales. Mantener los IDs únicos y estables. Señalar criterios propuestos o condicionados por decisiones pendientes.

# Dependencias

| Referencia | Dependencia | Fuente | RN/CA o proceso afectado | Impacto | Condición de satisfacción | Estado |
|---|---|---|---|---|---|---|
| [ID según convención local] | [Dependencia confirmada o hipótesis explícita] | [Referencia] | [Relación] | [Efecto] | [Dato, artefacto o decisión requerido] | [Estado] |

# Riesgos

| Referencia | Riesgo | Fuente o supuesto explícito | Impacto | Mitigación propuesta | Validación requerida |
|---|---|---|---|---|---|
| [ID según convención local] | [Descripción] | [Referencia] | [Impacto conocido o potencial] | [Propuesta] | [Confirmación necesaria] |

# Pendientes

Información faltante que permite avanzar en partes no afectadas sin asumirla como cierta.

| ID | Descripción y motivo | Fuente/artefacto relacionado | RN/CA/TC afectados | Impacto | Dato o decisión requerida | Estado |
|---|---|---|---|---|---|---|
| [ID estable] | [Vacío identificado] | [Referencia] | [IDs existentes / No aplica] | [Qué queda condicionado] | [Condición de resolución] | [Estado] |

# Bloqueantes

Condiciones que impiden definir, verificar o entregar responsablemente un elemento concreto.

| ID | Descripción y motivo | Fuente/artefacto relacionado | RN/CA/TC afectados | Trabajo detenido | Condición para continuar | Estado |
|---|---|---|---|---|---|---|
| [ID estable] | [Bloqueante] | [Referencia] | [IDs existentes / No aplica] | [Alcance específico] | [Evidencia o decisión requerida] | [Estado] |

Responsables y fechas de pendientes/bloqueantes: [Registrar por ID solo los confirmados / Sin asignar]. Conservar historial al actualizar estados; no inventar asignaciones, fechas ni resoluciones.

# Matriz de trazabilidad

| RN | CA | TC |
|---|---|---|
| [RN existente] | [CA existente / Sin cobertura] | [TC existente / Pendiente de elaboración] |

Brechas y hallazgos: [RN sin CA, CA sin RN, TC sin CA, requisitos sin prueba o referencias inválidas / Ninguno identificado]. No crear IDs ni relaciones ficticias para completar la matriz. Referenciar las ubicaciones de pruebas existentes; su presencia no implica ejecución.

# Revisión humana

Estado de revisión/aprobación: [Pendiente / Decisión explícita con evidencia].

| Elemento o alcance revisado | Persona/área confirmada | Fecha real de revisión | Decisión explícita | Evidencia y condiciones |
|---|---|---|---|---|
| [Documento o sección] | [Confirmada / Por confirmar] | [Fecha / Pendiente] | [Pendiente / Aprobado / Requiere cambios] | [Referencia / No disponible] |

Semáforo: [Verde: listo para revisión / Amarillo: pendiente / Rojo: bloqueado].

Motivo y alcance: [Justificación, partes que pueden avanzar y partes bloqueadas]. El semáforo y el control estático no constituyen aprobación ni autorización para implementar. Mantener el documento como borrador sin aprobación humana explícita; la aprobación de un elemento no aprueba automáticamente los relacionados.

## Verificaciones realizadas

| Control | Método/herramienta realmente utilizada | Resultado y hallazgos | Limitaciones o verificaciones pendientes |
|---|---|---|---|
| [Control pertinente] | [Revisión manual/herramienta disponible] | [Resultado real / No realizado] | [Descripción] |

La revisión estática no demuestra comportamiento en Dynamics ni reemplaza UAT, revisión de dominio, seguridad o cumplimiento. No afirmar acceso a un tenant ni ejecución de pruebas sin evidencia real.

# Checklist

- [ ] Control documental completo o campos pendientes identificados.
- [ ] Objetivos, alcance, exclusiones y productos/componentes definidos.
- [ ] Fuentes atribuibles y contradicciones visibles; hechos, supuestos y propuestas diferenciados.
- [ ] Actores descritos sin inferir autoridad ni permisos.
- [ ] AS-IS y TO-BE diferenciados; variantes, excepciones y cambios documentados o pendientes.
- [ ] RN verificables, respaldados, únicos y estables.
- [ ] Datos, integraciones y requisitos no funcionales sustentados por fuentes.
- [ ] Seguridad, permisos y privacidad respaldados o pendientes de validación competente.
- [ ] CA observables y relacionados con RN existentes, sin reglas adicionales inventadas.
- [ ] Dependencias, riesgos, pendientes y bloqueantes con impacto y condición de resolución.
- [ ] Matriz RN → CA → TC revisada; cobertura faltante y huérfanos reportados.
- [ ] Solo datos sintéticos en ejemplos; sin información sensible ni secretos.
- [ ] Controles realizados, resultados y verificaciones no disponibles informados.
- [ ] Semáforo coherente con los pendientes y bloqueantes; aprobación humana registrada por separado.

Resultado del checklist: [Cumplido / Pendiente / No aplica por control, con hallazgos y motivos]. Los placeholders son reutilizables en esta plantilla; deben resolverse o quedar registrados como pendientes en el documento elaborado.