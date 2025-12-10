//formulario crear producto
const alertValidacionesContainer = document.getElementById("alertValidacionesContainer");
const btnSubmitCrear = document.getElementById("btnSubmitCrear");
const txtNombreCrear = document.getElementById("inputNombreCrear");
const txtPrecioCrear = document.getElementById("inputPrecioCrear");
const txtDescripcionCrear = document.getElementById("inputDescripcionCrear");
const txtImagenCrear = document.getElementById("inputImagenCrear");

//Validaciones Crear Prod
function validarTextoProd(valor) {
    return valor.trim().length > 0;
};

function validarPrecioProd(valor) {
    if (!/^\d+$/.test(valor)) return false;
    const numero = Number(valor);
    return numero > 1;
};

function validarURLProd(valor) {
    const regex = /^(https?:\/\/)[^\s/$.?#].[^\s]*$/i;
    return regex.test(valor.trim());
};

function mostrarErrores(listaErrores) {
    alertValidacionesContainer.innerHTML = "";
    const htmlErrores = `
        <div class="alert alert-danger" role="alert">
            <ul>
                ${listaErrores.map(error => `<li>${error}</li>`).join("")}
            </ul>
        </div>
    `;
    alertValidacionesContainer.insertAdjacentHTML("beforeend", htmlErrores);
}

btnSubmitCrear.addEventListener("click", (event) => {
    event.preventDefault();
    txtNombreCrear.style.border = "";
    txtPrecioCrear.style.border = "";
    txtDescripcionCrear.style.border = "";
    txtImagenCrear.style.border = "";
    alertValidacionesContainer.innerHTML = "";

    let errores = [];

    if (!validarTextoProd(txtNombreCrear.value)) {
        txtNombreCrear.style.border = "solid medium red";
        errores.push("El nombre no puede estar vació.");
    };

    if (!validarPrecioProd(txtPrecioCrear.value)) {
        txtPrecioCrear.style.border = "solid medium red";
        errores.push("El precio debe ser mayor a 1.");
    };

    if (!validarTextoProd(txtDescripcionCrear.value)) {
        txtDescripcionCrear.style.border = "solid medium red";
        errores.push("La descripción no puede estar vacía.");
    }

    if (!validarURLProd(txtImagenCrear.value)) {
        txtImagenCrear.style.border = "solid medium red";
        errores.push("El URL debe ser un URL válido.");
    }

    if (errores.length > 0) {
        mostrarErrores(errores);
        return;
    };

});