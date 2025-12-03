document.addEventListener("DOMContentLoaded", () => {
    let footer = document.createElement("footer");

    footer.classList.add("site-footer", "pt-4", "mt-auto");

    footer.innerHTML = `
    <div class="container pb-3">
      <div class="row">

        <div class="col-12 col-md-4 mb-3">
          <a href="index.html" class="d-inline-flex align-items-center mb-2 text-decoration-none">
            <img src="./assets/logo.webp" alt="Logo UniversalCopy" width="40" height="40" class="me-2">
            <span class="fs-4 fw-bold text-light">UniversalCopy</span>
          </a>
          
          <p class="mb-0 small">
            Impresión y personalización de productos para tus eventos, negocios y momentos especiales.
          </p>
        </div>


        <div class="col-6 col-md-4 mb-3">
          <h6 class="fw-bold mb-2">Enlaces</h6>
          <ul class="list-unstyled small mb-0">
            <li><a href="index.html">Inicio</a></li>
            <li><a href="productos.html">Productos</a></li>
            <li><a href="contacto.html">Contacto</a></li>
            <li><a href="acercaDe.html">Acerca de nosotros</a></li>
          </ul>
        </div>


        <div class="col-6 col-md-4 mb-3">
          <h6 class="fw-bold mb-2">Contacto</h6>
          <p class="small mb-1">
            Correo: <a href="mailto:universalcopy.contacto@gmail.com">universalcopy.contacto@gmail.com</a>
          </p>
          <p class="small mb-1">
            Teléfono: +52 (55) 1234 5678
          </p>
          <p class="small mb-0">
            Horario: Lun–Vie 9:00–18:00
          </p>
        </div>
      </div>

      <hr class="border-secondary">

      <div class="row">
        <div class="col-12 text-center">
          <p class="small mb-0">
            &copy; 2025 UniversalCopy. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  `;

    document.body.appendChild(footer);
});
