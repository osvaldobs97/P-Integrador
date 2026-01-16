document.addEventListener("DOMContentLoaded", () => {
    initProductosUI();   
    fetchProductos();    
});

const URL_api = "http://3.22.223.95/api/products";
    

function fetchProductos() {
    fetch(URL_api)
        .then(response => {
            if (!response.ok) throw new Error("Error al cargar productos");
            return response.json();
        })
        .then(products => {
            const productosFormateados = products.map(p => ({
                id: p.id,
                nombre: p.name,
                descripcion: p.description,
                precio: p.price,
                imagen: p.imageUrl
            }));

            crearCards(productosFormateados);
        })
        .catch(error => {
            console.error("Error al cargar productos:", error);
            const container = document.getElementById("cardContainer");
            if (container) container.innerHTML = "<p>Error al cargar productos.</p>";
        });
}
