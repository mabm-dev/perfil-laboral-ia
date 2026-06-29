# PerfilLaboralIA

PerfilLaboralIA es una aplicacion web para ayudar a personas a mejorar su perfil laboral con inteligencia artificial.

La primera version permitira subir un CV, pegar una oferta de trabajo y recibir un analisis de compatibilidad con recomendaciones concretas para mejorar la candidatura.

## Objetivo del MVP

Crear una primera version funcional donde el usuario pueda:

- Registrarse e iniciar sesion.
- Subir su CV en PDF.
- Pegar una oferta de trabajo.
- Obtener un porcentaje de compatibilidad.
- Ver habilidades detectadas.
- Ver habilidades faltantes.
- Recibir recomendaciones para mejorar su CV.
- Guardar candidaturas para hacer seguimiento.

## Tecnologias

- React: interfaz de usuario.
- Laravel 13: API principal, usuarios, autenticacion y logica de negocio.
- Python: lectura de PDF, extraccion de texto y analisis inicial con IA.
- Node.js: notificaciones en tiempo real en una fase posterior.
- PostgreSQL: base de datos principal.
- Redis: colas, cache y procesos en segundo plano.
- Docker: entorno de desarrollo reproducible.
- GitHub Actions: pruebas automaticas en una fase posterior.

## Estructura

```text
perfil-laboral-ia/
  frontend/       Aplicacion React
  backend/        API Laravel
  ai-service/     Servicio Python para analisis de CV
  realtime/       Servicio Node.js para tiempo real
  docker/         Configuracion auxiliar de Docker
  docs/           Documentacion del proyecto
```

## Arquitectura

```text
React
  |
  v
Laravel API
  |
  +--> PostgreSQL
  +--> Redis
  +--> Python AI Service
  +--> Node.js Realtime Service
```

## Primer flujo importante

```text
Usuario -> sube CV -> pega oferta -> PerfilLaboralIA analiza -> muestra resultado
```

## Estado actual

Proyecto en fase inicial de planificacion y preparacion de estructura.
