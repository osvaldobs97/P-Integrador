document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formProducto");
    if (!form) return;

    form.addEventListener("submit", e => {
        e.preventDefault();

        addProducto({
            nombre: form.inputNombre.value,
            precio: form.inputPrecio.value,
            descripcion: form.inputDescripcion.value,
            imagen: form.inputImagen.value
        });

        form.reset();
        window.location.href = "productos.html";
    });
});
