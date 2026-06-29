# Primeros pasos

Esta guia marca el orden recomendado para empezar sin perderse.

## Paso 1: comprobar herramientas

Comprobar que el equipo tiene instalados:

```bash
docker --version
node --version
php --version
composer --version
python --version
git --version
```

## Paso 2: crear la aplicacion React

La carpeta sera:

```text
frontend/
```

## Paso 3: crear la API Laravel

La carpeta sera:

```text
backend/
```

## Paso 4: crear el servicio Python

La carpeta sera:

```text
ai-service/
```

## Paso 5: conectar todo con Docker

La meta sera levantar el proyecto con:

```bash
docker compose up -d
```

## Primer objetivo funcional

Antes de anadir muchas funciones, construiremos este recorrido:

```text
Subir CV -> pegar oferta -> analizar compatibilidad -> mostrar recomendaciones
```

