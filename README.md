# Semillero Pixel 🎨

Proyecto web construido con Astro y TailwindCSS para el semillero de desarrollo web.

## 📋 Descripción

Este proyecto es una aplicación web moderna que utiliza Astro como framework principal, junto con TailwindCSS para los estilos. Incluye características como carruseles de imágenes (usando Embla Carousel) y resaltado de código (usando Highlight.js).

## 🚀 Estructura del Proyecto

```
semillero_pixel/
├── src/
│   ├── assets/        # Recursos estáticos (imágenes, etc)
│   ├── components/    # Componentes reutilizables
│   ├── layouts/       # Plantillas de página
│   ├── lib/          # Utilidades y funciones auxiliares
│   ├── pages/        # Páginas de la aplicación
│   ├── sections/     # Secciones de página
│   ├── share_components/ # Componentes compartidos
│   └── styles/       # Estilos globales
├── public/           # Archivos públicos
└── astro.config.mjs  # Configuración de Astro
```

## 🛠️ Tecnologías Principales

- **Astro** - Framework web
- **TailwindCSS** - Framework de CSS
- **Embla Carousel** - Para carruseles
- **Highlight.js** - Resaltado de código

## ⚙️ Instalación Local

1. Clona el repositorio:

   ```bash
   git clone https://github.com/igrisdev/semillero_pixel.git
   cd semillero_pixel
   ```

2. Instala las dependencias:

   ```bash
   npm install
   # o
   bun install
   ```

3. Crea un archivo `.env.local` con las variables de entorno necesarias

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   # o
   bun dev
   ```

5. Abre [http://localhost:4321](http://localhost:4321) en tu navegador

## 📦 Scripts Disponibles

- `dev` - Inicia el servidor de desarrollo
- `build` - Construye el proyecto para producción
- `preview` - Previsualiza la build de producción localmente

## 🔧 Configuración

El proyecto utiliza varias herramientas de desarrollo:

- **Prettier** - Para formateo de código
- **TailwindCSS Typography** - Para estilos de contenido

## 🌐 Despliegue

Desplegada en Vercel ver URL en descripción
