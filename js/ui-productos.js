let container;

function activarBotonesCarrito(productos) {
  const botones = document.querySelectorAll(".btn-agregar");

  botones.forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      const producto = productos.find(p => p.id === id);

      const carrito = window.Carrito;

      if (producto && carrito && typeof carrito.add === "function") {
        carrito.add(producto);
      } else {
        console.error("Carrito no disponible", carrito);
      }
    });
  });
}

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
            <button class="btn btn-primary mt-auto btn-personalizar" data-id="${producto.id}">Personalizar</button>
            <button class="btn btn-primary mt-2 btn-agregar" data-id="${producto.id}">Agregar al carrito</button>
          </div>
        </div>
      </div>
    `;
  });


  container.insertAdjacentHTML("beforeend", html);
  activarBotonesCarrito(productos);
  activarBotonesPersonalizar(productos);
}

function activarBotonesPersonalizar(productos) {
  const botones = document.querySelectorAll(".btn-personalizar");

  // Mapeo de IDs del JSON a IDs del HTML en personalizar.html
  const jsonIdToHtmlId = {
    1: "item-1", // Playera
    2: "item-2", // Taza blanca
    3: "item-3", // Termo
    4: "item-4", // Taza mágica
    5: "item-5", // Agenda
    6: "item-6",// Sudadera
    7: "item-7", // Gorra
    8: "item-8", // Pluma
    9: "item-9", // Llavero
    10: "item-10" // Bolsa
  };

  botones.forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      const htmlId = jsonIdToHtmlId[id];

      if (htmlId) {
        window.location.href = `personalizar.html?product=${htmlId}`;
      } else {
        console.error("ID de producto no mapeado:", id);
        // Redirección por defecto si falla el mapeo
        window.location.href = `personalizar.html`;
      }
    });
  });
}
