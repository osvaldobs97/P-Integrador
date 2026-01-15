document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formProducto");
    if (!form) return;

    form.addEventListener("submit", e => {
        e.preventDefault();

        if (!validarFormularioCrear()) return;

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            name: form.inputNombreCrear.value,
            price: form.inputPrecioCrear.value,
            description: form.inputDescripcionCrear.value,
            imageUrl: form.inputImagenCrear.value
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("http://3.22.223.95/api/products", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));

        form.reset();
        window.location.href = "productos.html";
    });
});
