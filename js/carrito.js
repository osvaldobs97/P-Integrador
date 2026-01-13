(function () {
  const CARTS_KEY = "carritos";

  function getUsuarioKey() {
    const data = localStorage.getItem("usuarioLogueado");
    if (!data) return "guest";
    try {
      const user = JSON.parse(data);
      return (user.email || "guest").toLowerCase();
    } catch {
      return "guest";
    }
  }

  function getCarts() {
    try {
      return JSON.parse(localStorage.getItem(CARTS_KEY)) || {};
    } catch {
      return {};
    }
  }

  function saveCarts(carts) {
    localStorage.setItem(CARTS_KEY, JSON.stringify(carts));
  }

  function getCart() {
    const carts = getCarts();
    const key = getUsuarioKey();
    return carts[key] || [];
  }

  function saveCart(cart) {
    const carts = getCarts();
    const key = getUsuarioKey();
    carts[key] = cart;
    saveCarts(carts);
  }

  function add(producto) {
    const cart = getCart();

    const idx = cart.findIndex(p => p.id === producto.id);
    if (idx >= 0) {
      cart[idx].cantidad += 1;
    } else {
      cart.push({
        id: producto.id,
        nombre: producto.nombre,
        precio: Number(producto.precio),
        imagen: producto.imagen,
        cantidad: 1
      });
    }

    saveCart(cart);
    render();
  }

  function remove(id) {
    let cart = getCart();
    cart = cart.filter(p => p.id !== id);
    saveCart(cart);
    render();
  }

  function inc(id) {
    const cart = getCart();
    const item = cart.find(p => p.id === id);
    if (item) item.cantidad += 1;
    saveCart(cart);
    render();
  }

  function dec(id) {
    const cart = getCart();
    const item = cart.find(p => p.id === id);
    if (!item) return;

    item.cantidad -= 1;
    const newCart = item.cantidad <= 0 ? cart.filter(p => p.id !== id) : cart;

    saveCart(newCart);
    render();
  }

  function clear() {
    saveCart([]);
    render();
  }

  function totals(cart) {
    const total = cart.reduce((acc, p) => acc + (Number(p.precio) * p.cantidad), 0);
    const count = cart.reduce((acc, p) => acc + p.cantidad, 0);
    return { total, count };
  }

  function render() {
    const itemsDiv = document.getElementById("carritoItems");
    const totalSpan = document.getElementById("totalCarrito");
    const countBadge = document.getElementById("carritoCount");

    if (!itemsDiv || !totalSpan) return;

    const cart = getCart();
    const { total, count } = totals(cart);

    itemsDiv.innerHTML = "";

    if (cart.length === 0) {
      itemsDiv.innerHTML = `<p class="text-muted m-0">Tu carrito está vacío.</p>`;

    } else {
      cart.forEach(p => {
        const sub = (Number(p.precio) * p.cantidad).toFixed(2);

        itemsDiv.insertAdjacentHTML("beforeend", `
          <div class="d-flex align-items-center justify-content-between border rounded p-2">
            <div class="d-flex align-items-center gap-2">
              <img src="${p.imagen}" alt="${p.nombre}" width="54" height="54" style="object-fit:cover" class="rounded">
              <div>
                <div class="fw-semibold">${p.nombre}</div>
                <small class="text-muted">$${Number(p.precio).toFixed(2)} c/u</small>
                <div><small class="text-muted">Subtotal: $${sub}</small></div>
              </div>
            </div>

            <div class="d-flex flex-column align-items-end gap-2">
              <div class="btn-group" role="group" aria-label="Cantidad">
                <button class="btn btn-sm btn-outline-secondary btn-dec" data-id="${p.id}">-</button>
                <button class="btn btn-sm btn-outline-secondary disabled">${p.cantidad}</button>
                <button class="btn btn-sm btn-outline-secondary btn-inc" data-id="${p.id}">+</button>
              </div>
              <button class="btn btn-sm btn-outline-danger btn-remove" data-id="${p.id}">Eliminar</button>
            </div>
          </div>
        `);
      });
    }

    totalSpan.textContent = total.toFixed(2);
    if (countBadge) countBadge.textContent = count;

    // listeners 
    itemsDiv.querySelectorAll(".btn-inc").forEach(b => b.onclick = () => inc(Number(b.dataset.id)));
    itemsDiv.querySelectorAll(".btn-dec").forEach(b => b.onclick = () => dec(Number(b.dataset.id)));
    itemsDiv.querySelectorAll(".btn-remove").forEach(b => b.onclick = () => remove(Number(b.dataset.id)));
  }

  function init() {
    // Botón vaciar
    const btnVaciar = document.getElementById("btnVaciarCarrito");
    if (btnVaciar) btnVaciar.addEventListener("click", clear);

    // Checkout 
    const btnCheckout = document.getElementById("btnCheckout");
    if (btnCheckout) {
      btnCheckout.addEventListener("click", () => {
        const cart = getCart();
        if (cart.length === 0) {
          if (window.Swal) Swal.fire("Carrito vacío", "Agrega productos para continuar.", "info");
          else alert("Carrito vacío. Agrega productos para continuar.");
          return;
        }
        if (window.Swal) Swal.fire("Listo", "Metodo de pago.", "success");
        else alert("Metodo de pago");
      });
    }

    render();
  }

  // Exponer API global
  window.Carrito = window.Carrito || { init, add, render };
})();