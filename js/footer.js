document.addEventListener("DOMContentLoaded", () => {
    let footer = document.createElement("footer");

    footer.classList.add("site-footer", "pt-4", "mt-auto");

    footer.innerHTML = `
        <div class="container">
            <div class="row">

                <div class="col-12 col-md-4 mb-3">
                    <div class="d-flex align-items-center mb-2">
                        <img src="./assets/logo.webp" alt="Logo UniversalCopy" width="40" height="40" class="me-2">
                        <span class="h5 mb-0">UniversalCopy</span>
                    </div>
                    <p class="mb-0 small">
                        Impresión y personalización de productos para tus eventos, negocios y momentos especiales.
                    </p>
                </div>

                <div class="col-6 col-md-4 mb-3">
                    <h6 class="fw-bold">Enlaces</h6>
                    <ul class="list-unstyled mb-0">
                        <li><a href="index.html" class="text-decoration-none text-light small">Inicio</a></li>
                        <li><a href="contacto.html" class="text-decoration-none text-light small">Contacto</a></li>
                        <li><a href="acercaDe.html" class="text-decoration-none text-light small">Acerca de nosotros</a></li>
                    </ul>
                </div>

                <div class="col-6 col-md-4 mb-3">
                    <h6 class="fw-bold">Contacto</h6>
                    <p class="mb-1 small">Email: <a href="mailto:universalcopy.contacto@gmail.com" class="text-decoration-none text-light">universalcopy.contacto@gmail.com</a></p>
                    <p class="mb-1 small">Tel: +52 55 0000 0000</p>
                    <p class="mb-0 small">Horario: Lun–Sáb 9:00–18:00</p>
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
