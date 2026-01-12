const header = document.getElementById("navBar");

header.innerHTML = `
<nav class="navbar navbar-expand-md navbar-dark px-3">
  <a class="navbar-brand d-flex align-items-center mx-auto mx-md-0" href="index.html">
    <img src="./assets/logo.webp" width="50" height="50" class="me-2">
    UniversalCopy
  </a>

  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuNav">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="menuNav">
    <ul class="navbar-nav mx-auto">
      <li class="nav-item"><a class="nav-link" href="index.html">Inicio</a></li>
      <li class="nav-item"><a class="nav-link" href="productos.html">Productos</a></li>
      <li class="nav-item"><a class="nav-link" href="formCrear.html">Crear</a></li>
      <li class="nav-item"><a class="nav-link" href="contacto.html">Contacto</a></li>
      <li class="nav-item"><a class="nav-link" href="acercaDe.html">Acerca de nosotros</a></li>
    </ul>

    <div class="text-end">
      <a id="btnLogin" href="login.html" class="btn btn-outline-light me-2">Login</a>
      <a id="btnRegistro" href="registro.html" class="btn btn-primary me-2">Registrarse</a>
      <button class="btn btn-outline-light" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCarrito">🛒 Carrito <span class="badge bg-danger" id="carritoCount">0</span></button>

      <span id="bienvenida" class="text-light fw-semibold me-2" style="display:none"></span>
      <button id="btnLogout" class="btn btn-primary" style="display:none">Salir</button>
    </div>
  </div>
</nav>
`;

const btnLogin = header.querySelector("#btnLogin");
const btnRegistro = header.querySelector("#btnRegistro");
const btnLogout = header.querySelector("#btnLogout");
const bienvenida = header.querySelector("#bienvenida");

function actualizarBtnsNav() {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogueado"));

    if (usuario) {
        btnLogin.style.display = "none";
        btnRegistro.style.display = "none";

        bienvenida.style.display = "inline";
        bienvenida.textContent = `Bienvenido, ${usuario.nombre}`;

        btnLogout.style.display = "inline";
    } else {
        btnLogin.style.display = "inline";
        btnRegistro.style.display = "inline";

        bienvenida.style.display = "none";
        btnLogout.style.display = "none";
    }
}

btnLogout.addEventListener("click", () => {
    localStorage.removeItem("usuarioLogueado");
    actualizarBtnsNav();
    window.location.href = "login.html";
});

document.addEventListener("DOMContentLoaded", actualizarBtnsNav);
