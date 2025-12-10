document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formProducto");
    if (!form) return;

    form.addEventListener("submit", e => {
        e.preventDefault();

    if (!validarFormularioCrear()) return;

        addProducto({
            nombre: form.inputNombreCrear.value,
            precio: form.inputPrecioCrear.value,
            descripcion: form.inputDescripcionCrear.value,
            imagen: form.inputImagenCrear.value
        });

        form.reset();
        window.location.href = "productos.html";
    });
});
