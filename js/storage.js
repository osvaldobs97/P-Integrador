const STORAGE_KEY = "productos";

function getProductos() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveProductos(productos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(productos));
}

function addProducto(producto) {
    const productos = getProductos();

    productos.push({
        id: Date.now(),
        nombre: producto.nombre,
        precio: Number(producto.precio),
        descripcion: producto.descripcion,
        imagen: producto.imagen
    });

    saveProductos(productos);
    return productos;
}
