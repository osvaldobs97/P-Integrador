const header = document.getElementById("navBar");
header.className =
    "d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom";
header.innerHTML = `
    <div class="col-md-3 mb-2 mb-md-0">
        <a href="/" class="d-inline-flex align-items-center text-decoration-none">
            <img src="./assets/logo.png" alt="Logo" width="50" height="50" class="me-2">
            <span class="fs-4 fw-bold text-light">UniversalCopy</span>
        </a>
    </div>
    <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="index.html" class="nav-link px-2 link-secondary">Inicio</a></li>
        <li><a href="productos.html" class="nav-link px-2 link-secondary">Productos</a></li>
        <li><a href="formCrear.html" class="nav-link px-2 link-secondary">Crea tu producto</a></li>
        <li><a href="contacto.html" class="nav-link px-2 link-secondary">Contacto</a></li>
        <li><a href="acercaDe.html" class="nav-link px-2 link-secondary">Acerca de nosotros</a></li>
    </ul>
    <div class="col-md-3 text-end">
        <ul>

        </ul>
    </div>
`;