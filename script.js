// Datos de productos con nombres más interesantes
const productos = [
    {
        id: 1,
        nombre: "Boxer Caballero Clásico",
        descripcion: "Boxer de algodón clásico para caballero",
        precio: 5000,
        categoria: "caballero",
        imagen: "img/Caballeros/boxer1_1.jpeg",
        colores: ["Azul", "Rojo", "Verde", "Negro"]
    },
    {
        id: 2,
        nombre: "Boxer Caballero Deportivo",
        descripcion: "Boxer deportivo para caballero",
        precio: 5000,
        categoria: "caballero",
        imagen: "img/Caballeros/boxer1_2.jpeg",
        colores: ["Azul", "Rojo", "Verde", "Negro"]
    },
    {
        id: 3,
        nombre: "Boxer Caballero Premium",
        descripcion: "Boxer premium para caballero",
        precio: 5000,
        categoria: "caballero",
        imagen: "img/Caballeros/boxer1_3.jpeg",
        colores: ["Azul", "Rojo", "Verde", "Negro"]
    },
    {
        id: 4,
        nombre: "Boxer Caballero Sin Costura",
        descripcion: "Boxer sin costura para caballero",
        precio: 5000,
        categoria: "caballero",
        imagen: "img/Caballeros/boxer1_4.jpeg",
        colores: ["Azul", "Rojo", "Verde", "Negro"]
    },
    {
        id: 5,
        nombre: "Boxer Caballero Microfibra",
        descripcion: "Boxer de microfibra deportivo",
        precio: 5000,
        categoria: "caballero",
        imagen: "img/Caballeros/boxer1_5.jpeg",
        colores: ["Azul", "Rojo", "Verde", "Negro"]
    },
    {
        id: 6,
        nombre: "Boxer Caballero Mezcla Stretch",
        descripcion: "Boxer con mezcla stretch",
        precio: 5000,
        categoria: "caballero",
        imagen: "img/Caballeros/boxer1_6.jpeg",
        colores: ["Azul", "Rojo", "Verde", "Negro"]
    },
    {
        id: 7,
        nombre: "Boxer Caballero Compresión",
        descripcion: "Boxer con compresión ligera",
        precio: 5000,
        categoria: "caballero",
        imagen: "img/Caballeros/boxer1_7.jpeg",
        colores: ["Azul", "Rojo", "Verde", "Negro"]
    },
    {
        id: 8,
        nombre: "Boxer Caballero Algodón Premium",
        descripcion: "Boxer de algodón premium",
        precio: 5000,
        categoria: "caballero",
        imagen: "img/Caballeros/boxer1_8.jpeg",
        colores: ["Azul", "Rojo", "Verde", "Negro"]
    },
    {
        id: 9,
        nombre: "Boxer Caballero Calvin Klein",
        descripcion: "Boxer Calvin Klein original",
        precio: 5000,
        categoria: "caballero",
        imagen: "img/Caballeros/calvin-klein-4634-5882962-1-catalog-new.webp",
        colores: ["Azul", "Rojo", "Verde", "Negro"]
    },
    {
        id: 10,
        nombre: "Boxer Caballero Modern Air",
        descripcion: "Boxer Modern Air Calvin Klein",
        precio: 5000,
        categoria: "caballero",
        imagen: "img/Caballeros/calvin-klein-5239-4624962-1-catalog-new.webp",
        colores: ["Azul", "Rojo", "Verde", "Negro"]
    },
    {
        id: 11,
        nombre: "Boxer Caballero Algodón Clásico",
        descripcion: "Boxer de algodón clásico",
        precio: 5000,
        categoria: "caballero",
        imagen: "img/Caballeros/boxer2_1.jpeg",
        colores: ["Azul", "Rojo", "Verde", "Negro"]
    },
    {
        id: 12,
        nombre: "Boxer Caballero Algodón Premium 2",
        descripcion: "Boxer de algodón premium especial",
        precio: 5000,
        categoria: "caballero",
        imagen: "img/Caballeros/boxer4_1.jpeg",
        colores: ["Azul", "Rojo", "Verde", "Negro"]
    },
    {
        id: 13,
        nombre: "Boxer Caballero Mezcla Stretch 2",
        descripcion: "Boxer con mezcla stretch especial",
        precio: 5000,
        categoria: "caballero",
        imagen: "img/Caballeros/boxer5_1.jpeg",
        colores: ["Azul", "Rojo", "Verde", "Negro"]
    },
    {
        id: 14,
        nombre: "Boxer Caballero Compresión 2",
        descripcion: "Boxer con compresión especial",
        precio: 5000,
        categoria: "caballero",
        imagen: "img/Caballeros/boxer6_1.jpg",
        colores: ["Azul", "Rojo", "Verde", "Negro"]
    },
    {
        id: 15,
        nombre: "Conjunto Dama Deportivo",
        descripcion: "Conjunto deportivo para dama",
        precio: 35000,
        categoria: "dama",
        imagen: "img/Damas/damas1.jpg",
        colores: ["Rosa", "Negro", "Azul", "Blanco"]
    },
    {
        id: 16,
        nombre: "Conjunto Dama Elegante",
        descripcion: "Conjunto elegante para dama",
        precio: 38000,
        categoria: "dama",
        imagen: "img/Damas/damas2.jpg",
        colores: ["Rosa", "Negro", "Azul", "Blanco"]
    },
    {
        id: 17,
        nombre: "Conjunto Dama Casual",
        descripcion: "Conjunto casual para dama",
        precio: 32000,
        categoria: "dama",
        imagen: "img/Damas/damas3.jpeg",
        colores: ["Rosa", "Negro", "Azul", "Blanco"]
    },
    {
        id: 18,
        nombre: "Conjunto Dama Premium",
        descripcion: "Conjunto premium para dama",
        precio: 28000,
        categoria: "dama",
        imagen: "img/Damas/damas4.jpeg",
        colores: ["Rosa", "Negro", "Azul", "Blanco"]
    },
    {
        id: 19,
        nombre: "Conjunto Dama Deportivo 2",
        descripcion: "Conjunto deportivo premium",
        precio: 28000,
        categoria: "dama",
        imagen: "img/Damas/damas5.jpeg",
        colores: ["Rosa", "Negro", "Azul", "Blanco"]
    },
    {
        id: 20,
        nombre: "Conjunto Dama Elegante 2",
        descripcion: "Conjunto elegante premium",
        precio: 5000,
        categoria: "dama",
        imagen: "img/Damas/damas6.jpeg",
        colores: ["Rosa", "Negro", "Azul", "Blanco"]
    },
    {
        id: 21,
        nombre: "Conjunto Dama Casual 2",
        descripcion: "Conjunto casual premium",
        precio: 5000,
        categoria: "dama",
        imagen: "img/Damas/damas7.jpeg",
        colores: ["Rosa", "Negro", "Azul", "Blanco"]
    },
    {
        id: 22,
        nombre: "Boxer Niño Deportivo",
        descripcion: "Boxer deportivo para niños",
        precio: 5000,
        categoria: "nino",
        imagen: "img/Niños/boxer3_1.jpeg",
        colores: ["Azul", "Rojo", "Verde", "Negro"]
    },
    {
        id: 23,
        nombre: "Boxer Niño Clásico",
        descripcion: "Boxer clásico para niños",
        precio: 5000,
        categoria: "nino",
        imagen: "img/Niños/boxer3_2.jpeg",
        colores: ["Azul", "Rojo", "Verde", "Negro"]
    },
    {
        id: 24,
        nombre: "Boxer Niño Premium",
        descripcion: "Boxer premium para niños",
        precio: 5000,
        categoria: "nino",
        imagen: "img/Niños/boxer3_3.jpeg",
        colores: ["Azul", "Rojo", "Verde", "Negro"]
    },
    {
        id: 25,
        nombre: "Boxer Niño Microfibra",
        descripcion: "Boxer de microfibra para niños",
        precio: 5000,
        categoria: "nino",
        imagen: "img/Niños/boxer3_4.jpeg",
        colores: ["Azul", "Rojo", "Verde", "Negro"]
    },
    {
        id: 26,
        nombre: "Boxer Niño Stretch",
        descripcion: "Boxer con stretch para niños",
        precio: 25000,
        categoria: "nino",
        imagen: "img/Niños/boxer3_5.jpeg",
        colores: ["Azul", "Rojo", "Verde", "Negro"]
    },
    {
        id: 27,
        nombre: "Boxer Niño Compresión",
        descripcion: "Boxer con compresión para niños",
        precio: 5000,
        categoria: "nino",
        imagen: "img/Niños/boxer3_6.jpeg",
        colores: ["Azul", "Rojo", "Verde", "Negro"]
    },
    {
        id: 28,
        nombre: "Boxer Niño Algodón",
        descripcion: "Boxer de algodón para niños",
        precio: 5000,
        categoria: "nino",
        imagen: "img/Niños/boxer3_7.jpeg",
        colores: ["Azul", "Rojo", "Verde", "Negro"]
    },
    {
        id: 29,
        nombre: "Boxer Niño Premium 2",
        descripcion: "Boxer premium especial para niños",
        precio: 5000,
        categoria: "nino",
        imagen: "img/Niños/boxer3_8.jpeg",
        colores: ["Azul", "Rojo", "Verde", "Negro"]
    },
    {
        id: 30,
        nombre: "Boxer Niño Mezcla",
        descripcion: "Boxer con mezcla para niños",
        precio: 5000,
        categoria: "nino",
        imagen: "img/Niños/boxer5_1.jpeg",
        colores: ["Azul", "Rojo", "Verde", "Negro"]
    },
    {
        id: 31,
        nombre: "Boxer Niño Deportivo 2",
        descripcion: "Boxer deportivo especial para niños",
        precio: 5000,
        categoria: "nino",
        imagen: "img/Niños/boxer5_2.jpeg",
        colores: ["Azul", "Rojo", "Verde", "Negro"]
    },
    {
        id: 32,
        nombre: "Boxer Niño Clásico 2",
        descripcion: "Boxer clásico especial para niños",
        precio: 5000,
        categoria: "nino",
        imagen: "img/Niños/boxer5_3.jpeg",
        colores: ["Azul", "Rojo", "Verde", "Negro"]
    },
    {
        id: 33,
        nombre: "Boxer Niño Premium 3",
        descripcion: "Boxer premium especial para niños",
        precio: 5000,
        categoria: "nino",
        imagen: "img/Niños/boxer5_4.jpeg",
        colores: ["Azul", "Rojo", "Verde", "Negro"]
    },
    {
        id: 34,
        nombre: "Boxer Niño Microfibra 2",
        descripcion: "Boxer de microfibra especial",
        precio: 5000,
        categoria: "nino",
        imagen: "img/Niños/boxer5_5.jpeg",
        colores: ["Azul", "Rojo", "Verde", "Negro"]
    },
    {
        id: 35,
        nombre: "Boxer Niño Stretch 2",
        descripcion: "Boxer con stretch especial",
        precio: 5000,
        categoria: "nino",
        imagen: "img/Niños/boxer5_6.jpeg",
        colores: ["Azul", "Rojo", "Verde", "Negro"]
    },
    {
        id: 36,
        nombre: "Boxer Niño Compresión 2",
        descripcion: "Boxer con compresión especial",
        precio: 5000,
        categoria: "nino",
        imagen: "img/Niños/boxer5_7.jpeg",
        colores: ["Azul", "Rojo", "Verde", "Negro"]
    },
    {
        id: 37,
        nombre: "Boxer Niño Algodón 2",
        descripcion: "Boxer de algodón especial",
        precio: 5000,
        categoria: "nino",
        imagen: "img/Niños/boxer5_8.jpeg",
        colores: ["Azul", "Rojo", "Verde", "Negro"]
    },
    {
        id: 38,
        nombre: "Conjunto Niña Deportivo",
        descripcion: "Conjunto deportivo para niñas",
        precio: 5000,
        categoria: "ninas",
        imagen: "img/Niñas/nina2.jpg",
        colores: ["Rosa", "Negro", "Azul", "Blanco"]
    },
    {
        id: 39,
        nombre: "Conjunto Niña Elegante",
        descripcion: "Conjunto elegante para niñas",
        precio: 5000,
        categoria: "ninas",
        imagen: "img/Niñas/niña1.jpg",
        colores: ["Rosa", "Negro", "Azul", "Blanco"]
    },
    {
        id: 40,
        nombre: "Conjunto Niña Casual",
        descripcion: "Conjunto casual para niñas",
        precio: 5000,
        categoria: "ninas",
        imagen: "img/Niñas/niña3.jpeg",
        colores: ["Rosa", "Negro", "Azul", "Blanco"]
    },
    {
        id: 41,
        nombre: "Conjunto Niña Premium",
        descripcion: "Conjunto premium para niñas",
        precio: 5000,
        categoria: "ninas",
        imagen: "img/Niñas/niña4.jpeg",
        colores: ["Rosa", "Negro", "Azul", "Blanco"]
    },
    {
        id: 42,
        nombre: "Conjunto Niña Deportivo 2",
        descripcion: "Conjunto deportivo especial para niñas",
        precio: 5000,
        categoria: "ninas",
        imagen: "img/Niñas/niña5.jpeg",
        colores: ["Rosa", "Negro", "Azul", "Blanco"]
    },
    {
        id: 43,
        nombre: "Conjunto Niña Elegante 2",
        descripcion: "Conjunto elegante especial para niñas",
        precio: 5000,
        categoria: "ninas",
        imagen: "img/Niñas/niña6.jpg",
        colores: ["Rosa", "Negro", "Azul", "Blanco"]
    },
    {
        id: 44,
        nombre: "Conjunto Niña Casual 2",
        descripcion: "Conjunto casual especial para niñas",
        precio: 5000,
        categoria: "ninas",
        imagen: "img/Niñas/niña7.jpeg",
        colores: ["Rosa", "Negro", "Azul", "Blanco"]
    },
    {
        id: 45,
        nombre: "Conjunto Niña Premium 2",
        descripcion: "Conjunto premium especial para niñas",
        precio: 5000,
        categoria: "ninas",
        imagen: "img/Niñas/niña8.jpeg",
        colores: ["Rosa", "Negro", "Azul", "Blanco"]
    },
    {
        id: 46,
        nombre: "Conjunto Niña Deportivo 3",
        descripcion: "Conjunto deportivo premium para niñas",
        precio: 5000,
        categoria: "ninas",
        imagen: "img/Niñas/niña9.jpg",
        colores: ["Rosa", "Negro", "Azul", "Blanco"]
    },
    {
        id: 47,
        nombre: "Conjunto Niña Elegante 3",
        descripcion: "Conjunto elegante premium para niñas",
        precio: 5000,
        categoria: "ninas",
        imagen: "img/Niñas/niña10.jpg",
        colores: ["Rosa", "Negro", "Azul", "Blanco"]
    },
    {
        id: 48,
        nombre: "Conjunto Niña Casual 3",
        descripcion: "Conjunto casual premium para niñas",
        precio: 5000,
        categoria: "ninas",
        imagen: "img/Niñas/niña11.jpg",
        colores: ["Rosa", "Negro", "Azul", "Blanco"]
    },
    {
        id: 49,
        nombre: "Conjunto Niña Premium 3",
        descripcion: "Conjunto premium especial para niñas",
        precio: 5000,
        categoria: "ninas",
        imagen: "img/Niñas/niña12.jpg",
        colores: ["Rosa", "Negro", "Azul", "Blanco"]
    },
    {
        id: 50,
        nombre: "Conjunto Niña Deportivo 4",
        descripcion: "Conjunto deportivo exclusivo para niñas",
        precio: 5000,
        categoria: "ninas",
        imagen: "img/Niñas/niña13.jpg",
        colores: ["Rosa", "Negro", "Azul", "Blanco"]
    },
    {
        id: 51,
        nombre: "Conjunto Niña Elegante 4",
        descripcion: "Conjunto elegante exclusivo para niñas",
        precio: 5000,
        categoria: "ninas",
        imagen: "img/Niñas/niña14.jpg",
        colores: ["Rosa", "Negro", "Azul", "Blanco"]
    },
    {
        id: 52,
        nombre: "Boxer Unisex Deportivo",
        descripcion: "Boxer deportivo unisex",
        precio: 5000,
        categoria: "unisex",
        imagen: "img/Unixes/boxer6_1.jpg",
        colores: ["Azul", "Rojo", "Verde", "Negro"]
    },
    {
        id: 53,
        nombre: "Boxer Unisex Cómodo",
        descripcion: "Boxer cómodo unisex",
        precio: 5000,
        categoria: "unisex",
        imagen: "img/Unixes/boxer6_2.jpg",
        colores: ["Azul", "Rojo", "Verde", "Negro"]
    },
    {
        id: 54,
        nombre: "Boxer Unisex Clásico",
        descripcion: "Boxer clásico unisex",
        precio: 5000,
        categoria: "unisex",
        imagen: "img/Unixes/boxer6_3.jpg",
        colores: ["Azul", "Rojo", "Verde", "Negro"]
    },
    {
        id: 55,
        nombre: "Boxer Unisex Premium",
        descripcion: "Boxer premium unisex",
        precio: 5000,
        categoria: "unisex",
        imagen: "img/Unixes/boxer6_4.jpg",
        colores: ["Azul", "Rojo", "Verde", "Negro"]
    },
    {
        id: 56,
        nombre: "Boxer Unisex Microfibra",
        descripcion: "Boxer de microfibra unisex",
        precio: 5000,
        categoria: "unisex",
        imagen: "img/Unixes/boxer6_5.jpg",
        colores: ["Azul", "Rojo", "Verde", "Negro"]
    },
    {
        id: 57,
        nombre: "Boxer Unisex Stretch",
        descripcion: "Boxer con stretch unisex",
        precio: 5000,
        categoria: "unisex",
        imagen: "img/Unixes/boxer6_6.jpg",
        colores: ["Azul", "Rojo", "Verde", "Negro"]
    },
    {
        id: 58,
        nombre: "Boxer Unisex Compresión",
        descripcion: "Boxer con compresión unisex",
        precio: 5000,
        categoria: "unisex",
        imagen: "img/Unixes/boxer6_7.jpg",
        colores: ["Azul", "Rojo", "Verde", "Negro"]
    },
    {
        id: 59,
        nombre: "Boxer Unisex Algodón",
        descripcion: "Boxer de algodón unisex",
        precio: 5000,
        categoria: "unisex",
        imagen: "img/Unixes/boxer6_8.jpg",
        colores: ["Azul", "Rojo", "Verde", "Negro"]
    }
];

// Variables globales
let carrito = [];
let filtroCategoria = 'todos';
let searchTerm = '';

// Promociones
const promociones = [
    "¡Envíos gratis a todo el país! ",
    "Docena de boxers por $74.000 ",
    "Aprovecha nuestras promociones! "
];

let promocionActual = 0;

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', function() {
    cargarProductos();
    iniciarCarruselPromociones();
});

// Función para cargar productos
function cargarProductos() {
    const productosGrid = document.getElementById('productosGrid');
    productosGrid.innerHTML = '';
    
    const productosFiltrados = productos.filter(producto => {
        const categoriaMatch = filtroCategoria === 'todos' || producto.categoria === filtroCategoria;
        const searchMatch = searchTerm === '' || 
            producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            producto.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
            producto.colores.some(color => color.toLowerCase().includes(searchTerm.toLowerCase()));
        
        return categoriaMatch && searchMatch;
    });
    
    productosFiltrados.forEach(producto => {
        const productoCard = crearTarjetaProducto(producto);
        productosGrid.appendChild(productoCard);
    });
}

// Función para crear tarjeta de producto
function crearTarjetaProducto(producto) {
    const card = document.createElement('div');
    card.className = 'producto-card';
    
    card.innerHTML = `
        <div class="producto-imagen">
            <img src="${producto.imagen}" alt="${producto.nombre}" onerror="this.src='https://via.placeholder.com/300x300?text=Imagen+No+Disponible'">
        </div>
        <div class="producto-info">
            <h3 class="producto-nombre">${producto.nombre}</h3>
            <p class="producto-descripcion">${producto.descripcion}</p>
            <div class="producto-precio">$${producto.precio.toLocaleString()}</div>
        </div>
        <div class="producto-opciones">
            <div class="opcion-grupo">
                <label for="color-${producto.id}">Color:</label>
                <select class="selector-opcion" id="color-${producto.id}">
                    ${producto.colores.map(color => `<option value="${color}">${color}</option>`).join('')}
                </select>
            </div>
            <div class="opcion-grupo">
                <label for="talla-${producto.id}">Talla:</label>
                <select class="selector-opcion" id="talla-${producto.id}">
                    <option value="S">S</option>
                    <option value="M" selected>M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
            </div>
            <div class="cantidad-controls">
                <button class="btn-cantidad" onclick="cambiarCantidad(${producto.id}, -1)">-</button>
                <span class="cantidad-numero" id="cantidad-${producto.id}">1</span>
                <button class="btn-cantidad" onclick="cambiarCantidad(${producto.id}, 1)">+</button>
            </div>
        </div>
        <button class="btn-agregar" onclick="agregarAlCarrito(${producto.id})">
            🛒 Agregar Pedido
        </button>
    `;
    
    return card;
}

// Función para cambiar cantidad
function cambiarCantidad(productoId, cambio) {
    const cantidadElement = document.getElementById(`cantidad-${productoId}`);
    let cantidad = parseInt(cantidadElement.textContent);
    cantidad = Math.max(1, cantidad + cambio);
    cantidadElement.textContent = cantidad;
}

// Función para agregar al carrito
function agregarAlCarrito(productoId) {
    const producto = productos.find(p => p.id === productoId);
    const color = document.getElementById(`color-${productoId}`).value;
    const talla = document.getElementById(`talla-${productoId}`).value;
    const cantidad = parseInt(document.getElementById(`cantidad-${productoId}`).textContent);
    
    const itemExistente = carrito.find(item => 
        item.id === productoId && 
        item.color === color && 
        item.talla === talla
    );
    
    if (itemExistente) {
        itemExistente.cantidad += cantidad;
    } else {
        carrito.push({
            ...producto,
            color,
            talla,
            cantidad
        });
    }
    
    actualizarCarrito();
    mostrarNotificacion('Producto agregado al pedido');
}

// Función para actualizar carrito
function actualizarCarrito() {
    const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
    const totalPrecio = carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    
    document.getElementById('cartCount').textContent = totalItems;
    document.getElementById('floatingCartCount').textContent = totalItems;
    document.getElementById('totalAmount').textContent = totalPrecio.toLocaleString();
    
    const carritoItems = document.getElementById('carritoItems');
    const carritoTotal = document.getElementById('carritoTotal');
    const btnCompletar = document.getElementById('btnCompletar');
    
    if (carrito.length === 0) {
        carritoItems.innerHTML = '<p>La cesta de pedidos está vacía</p>';
        carritoTotal.style.display = 'none';
        btnCompletar.style.display = 'none';
    } else {
        carritoItems.innerHTML = carrito.map(item => `
            <div class="carrito-item">
                <span>${item.nombre} - ${item.color} - ${item.talla} x${item.cantidad}</span>
                <span>$${(item.precio * item.cantidad).toLocaleString()}</span>
            </div>
        `).join('');
        carritoTotal.style.display = 'block';
        btnCompletar.style.display = 'block';
    }
}

// Función para mostrar/ocultar carrito
function toggleCart() {
    const carrito = document.getElementById('carrito');
    carrito.style.display = carrito.style.display === 'block' ? 'none' : 'block';
}

// Función para filtrar por categoría
function filterByCategory(categoria) {
    filtroCategoria = categoria;
    
    // Actualizar botones activos
    document.querySelectorAll('.filtro-btn').forEach(btn => {
        btn.classList.remove('activo');
    });
    event.target.classList.add('activo');
    
    cargarProductos();
}

// Función para filtrar productos por búsqueda
function filterProducts() {
    searchTerm = document.getElementById('searchInput').value;
    cargarProductos();
}

// Función para resetear filtros
function resetFilters() {
    filtroCategoria = 'todos';
    searchTerm = '';
    document.getElementById('searchInput').value = '';
    
    document.querySelectorAll('.filtro-btn').forEach(btn => {
        btn.classList.remove('activo');
    });
    document.querySelector('.filtro-btn').classList.add('activo');
    
    cargarProductos();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Función para completar pedido
function completarPedido() {
    document.getElementById('checkoutModal').style.display = 'block';
}

// Función para cerrar checkout
function closeCheckout() {
    document.getElementById('checkoutModal').style.display = 'none';
}

// Función para iniciar carrusel de promociones
function iniciarCarruselPromociones() {
    setInterval(() => {
        promocionActual = (promocionActual + 1) % promociones.length;
        document.getElementById('promocionText').textContent = promociones[promocionActual];
    }, 4000);
}

// Función para mostrar notificación
function mostrarNotificacion(mensaje) {
    const notificacion = document.createElement('div');
    notificacion.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #25d366;
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    notificacion.textContent = mensaje;
    document.body.appendChild(notificacion);
    
    setTimeout(() => {
        notificacion.remove();
    }, 3000);
}

// Manejar envío del formulario
document.getElementById('checkoutForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const pedido = {
        nombre: document.getElementById('nombre').value,
        telefono: document.getElementById('telefono').value,
        direccion: document.getElementById('direccion').value,
        ciudad: document.getElementById('ciudad').value,
        metodoPago: document.getElementById('metodoPago').value,
        productos: carrito,
        total: carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0)
    };
    
    // Crear mensaje para WhatsApp
    const mensaje = crearMensajeWhatsApp(pedido);
            const urlWhatsApp = `https://wa.me/573216798086?text=${encodeURIComponent(mensaje)}`;
    
    window.open(urlWhatsApp, '_blank');
    
    // Limpiar carrito y cerrar modal
    carrito = [];
    actualizarCarrito();
    closeCheckout();
    mostrarNotificacion('Pedido enviado exitosamente');
});

// Función para crear mensaje de WhatsApp
function crearMensajeWhatsApp(pedido) {
    let mensaje = `*NUEVO PEDIDO GARDEM*\n\n`;
    mensaje += `*Cliente:* ${pedido.nombre}\n`;
    mensaje += `*Teléfono:* ${pedido.telefono}\n`;
    mensaje += `*Dirección:* ${pedido.direccion}\n`;
    mensaje += `*Ciudad:* ${pedido.ciudad}\n`;
    mensaje += `*Método de Pago:* ${pedido.metodoPago}\n\n`;
    mensaje += `*PRODUCTOS:*\n`;
    
    pedido.productos.forEach(item => {
        mensaje += `• ${item.nombre} - ${item.color} - ${item.talla} x${item.cantidad} = $${(item.precio * item.cantidad).toLocaleString()}\n`;
    });
    
    mensaje += `\n *TOTAL: $${pedido.total.toLocaleString()}*\n\n`;
    mensaje += `¡Gracias por tu compra! `;
    
    return mensaje;
} 
