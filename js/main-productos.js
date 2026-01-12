document.addEventListener("DOMContentLoaded", () => {
    initProductosUI();

    let productos = getProductos();

    if (productos.length === 0) {
        fetch("https://osvaldobs97.github.io/P-Integrador/data/productos.json")
            .then(res => res.json())
            .then(data => {
                saveProductos(data);
                crearCards(data);
            });
    } else {
        crearCards(productos);
    }
});
window.Carrito.init();