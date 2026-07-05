# PerfilLaboralIA

PerfilLaboralIA es una aplicacion web para ayudar a personas a mejorar su perfil laboral con inteligencia artificial.

La primera version permitira subir un CV, pegar una oferta de trabajo y recibir un analisis de compatibilidad con recomendaciones concretas para mejorar la candidatura.

PerfilLaboralIA esta disenado como el primer modulo de una plataforma de herramientas de carrera profesional que compartiran backend y servicio de IA.

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

- Entorno de desarrollo con Docker (PostgreSQL 16 y Redis 7).
- API REST versionada (/api/v1) con Laravel 13.
- Autenticacion completa con tokens (Laravel Sanctum): registro, login y rutas protegidas.
- Frontend React con Vite: formularios, navegacion SPA y area privada conectada a la API.
- Modelos de datos del nucleo: CV, oferta y analisis, con sus relaciones.

## Puesta en marcha

Requisitos: Docker, PHP 8.5+, Composer, Node 24+.

1. Clonar el repositorio y copiar la configuracion:
   - `cp .env.example .env`
   - `cp backend/.env.example backend/.env`
   - Rellenar las contrasenas en ambos archivos.
2. Levantar la infraestructura: `docker compose up -d`
3. Backend: `cd backend && composer install && php artisan migrate && php artisan serve`
4. Frontend: `cd frontend && npm install && npm run dev`
5. Abrir http://localhost:5173