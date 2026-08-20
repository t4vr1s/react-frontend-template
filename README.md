# react-frontend-template

Proyecto base frontend con React, Vite y TypeScript, preparado para usar Bun como administrador de librerías.

## Estructura inicial

```text
src/
├── components/
├── context/
├── hooks/
├── layouts/
├── pages/
├── services/
└── utils/
```

La plantilla incluye:

- Configuración de Vite + React + TypeScript
- Rutas iniciales con `react-router-dom`
- `MainLayout` como layout principal
- Página `Home`
- Componente reutilizable `HelloWorld`

## Requisitos

- [Bun](https://bun.sh/)

## Instalación

```bash
bun install
```

## Scripts disponibles

```bash
bun run dev
bun run build
bun run preview
bun run lint
```

## Ejecutar en desarrollo

```bash
bun run dev
```

Luego abre la URL que muestre Vite en la terminal, normalmente `http://localhost:5173`.
