const header = document.getElementById("navBar");

header.innerHTML = `
<nav class="navbar navbar-expand-md navbar-dark px-3">
  <a class="navbar-brand d-flex align-items-center mx-auto mx-md-0" href="index.html">
    <img src="./assets/logo.webp" width="50" height="50" class="me-2" alt="Logo UniversalCopy">
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

    <div class="col-md-1 text-end">
      <!-- login / carrito -->
    </div>
  </div>
</nav>
`;