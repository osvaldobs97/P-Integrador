//boton
const btnSubmit = document.getElementById("btnSubmit");
const btnClear = document.getElementById("btnClear");
const btnAcceder = document.getElementById("btnAcceder");
//campos llenado
const txtNombre = document.getElementById("inputNombre");
const txtCorreo = document.getElementById("inputCorreo");
const txtTelefono = document.getElementById("inputTelefono");
const txtMensaje = document.getElementById("inputMensaje");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
const alertValidaciones = document.getElementById("alertValidaciones");
//formulario
const formularioContacto = document.getElementById("formularioContacto");

//Correos
//Iniciar EmailJS
(function () {
    emailjs.init("EXX6miCFreEdge_mH");
})();
//Correos



function validarNombre(nombre) {
    const regex = /^[A-Za-zñÑáéíóúÁÉÍÓÚüÜ]+(?: [A-Za-zñÑáéíóúÁÉÍÓÚüÜ]+)*$/;
    const limpio = nombre.trim();
    return regex.test(limpio) && limpio.length >= 3;
}

function validarEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email.trim());
}

function validarTelefono(telefono) {
    const regex = /^([2-9]\d{2})\s?(\d{3})\s?(\d{4})$/;
    return regex.test(telefono.trim());
}

function validarMensaje(mensaje) {
    return mensaje.trim().length >= 10;
}


btnSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    //Bandera
    let isValid = true;
    txtNombre.style.border = "";
    txtCorreo.style.border = "";
    txtTelefono.style.border = "";
    txtMensaje.style.border = "";
    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";


    if (!validarNombre(txtNombre.value)) {
        txtNombre.style.border = "solid medium red";
        alertValidacionesTexto.innerHTML += "<strong>Nombre y Apellido Requeridos. Solo letras.</strong><br/>";
        alertValidaciones.style.display = "block";
        isValid = false;
    }

    if (!validarEmail(txtCorreo.value)) {
        txtCorreo.style.border = "solid medium red";
        alertValidacionesTexto.innerHTML += "<strong>Correo Inválido. Verifique el formato.</strong><br/>";
        alertValidaciones.style.display = "block";
        isValid = false;
    }

    if (!validarTelefono(txtTelefono.value)) {
        txtTelefono.style.border = "solid medium red";
        alertValidacionesTexto.innerHTML += "<strong>Teléfono invalido. Formato a 10 números y sin guiones.</strong><br/>";
        alertValidaciones.style.display = "block";
        isValid = false;
    }

    if (!validarMensaje(txtMensaje.value)) {
        txtMensaje.style.border = "solid medium red";
        alertValidacionesTexto.innerHTML += "<strong>Mensaje Mínimo 10 caracteres</strong><br/>";
        alertValidaciones.style.display = "block";
        isValid = false;
    }

    if (isValid) {

        Swal.fire({
            icon: "success",
            title: "¡Mensaje enviado!",
            text: "Nos pondremos en contacto contigo muy pronto.",
        });


        emailjs.send("service_o9tr7a5", "template_zquzcob", {
            name: txtNombre.value,
            email: txtCorreo.value,
            phone: txtTelefono.value,
            message: txtMensaje.value

        });

        formularioContacto.reset();

    }//isValid

});

btnClear.addEventListener("click", function (event) {
    event.preventDefault();
    txtNombre.value = "";
    txtNombre.focus();
    txtCorreo.value = "";
    txtTelefono.value = "";
    txtMensaje.value = "";

    alertValidaciones.style.display = "none";
    txtNombre.style.border = "";
    txtCorreo.style.border = "";
    txtTelefono.style.border = "";
    txtMensaje.style.border = "";


});


