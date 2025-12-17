//formulario crear producto
const alertValidacionesContainer = document.getElementById("alertValidacionesContainer");
const btnSubmitCrear = document.getElementById("btnSubmitCrear");
const btnLimpiar = document.getElementById("btnLimpiar");
const txtNombreCrear = document.getElementById("inputNombreCrear");
const txtPrecioCrear = document.getElementById("inputPrecioCrear");
const txtDescripcionCrear = document.getElementById("inputDescripcionCrear");
const txtImagenCrear = document.getElementById("inputImagenCrear");

const PRECIO_MAX = 10000;

txtPrecioCrear.addEventListener("input", () => {
    const valor = txtPrecioCrear.value;

    // Si hay punto y más de 2 decimales, recorta
    if (valor.includes(".")) {
        const [entero, decimal] = valor.split(".");
        if (decimal.length > 2) {
            txtPrecioCrear.value = entero + "." + decimal.slice(0, 2);
        }
    }
});

txtPrecioCrear.addEventListener("blur", () => {
    const v = txtPrecioCrear.value.trim();
    if (v === "" || v === ".") {
        txtPrecioCrear.value = "";
        return;
    }
    let n = Number(v);
    if (Number.isNaN(n)) {
        txtPrecioCrear.value = "";  
        return;
    }
    if (n > PRECIO_MAX) n = PRECIO_MAX;
    if (n < 1.01) n = 1.01;
    txtPrecioCrear.value = n.toFixed(2);
});

//Validaciones Crear Prod
function validarTextoProd(valor) {
    return valor.trim().length > 0;
};

function validarPrecioProd(valor) {
    const limpio = valor.trim();
    if (limpio === "") return false;
    if (!/^\d+(\.\d{1,2})?$/.test(limpio)) return false;
    const numero = parseFloat(limpio);
    return numero >= 1.01 && numero <= PRECIO_MAX;
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