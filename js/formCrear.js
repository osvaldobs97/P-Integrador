//formulario crear producto
const alertValidacionesContainer = document.getElementById("alertValidacionesContainer");
const btnSubmitCrear = document.getElementById("btnSubmitCrear");
const btnLimpiar = document.getElementById("btnLimpiar");
const txtNombreCrear = document.getElementById("inputNombreCrear");
const txtPrecioCrear = document.getElementById("inputPrecioCrear");
const txtDescripcionCrear = document.getElementById("inputDescripcionCrear");
const txtImagenCrear = document.getElementById("inputImagenCrear");

//Validaciones Crear Prod
function validarTextoProd(valor) {
    return valor.trim().length > 0;
};

function validarPrecioProd(valor) {
    const numero = Number(valor);
    return !isNaN(numero) && numero > 1;
}

function validarURLProd(valor) {
    return valor.trim() !== "";
}

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

function validarFormularioCrear() {
    let errores = [];

    txtNombreCrear.style.border = "";
    txtPrecioCrear.style.border = "";
    txtDescripcionCrear.style.border = "";
    txtImagenCrear.style.border = "";
    alertValidacionesContainer.innerHTML = "";

    if (!validarTextoProd(txtNombreCrear.value)) {
        txtNombreCrear.style.border = "2px solid red";
        errores.push("El nombre no puede estar vacío.");
    }

    if (!validarPrecioProd(txtPrecioCrear.value)) {
        txtPrecioCrear.style.border = "2px solid red";
        errores.push("El precio debe ser mayor a 1.");
    }

    if (!validarTextoProd(txtDescripcionCrear.value)) {
        txtDescripcionCrear.style.border = "2px solid red";
        errores.push("La descripción no puede estar vacía.");
    }

    if (!validarURLProd(txtImagenCrear.value)) {
        txtImagenCrear.style.border = "2px solid red";
        errores.push("La imagen es obligatoria.");
    }

    if (errores.length > 0) {
        mostrarErrores(errores);
        return false;
    }

    return true;
}

btnLimpiar.addEventListener("click", (event) => {
    event.preventDefault();
    txtNombreCrear.value = "";
    txtNombreCrear.focus();
    txtPrecioCrear.value = "";
    txtDescripcionCrear.value = "";
    txtImagenCrear.value = "";
    txtNombreCrear.style.border = "";
    txtPrecioCrear.style.border = "";
    txtDescripcionCrear.style.border = "";
    txtImagenCrear.style.border = "";
    alertValidacionesContainer.innerHTML = "";
});