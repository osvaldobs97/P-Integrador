document.addEventListener("DOMContentLoaded", () => {
    const btnLimpiar = document.getElementById("btnLimpiar");
    const alertContainer = document.getElementById("alertValidacionesContainer");
    const formContainer = document.getElementById("formCrear"); 
    const form = document.getElementById("formProducto");
    if (!form) return;

    const URL_api = "http://127.0.0.1:8080/api/products";

    
    const token = sessionStorage.getItem("token");
    let userRole = null;

    if (token) {
        try {
            const payloadBase64 = token.split('.')[1];
            const payload = JSON.parse(atob(payloadBase64));
            userRole = payload.role; 
            sessionStorage.setItem("userRole", userRole); 
        } catch (err) {
            console.error("Error al decodificar token:", err);
        }
    }

    if (!token || userRole !== "ROLE_ADMIN") {
        formContainer.style.display = "none";
        mostrarAlerta("No tienes permisos para crear productos", "error");
        return;
    }

    btnLimpiar.addEventListener("click", () => {
        form.reset();
        alertContainer.innerHTML = "";
    });

    form.addEventListener("submit", e => {
        e.preventDefault();

        if (!validarFormularioCrear()) return;

        const data = {
            name: form.inputNombreCrear.value,
            price: parseFloat(form.inputPrecioCrear.value),
            description: form.inputDescripcionCrear.value,
            imageUrl: form.inputImagenCrear.value
        };

        fetch(URL_api, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify(data)
        })
            .then(async response => {
                if (response.status === 403) {
                    throw new Error("No tienes permisos para crear productos");
                }
                if (!response.ok) {
                    throw new Error("Error al registrar producto");
                }
                const text = await response.text();
                return text ? JSON.parse(text) : null;
            })
            .then(result => {
                mostrarAlerta("Producto creado correctamente", "success");
                form.reset();
                if (result) console.log("Producto creado:", result);

                setTimeout(() => {
                    window.location.href = "productos.html";
                }, 1500);
            })
            .catch(error => {
                console.error(error);

                if (error instanceof TypeError) {
                    mostrarAlerta(
                        "No se pudo conectar con el servidor. Revisa que el backend esté corriendo y CORS esté configurado correctamente.",
                        "error"
                    );
                } else {
                    mostrarAlerta(error.message, "error");
                }
            });
    });

    function mostrarAlerta(mensaje, tipo) {
        if (!alertContainer) return;

        const clase = tipo === "success" ? "alert alert-success" : "alert alert-danger";
        alertContainer.innerHTML = `<div class="${clase}" role="alert">${mensaje}</div>`;

        setTimeout(() => { alertContainer.innerHTML = ""; }, 3000);
    }
});
