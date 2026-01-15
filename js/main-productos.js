document.addEventListener("DOMContentLoaded", () => {
    initProductosUI();

    let productos = getProductos();

    if (productos.length === 0) {
        fetch("http://3.22.223.95/api/products")
            .then(res => res.json())
            .then(data => {
                saveProductos(data);
                crearCards(data);
            });
    } else {
        crearCards(productos);
    }
    if (window.Carrito) {
        window.Carrito.init();
    }
});

