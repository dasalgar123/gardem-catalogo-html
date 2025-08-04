# GARDEM Catálogo HTML

Catálogo de ropa interior GARDEM desarrollado en HTML, CSS y JavaScript.

## Características

- Catálogo de productos organizado por categorías
- Filtros por categoría (Caballeros, Damas, Niños, Niñas, Unisex)
- Búsqueda de productos
- Carrito de compras funcional
- Integración con WhatsApp para pedidos
- Diseño responsive

## Estructura del Proyecto

```
html-catalogo/
├── index.html              # Página principal (para local/Netlify)
├── index-github.html       # Página para GitHub (con URLs completas)
├── styles.css              # Estilos CSS
├── script.js               # Funcionalidad JavaScript (rutas relativas)
├── script-github.js        # Funcionalidad JavaScript (URLs GitHub)
├── img/                   # Imágenes de productos
│   ├── Caballeros/
│   ├── Damas/
│   ├── Niños/
│   ├── Niñas/
│   └── Unixes/
├── netlify.toml           # Configuración para Netlify
├── .gitignore             # Archivos a ignorar en Git
└── README.md              # Este archivo
```

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript Vanilla
- WhatsApp API para pedidos

## Instalación

### Para uso local o Netlify:
1. Clona el repositorio
2. Abre `index.html` en tu navegador
3. ¡Listo para usar!

### Para GitHub Pages:
1. Abre `index-github.html` directamente desde GitHub
2. Las imágenes se cargarán desde GitHub Raw
3. Funciona sin servidor web

## Despliegue en Netlify

1. Conecta tu repositorio de GitHub a Netlify
2. Las imágenes deben estar en la carpeta `img/` con la estructura:
   ```
   img/
   ├── Caballeros/
   ├── Damas/
   ├── Niños/
   ├── Niñas/
   └── Unixes/
   ```
3. Netlify automáticamente servirá los archivos estáticos

## Funcionalidades

- **Filtros**: Filtra productos por categoría
- **Búsqueda**: Busca productos por nombre, descripción o color
- **Carrito**: Agrega productos al carrito con talla y color
- **Pedidos**: Envía pedidos directamente a WhatsApp
- **Responsive**: Diseño adaptativo para móviles y desktop 