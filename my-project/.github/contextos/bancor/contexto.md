# Contexto de cliente: Bancor

## Activación

Cargar este contexto únicamente cuando la persona indique que el pedido corresponde a Bancor o una fuente autorizada identifique ese cliente. No inferirlo por el directorio, una tecnología, ejemplos vecinos o la presencia de una skill CRM. Para cualquier otro cliente de Wemox, trabajar con `AGENTS.md` y el contexto autorizado de ese cliente, sin aplicar este archivo.

## Relación con el núcleo AFU

`AGENTS.md` contiene las políticas y la metodología transversal: análisis funcional, documentación, historias de usuario, criterios de aceptación, UAT, validación, trazabilidad, seguridad y aprobación humana. Este perfil solo agrega el contexto de producto y cliente. Ante una contradicción, no elegir silenciosamente: informar las fuentes y pedir resolución; las reglas de seguridad y autoridad del núcleo siempre prevalecen.

## Separación de responsabilidades

| Núcleo general de AFU | Contexto de Bancor |
|---|---|
| Metodología de análisis funcional | Módulos de Dynamics 365 usados por Bancor |
| Estructura de historias de usuario | Procesos y particularidades del CRM de Bancor |
| Criterios de aceptación | Reglas de negocio propias del cliente |
| Casos de prueba UAT | Documentación funcional específica de Bancor |
| Validación de requerimientos y trazabilidad | Configuraciones, personalizaciones e integraciones de Bancor |
| Buenas prácticas de documentación | Evidencia y decisiones particulares del cliente |

## Dominio de producto

El contexto Bancor de este workspace incluye conocimiento especializado relacionado con:

- Microsoft Dynamics 365 Sales;
- Customer Insights - Data y Customer Insights - Journeys, cuando el alcance específico lo confirme;
- módulos, procesos y reglas funcionales del CRM de Bancor;
- configuraciones, personalizaciones e integraciones propias del cliente;
- documentación, historias, requisitos y decisiones específicas de Bancor.

La mención de un producto o módulo no confirma que esté licenciado, habilitado, integrado o configurado en un ambiente. Separar siempre la funcionalidad general del producto de la configuración de Bancor y respaldar las afirmaciones locales con fuentes identificables.

## Fuentes y límites

- Priorizar las fuentes de Bancor compartidas o autorizadas para el pedido: documentación funcional, procesos aprobados, reglas, historias, criterios de aceptación, decisiones e inventarios vigentes.
- Registrar nombre, ubicación, fecha/versión y estado de validación cuando estén disponibles. Si dos fuentes difieren, indicar ambas y su impacto.
- No completar vacíos con conocimiento general de Dynamics, Customer Insights, CRM o prácticas de otros clientes.
- No inventar entidades, campos, módulos, roles, permisos, capacidades habilitadas, configuraciones, integraciones, políticas, responsables ni aprobaciones.
- Tratar reglas o configuraciones sin fuente suficiente como pendientes de confirmación, no como hechos de Bancor.
- Usar únicamente datos sintéticos en ejemplos y pruebas; no copiar datos personales, productivos, secretos ni credenciales.

## Skills especializadas disponibles

Usar solo cuando el pedido esté en contexto Bancor y la tarea corresponda. Leer el archivo antes de aplicar su procedimiento:

- Preparación de relevamiento CRM: `.github/skills/preparacion-relevamiento-crm/SKILL.md`.
- Documento funcional CRM: `.github/skills/relevamiento-documento-funcional-crm/SKILL.md`.
- Historias de usuario CRM: `.github/skills/confeccion-historias-usuario-crm/SKILL.md`.
- Pruebas UAT CRM: `.github/skills/casos-prueba-uat-crm/SKILL.md`.
- Reglas y journeys de Sales: `.github/skills/reglas-sales-journeys-crm/SKILL.md`.
- Módulos D365: `.github/skills/modulos-d365-crm/SKILL.md`.

Estas skills preservan metodologías reutilizables y referencias de producto. No son evidencia de la configuración particular del cliente ni sustituyen fuentes aprobadas de Bancor.
