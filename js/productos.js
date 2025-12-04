//Para cargar los datos del json e inyectarlos en 
const container = document.getElementById("cardContainer");

document.addEventListener("DOMContentLoaded", () => {
  cargarProductos();
});

function cargarProductos() {
  fetch("../data/productos.json")
    .then(response => response.json())
    .then(data => {
      crearCards(data);
    })
}

function crearCards(productos) {
    productos.forEach(producto => {
    
    const col = document.createElement("div");
    col.className = "col-md-4";

    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${producto.imagen}" class="card-img-top"
        alt="${producto.nombre}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text flex-grow-1">
            ${producto.descripcion}
          </p>
          <p class="fw-bold mb-2">Desde $${producto.precio} MXN</p>
          <button class="btn btn-primary mt-auto">Personalizar</button>
        </div>
      </div>
    `;

    container.appendChild(col);
  });
}