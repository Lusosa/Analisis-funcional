# Feature Specification: Gestión de requerimientos

**Feature Branch**: `001-gestion-requerimientos`

**Created**: 2026-10-21

**Status**: Draft

**Input**: User description: "Quiero crear una aplicación para gestionar requerimientos de análisis funcional donde los usuarios puedan crear historias de usuario, priorizarlas y realizar seguimiento de estados."

## User Scenarios & Testing

### User Story 1 - Crear y consultar historias de usuario (Priority: P1)

Como analista funcional, quiero registrar y consultar historias de usuario para mantener los requerimientos del producto en un lugar organizado.

**Why this priority**: Crear y recuperar historias es la capacidad base; sin ella no existe un inventario que priorizar o seguir.

**Independent Test**: Crear una historia con sus datos obligatorios y comprobar que aparece en el listado y conserva su contenido al volver a consultarla.

**Acceptance Scenarios**:

1. **Given** que el usuario está gestionando requerimientos, **When** registra una historia con título y descripción, **Then** la historia queda guardada y visible en el listado.
2. **Given** que existe una historia, **When** el usuario la consulta, **Then** puede ver su título, descripción, prioridad y estado.
3. **Given** que el usuario intenta guardar una historia sin título o descripción, **When** confirma el registro, **Then** el sistema indica qué dato falta y no guarda la historia incompleta.
4. **Given** que existe una historia, **When** el usuario modifica su título o descripción y guarda los cambios, **Then** la historia muestra los datos actualizados al volver a consultarla.

---

### User Story 2 - Priorizar historias (Priority: P2)

Como analista funcional, quiero asignar y cambiar la prioridad de cada historia para ordenar el trabajo según su importancia.

**Why this priority**: La priorización permite decidir qué requerimientos atender primero una vez que existe un inventario.

**Independent Test**: Cambiar la prioridad de una historia y comprobar que el valor actualizado se muestra en su consulta y en el listado ordenado por prioridad.

**Acceptance Scenarios**:

1. **Given** que existe una historia sin priorizar, **When** el usuario le asigna una prioridad, **Then** el sistema guarda y muestra esa prioridad.
2. **Given** que existen historias con distintas prioridades, **When** el usuario ordena el listado por prioridad, **Then** las historias aparecen de mayor a menor prioridad y las no priorizadas al final.
3. **Given** que una historia ya tiene prioridad, **When** el usuario cambia su prioridad, **Then** el nuevo valor reemplaza al anterior en el listado y en el detalle.

---

### User Story 3 - Dar seguimiento al estado (Priority: P2)

Como miembro del equipo, quiero actualizar y consultar el estado de cada historia para saber en qué etapa se encuentra.

**Why this priority**: El estado ofrece visibilidad del avance y completa el seguimiento operativo de los requerimientos.

**Independent Test**: Cambiar el estado de una historia y comprobar que se refleja al volver al listado y al detalle.

**Acceptance Scenarios**:

1. **Given** que se crea una historia, **When** se guarda, **Then** queda inicialmente en estado "Borrador".
2. **Given** que existe una historia, **When** el usuario cambia su estado a otro valor permitido, **Then** el sistema guarda y muestra el estado nuevo.
3. **Given** que existen historias en distintos estados, **When** el usuario filtra el listado por un estado, **Then** solo aparecen historias que coinciden con el filtro.

### Edge Cases

- Si el título o la descripción contienen solo espacios, el sistema los trata como vacíos e impide guardar la historia.
- Si no hay historias que coincidan con un filtro de prioridad o estado, el listado muestra un resultado vacío sin presentar un error.
- Si una historia no tiene prioridad asignada, se identifica como "Sin prioridad" y se ordena después de las prioridades asignadas.
- Los títulos duplicados se permiten, ya que pueden describir requerimientos distintos.

## Requirements

### Functional Requirements

- **FR-001**: El sistema MUST permitir crear historias de usuario con título y descripción obligatorios, y rechazar valores vacíos o compuestos solo por espacios.
- **FR-002**: El sistema MUST permitir consultar las historias guardadas en un listado y abrir el detalle de una historia.
- **FR-003**: El sistema MUST permitir editar el título y la descripción de una historia existente.
- **FR-004**: El sistema MUST permitir asignar a cada historia una prioridad de P1 (más alta), P2, P3 o P4 (más baja), o dejarla sin priorizar.
- **FR-005**: El sistema MUST permitir ordenar las historias por prioridad, de mayor a menor, dejando las historias sin prioridad al final.
- **FR-006**: El sistema MUST asignar el estado "Borrador" al crear una historia y permitir cambiarlo entre "Borrador", "Lista", "En curso", "Bloqueada" y "Completada".
- **FR-007**: El sistema MUST permitir filtrar el listado de historias por prioridad y por estado.
- **FR-008**: El sistema MUST conservar los cambios realizados en una historia para que sus datos actualizados aparezcan al volver a consultarla.

### Key Entities

- **Historia de usuario**: Requerimiento funcional expresado como una necesidad; incluye título, descripción, prioridad opcional y estado. Puede modificarse sin perder su identidad.
- **Prioridad**: Nivel de importancia asignado a una historia; puede ser P1, P2, P3, P4 o estar sin asignar.
- **Estado**: Etapa actual de una historia dentro del flujo de trabajo definido.

## Success Criteria

### Measurable Outcomes

- **SC-001**: Un usuario puede crear y guardar una historia válida en menos de 2 minutos durante una prueba de uso.
- **SC-002**: Un usuario puede cambiar la prioridad o el estado de una historia en menos de 30 segundos.
- **SC-003**: Al menos el 90 % de los usuarios de prueba puede localizar historias por prioridad y estado en menos de 1 minuto.
- **SC-004**: El 100 % de las historias guardadas conserva título, descripción, prioridad y estado al volver a consultarse.

## Assumptions

- La primera versión está dirigida a usuarios que colaboran en la gestión de requerimientos; autenticación, permisos diferenciados y colaboración en tiempo real quedan fuera del alcance inicial.
- Se utilizarán las prioridades P1 a P4, donde P1 es la más alta; una historia puede permanecer sin priorizar.
- El flujo inicial usa los estados Borrador, Lista, En curso, Bloqueada y Completada. La configuración de estados personalizados no forma parte del alcance inicial.
- Las historias no requieren un identificador de proyecto ni una integración con otras herramientas para cumplir los flujos descritos.