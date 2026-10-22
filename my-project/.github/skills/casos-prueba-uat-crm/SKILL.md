---
name: "casos-prueba-uat-crm"
description: "Deriva, estructura y revisa casos UAT para Dynamics 365 Sales y Customer Insights con datos sintéticos y trazabilidad CA-XX → TC-XX."
---

# Casos de prueba UAT CRM

## Propósito

Preparar casos de prueba de aceptación de usuario (UAT) que permitan a las personas usuarias verificar, en un entorno autorizado, que una solución para Microsoft Dynamics 365 Sales, Customer Insights o su interacción satisface criterios de aceptación aprobados.

La skill prepara pruebas reproducibles y trazables; no las ejecuta ni declara que el producto funciona. Los casos y resultados son borradores hasta la revisión humana. La ejecución y aceptación final corresponden a personas autorizadas y al proceso del equipo.

## Cuándo usarla

Usar esta skill para derivar, crear, actualizar o revisar casos UAT a partir de historias de usuario, criterios CA-XX y documentos funcionales respaldados.

Aplica a Dynamics 365 Sales y Customer Insights. Para Customer Insights, confirmar si el alcance corresponde a Customer Insights - Data, Customer Insights - Journeys u otro componente que use el equipo. No asumir versión, licencia, capacidades, integraciones, datos, configuración ni disponibilidad del entorno.

No usarla para inventar requisitos, redefinir criterios, preparar pruebas técnicas automatizadas, ejecutar operaciones en Dynamics o reemplazar pruebas de integración, seguridad, rendimiento o regresión. Si esos entregables también se solicitan, delimitar el alcance y recurrir a la skill o proceso correspondiente.

## Entradas requeridas

Revisar la solicitud y los artefactos disponibles antes de preguntar. Para producir un caso UAT definitivo se necesita:

- HU y CA existentes, con IDs únicos y estado confirmado/aprobado según el proceso;
- producto/componente y escenario en alcance;
- resultado esperado documentado en cada CA;
- fuente y ubicación de los criterios, junto con sus dependencias, reglas y restricciones relevantes;
- convención de IDs, estructura o plantilla UAT local si existe.

Entradas recomendadas cuando estén disponibles:

- datos y catálogos sintéticos aprobados para UAT;
- precondiciones del entorno, configuración de prueba y estado inicial de los registros;
- actor funcional de la prueba y acceso autorizado que el equipo de pruebas debe confirmar;
- procesos, integraciones o dependencias necesarios para el escenario;
- criterios de salida, severidad, prioridad o clasificación de defectos del equipo;
- método autorizado para registrar resultados y evidencias;
- casos existentes relacionados, limitaciones y decisiones abiertas.

Si faltan condiciones que cambian el resultado, registrar pendientes o bloqueantes. Se puede preparar un borrador condicionado, pero no etiquetarlo como caso listo para ejecución si el CA fuente no está aprobado o verificable.

## Validaciones previas

1. Confirmar el pedido, objetivo UAT, producto/componente, alcance, audiencia, formato y destino.
2. Leer `AGENTS.md`, `.github/agents/analista-funcional-afu.agent.md`, las HU/CA fuente, el Documento Funcional y artefactos relacionados disponibles.
3. Verificar que los CA estén respaldados, vigentes, observables y aprobados para la fase de prueba. Identificar cuáles están en borrador o en contradicción.
4. Revisar convención local de HU/CA/TC, IDs existentes, duplicados, relaciones y plantillas. No asumir que `templates/` contiene una plantilla aplicable sin inspeccionarla.
5. Confirmar qué actor funcional debe realizar la prueba y que la preparación del acceso al entorno es responsabilidad de los procesos/personas autorizados; no inferir ni asignar roles o permisos.
6. Verificar que todos los ejemplos y datos de prueba sean sintéticos, minimizados y no identificables. No usar ni copiar datos reales, de producción o secretos.
7. Distinguir preparación del caso, ejecución, evidencia observada, resultado y aprobación. No completar resultados de ejecución de antemano.
8. Registrar restricciones del entorno, integraciones o dependencias faltantes y decidir si son pendientes o bloqueantes para el caso afectado.

## Derivación desde HU

1. Identificar el ID y estado de la HU, el escenario y los CA asociados.
2. Confirmar que la HU deriva de RN o fuente respaldada y que el alcance de prueba coincide con la historia.
3. Separar los comportamientos aceptables de los detalles técnicos que no forman parte de la HU.
4. Derivar uno o más casos solo para cubrir CA verificables; no crear pruebas para funcionalidades implícitas o “habituales” del CRM.
5. Mantener referencias de cada TC a la HU y a sus CA, además de RN cuando el formato del proyecto lo permita.
6. Si la HU está en borrador o tiene decisiones abiertas, proponer casos en estado borrador y vincular los pendientes; no presentarlos como UAT aprobada.

Una HU puede requerir varios casos para escenarios positivos, alternativos y excepciones, pero cada caso debe tener un objetivo y resultado comprobable. No dividir ni ampliar la HU mediante una prueba.

## Derivación desde CA-XX

- Usar solo el resultado observable y las condiciones explícitas del CA.
- Cada caso TC debe verificar al menos un CA existente. No inventar CA para justificar un caso.
- Un CA puede requerir varios TC si las condiciones o excepciones documentadas necesitan verificaciones diferenciadas.
- Un TC puede verificar más de un CA solo si el flujo permite comprobarlos por separado y registrar resultados inequívocos para cada uno; evitar casos demasiado amplios.
- Traducir cada condición del criterio a precondiciones, datos, pasos y resultados esperados, sin cambiar su significado.
- Si el CA es ambiguo, no verificable, contradice la HU o depende de una decisión abierta, registrar el hallazgo y solicitar aclaración; el caso queda borrador/bloqueado según el impacto.
- No interpretar un CA como prueba de que una configuración, integración o permiso ya existe.

## Estructura del caso UAT

Usar la plantilla del repositorio si existe y aplica. En su ausencia, incluir como mínimo:

1. **Identificación**: ID TC-XX estable, título breve, versión/estado del caso y fecha solo si corresponde y está disponible.
2. **Objetivo**: qué comportamiento se verifica y qué queda fuera.
3. **Trazabilidad**: HU, CA-XX y, cuando aplique, RN/fuente relacionados.
4. **Tipo/escenario**: positivo, alternativo, excepción u otra clasificación local; no usar clasificación para inferir severidad.
5. **Precondiciones**: estado requerido del entorno, datos, proceso, dependencias y actor de prueba, con referencias y condiciones de confirmación.
6. **Datos sintéticos**: conjunto de valores ficticios, propósito y limpieza/reutilización esperada, según procedimiento autorizado.
7. **Pasos y resultados esperados**: acciones numeradas, cada una con resultado observable esperado.
8. **Resultado final esperado**: condición que demuestra el CA, expresada sin ambigüedad.
9. **Evidencia**: qué observación permite confirmar el resultado y cómo registrarla sin exponer información sensible.
10. **Resultado de ejecución**: No ejecutado, Aprobado, Fallido, Bloqueado o estado local equivalente; incluir fecha, ejecutor y entorno solo cuando se hayan registrado realmente.
11. **Incidencias y seguimiento**: ID de defecto, descripción, pasos reproducibles, CA afectado, evidencia sanitizada y estado, si existen.
12. **Notas, dependencias y pendientes**: impacto, fuente y condición para continuar.

Campos no conocidos se marcan como pendientes; no completarlos con valores inventados. “No ejecutado” es el estado inicial de un caso preparado.

## Precondiciones

Expresar las condiciones que deben cumplirse antes del primer paso, distinguiendo entre:

- **Entorno**: producto/componente, ambiente UAT y versión/configuración si fueron confirmados por una fuente autorizada. No afirmar disponibilidad o configuración no comprobada.
- **Acceso**: persona de prueba y acceso aprobados/provistos por quienes corresponda; no documentar contraseñas, tokens ni permisos inferidos.
- **Estado inicial**: registros y proceso necesarios, usando identificadores y valores sintéticos.
- **Datos**: datos de prueba creados por un proceso autorizado, sin afectar producción ni usuarios reales.
- **Dependencias**: servicios, integraciones, catálogos o decisiones necesarios y su estado conocido.
- **Aprobación del caso**: HU/CA en estado apto para UAT según el proceso del proyecto.

Cada precondición debe tener forma verificable. Si no puede comprobarse o está pendiente, indicar qué paso queda condicionado y si bloquea la ejecución.

## Datos sintéticos

- Usar únicamente datos ficticios, claramente identificados como sintéticos y con el mínimo detalle necesario para probar el comportamiento.
- No copiar datos de clientes, contactos, cuentas, campañas, actividad o producción; no usar datos personales plausibles que puedan identificar personas reales.
- No incluir contraseñas, tokens, claves, secretos ni instrucciones para obtenerlos. No probar un secreto que aparezca en una fuente; omitirlo y avisar para que se gestione según el proceso de seguridad.
- Mantener consistencia entre pasos y casos cuando los datos se reutilicen; documentar las dependencias de preparación/limpieza sin ejecutar operaciones externas.
- Utilizar valores de catálogo solo si están respaldados por una fuente de prueba autorizada; si no, marcar el catálogo pendiente.
- La etiqueta “sintético” no demuestra por sí sola que el dato sea seguro. Revisar riesgo de identificación y minimización.

## Pasos

- Numerar en orden y describir una acción por paso en lenguaje que la persona UAT pueda seguir.
- Asociar a cada acción el resultado observable esperado, evitando expresiones subjetivas como “funciona correctamente”.
- Usar solo interfaces y acciones dentro del alcance autorizado del caso; no incluir cambios de configuración, operaciones masivas o efectos externos no aprobados.
- No prescribir controles visuales o mecanismos internos salvo que el CA los exija.
- Para ramas alternativas o errores con resultados distintos, crear casos separados cuando mejore la claridad y trazabilidad.
- Registrar resultados reales durante la ejecución, no anticiparlos en la preparación.

## Resultado esperado

El resultado final debe reformular la condición verificable del CA en términos observables: qué estado, dato o comportamiento debe encontrarse y bajo qué condiciones. Debe ser coherente con cada resultado esperado por paso.

No sustituirlo por una acción (“guardar el formulario”) ni por una evaluación subjetiva (“la pantalla se ve bien”). No agregar reglas, valores válidos, permisos o comportamiento que no estén respaldados. Si el CA no permite definir un resultado inequívoco, el caso no está listo para UAT y debe registrarse como pendiente/bloqueante.

## Evidencia

Indicar de antemano el tipo mínimo de evidencia que permitiría revisar el resultado: observación del estado esperado, captura sanitizada, identificador sintético, extracto de auditoría autorizado u otro método aprobado por el equipo.

- No afirmar que existe evidencia antes de ejecutar el caso.
- No adjuntar ni reproducir datos reales o secretos; redactar o anonimizar evidencia antes de compartirla según el procedimiento organizacional.
- No registrar capturas con información sensible innecesaria, tokens, URL privadas o datos de producción.
- Registrar quién ejecutó, cuándo, en qué entorno y qué se observó solo si esos datos se proporcionaron de forma autorizada.
- Si la evidencia está incompleta, inaccesible o no permite demostrar el CA, marcar el resultado como pendiente/bloqueado, no como aprobado.

## Trazabilidad CA → TC

Mantener una relación verificable **fuente/RN → HU → CA-XX → TC-XX**. La relación solicitada para UAT es CA → TC:

- cada TC referencia uno o más CA existentes y vigentes;
- cada CA incluido en el alcance UAT tiene uno o más TC o queda explícitamente reportado sin cobertura;
- conservar IDs únicos y estables, y actualizar referencias si una persona autorizada modifica HU/CA;
- reportar CA sin pruebas, TC sin CA, enlaces inválidos, duplicaciones y casos fuera de alcance;
- no inventar relaciones ni crear casos para ocultar una falta de criterio verificable;
- si el repositorio usa otra convención, respetarla y documentar el mapeo cuando se solicite.

Matriz mínima:

| HU | CA | TC | Escenario | Estado/cobertura |
|---|---|---|---|---|
| [HU-XX] | [CA-XX] | [TC-XX] | [descripción] | [cubierto/pendiente/huérfano] |

## Control estático

Antes de entregar o actualizar un conjunto de casos, realizar los controles pertinentes con medios disponibles y autorizados:

1. **Estructura**: campos requeridos y secciones presentes; placeholders y precondiciones pendientes identificados.
2. **Origen**: HU/CA vigentes y respaldados; pasos y resultados no exceden el criterio; contradicciones visibles.
3. **IDs y enlaces**: HU/CA/TC únicos y válidos; relaciones CA → TC completas o brechas reportadas.
4. **Reproducibilidad**: precondiciones, datos, pasos y resultados suficientes para que otra persona repita el caso.
5. **Datos**: datos sintéticos y minimizados; catálogos y estados provienen de fuente; no hay información sensible o secretos visibles.
6. **Coherencia**: pasos, resultados esperados, evidencia, dependencias, incidencias y estado de ejecución no se contradicen.
7. **Seguridad**: acceso y entorno son requisitos confirmados o precondiciones por validar; no hay permisos ni configuración inferidos.
8. **Ejecución**: distinguir claramente casos preparados de resultados ejecutados y evidencia real.
9. **Aprobación**: revisión estática no equivale a aceptación del usuario ni aprobación de negocio.

Informar controles realizados, resultados, limitaciones y hallazgos. El control estático no demuestra el comportamiento del sistema. No decir que un caso fue ejecutado, aprobado o que se consultó un tenant, si no ocurrió.

## Checklist

- [ ] El objetivo del caso es claro y está dentro del alcance autorizado.
- [ ] El HU y CA fuente existen, tienen estado apto para UAT y están referenciados.
- [ ] El caso verifica el CA sin ampliarlo ni reinterpretarlo.
- [ ] Las precondiciones son concretas, comprobables y no contienen permisos inferidos.
- [ ] Los datos son sintéticos, mínimos y consistentes; no hay datos reales ni secretos.
- [ ] Los pasos están numerados, son reproducibles y cada uno tiene un resultado esperado observable.
- [ ] El resultado final corresponde al CA y permite decidir si se cumple.
- [ ] La evidencia necesaria está definida y su tratamiento evita exponer información sensible.
- [ ] Estado de ejecución, ejecutor, fecha y entorno se informan solo cuando se conocen realmente.
- [ ] La matriz CA → TC no tiene enlaces inválidos ni brechas de cobertura ocultas.
- [ ] Dependencias, pendientes y bloqueantes indican impacto y condición para continuar.
- [ ] La revisión estática y sus limitaciones están informadas; aprobación humana queda separada.

Marcar cada punto como cumplido, pendiente o no aplicable e incluir una nota ante hallazgos. Un checklist completo no equivale a ejecución o aprobación UAT.

## Salida a archivo

Si se solicita generar un archivo:

1. Revisar casos existentes, convención de IDs, plantilla pertinente y destino acordado.
2. Usar la ruta/formato indicados o una convención inequívoca del repositorio. Si no hay destino deducible, preguntar o proponerlo antes de crear.
3. No sobrescribir casos existentes sin una solicitud clara. En una actualización, preservar contenido ajeno, IDs, enlaces e historial aplicable.
4. Modificar solo los artefactos solicitados y autorizados. No acceder ni operar en Dynamics u otros servicios externos como parte de la preparación.
5. Marcar nuevos casos como “No ejecutado” y borrador/pendiente de revisión; no inventar evidencia, resultados, ejecutores o fechas.
6. Informar rutas, fuentes, estado, controles estáticos, limitaciones, cobertura y bloqueantes.

Si no se pidió archivo, entregar los casos en la conversación. No afirmar que se usó una plantilla, entorno o herramienta que no se consultó.

## Ejemplo completo

Este ejemplo usa únicamente datos ficticios y es ilustrativo. La fuente, HU y CA que aparecen son simuladas; no representan requisitos, aprobación ni configuración reales.

### Fuente y criterio

- Documento: `DF-EJ-01`, borrador ficticio.
- HU: `HU-01`, registrar el resultado de seguimiento de una consulta.
- CA-01: “Dada una consulta sintética con un seguimiento realizado, cuando se registra el resultado del seguimiento, entonces la información funcional permite identificar el resultado asociado a ese seguimiento”.
- Para este ejemplo ficticio, el catálogo de pruebas aprobado incluye el valor `Contactada`. Esto no supone un catálogo real de Dynamics.

### Caso UAT TC-01: registrar resultado de seguimiento

**Estado**: preparado, no ejecutado.

**Objetivo**: comprobar que el resultado de un seguimiento pueda identificarse en la información funcional de la consulta.

**Trazabilidad**: `HU-01` → `CA-01` → `TC-01`; criterio derivado del documento ficticio `DF-EJ-01`.

**Tipo**: escenario positivo.

**Precondiciones**:

1. La persona ejecutora cuenta con acceso autorizado al entorno UAT; el acceso lo confirma el proceso responsable y no se registra ninguna credencial en el caso.
2. El entorno y el flujo funcional correspondiente están disponibles para la sesión UAT, condición a confirmar antes de ejecutar.
3. Existe una consulta ficticia identificada como `SYN-CONSULTA-001` y un seguimiento de prueba listo para registrar.
4. El valor sintético `Contactada` está incluido en el catálogo de prueba aprobado para este ejemplo.
5. `HU-01` y `CA-01` fueron aprobados en el escenario ficticio; la skill no afirma aprobación real.

**Datos sintéticos**:

| Dato | Valor | Uso |
|---|---|---|
| Identificador de consulta | `SYN-CONSULTA-001` | Localizar el registro ficticio |
| Resultado de seguimiento | `Contactada` | Valor ficticio del catálogo de prueba del ejemplo |

**Pasos y resultados esperados**:

| Paso | Acción | Resultado esperado |
|---|---|---|
| 1 | Localizar la consulta sintética `SYN-CONSULTA-001` en el entorno UAT autorizado. | Se identifica la consulta ficticia prevista para la prueba, sin acceder a registros reales. |
| 2 | Registrar el resultado `Contactada` para el seguimiento de prueba, según el flujo disponible y aprobado para UAT. | La acción se completa o el entorno presenta un resultado observable que permite continuar; cualquier diferencia se registra, no se presupone. |
| 3 | Volver a consultar la información funcional asociada al seguimiento. | Se puede identificar `Contactada` como resultado del seguimiento de `SYN-CONSULTA-001`. |

**Resultado final esperado**: el resultado `Contactada` queda identificable y asociado al seguimiento de la consulta sintética `SYN-CONSULTA-001`, en correspondencia con `CA-01`.

**Evidencia prevista**: observación registrada por la persona ejecutora y, si el procedimiento lo permite, captura sanitizada donde solo aparezcan el identificador sintético y el resultado. No se adjunta evidencia en este ejemplo porque el caso no fue ejecutado.

**Resultado de ejecución**: No ejecutado.

**Incidencias**: ninguna registrada; no implica que la prueba haya pasado.

**Dependencias/pendientes**: confirmar disponibilidad del entorno, acceso autorizado, datos de prueba y catálogo antes de ejecutar. Si cualquiera falta, registrar bloqueante para la ejecución de este TC.

**Trazabilidad CA → TC**:

| HU | CA | TC | Escenario | Estado/cobertura |
|---|---|---|---|---|
| HU-01 | CA-01 | TC-01 | Registrar e identificar el resultado de un seguimiento sintético | Cubierto en preparación; ejecución pendiente |

**Revisión estática ilustrativa**: referencias existentes dentro del ejemplo; precondiciones, pasos, resultados y evidencia prevista presentes; datos sintéticos; no se incluyen credenciales; estado “No ejecutado”. No se consultó ni probó un tenant. La aprobación UAT depende de una ejecución real y revisión humana autorizada.
