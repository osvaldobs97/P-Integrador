let container;

function initProductosUI() {
  container = document.getElementById("cardContainer");
}

function crearCards(productos) {
  if (!container) return;

  container.innerHTML = "";

  let html = "";

  productos.forEach(producto => {
    html += `
      <div class="col-md-4">
        <div class="card h-100 shadow-sm" id = "productoCard"> 
          <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text flex-grow-1">${producto.descripcion}</p>
            <p class="fw-bold mb-2">Desde $${producto.precio} MXN</p>
            <button class="btn btn-primary mt-auto">Personalizar</button>
            <button class="btn btn-primary mt-2 btn-agregar" data-id="${producto.id}">Agregar al carrito</button>
          </div>
        </div>
      </div>
    `;
  });

  container.insertAdjacentHTML("beforeend", html);
  activarBotonesCarrito(productos);

}
function activarBotonesCarrito(productos) {
  const botones = document.querySelectorAll(".btn-agregar");

  botones.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      const producto = productos.find(p => p.id === id);
      if (producto) window.Carrito.add(producto);
    });
  });
}
