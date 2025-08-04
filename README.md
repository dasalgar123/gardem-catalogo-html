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
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidad JavaScript
├── img/               # Imágenes de productos
│   ├── Caballeros/
│   ├── Damas/
│   ├── Niños/
│   ├── Niñas/
│   └── Unixes/
└── README.md          # Este archivo
```

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript Vanilla
- WhatsApp API para pedidos

## Instalación

1. Clona el repositorio
2. Abre `index.html` en tu navegador
3. ¡Listo para usar!

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