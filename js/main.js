//boton
const btnSubmit = document.getElementById("btnSubmit");
//campos llenado
const txtNombre = document.getElementById("inputNombre");
const txtCorreo = document.getElementById("inputCorreo");
const txtTelefono = document.getElementById("inputTelefono");
const txtMensaje = document.getElementById("inputMensaje");
//formulario
const formularioContacto = document.getElementById("formularioContacto");


//Correos
//Iniciar EmailJS
(function () {
    emailjs.init("EXX6miCFreEdge_mH");  // <- reemplaza
})();
//Correos



function validarNombre(nombre) {
    const regex = new RegExp(/^[A-Za-zñÑáéíóúÁÉÍÓÚüÜ]+(?: [A-Za-zñÑáéíóúÁÉÍÓÚüÜ]+)+$/);
    return regex.test(nombre);
}//validarNombre

function validarEmail(email) {
    const regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return regex.test(email);
}//validarEmail

function validarTelefono(telefono) {
    const regex = new RegExp(/^(\+\d{1,3}\s?)?(\(?\d{2,3}\)?\s?|\d{2,3}[-.\s]?)?\d{3}[-.\s]?\d{4}$/);
    formatoCorrecto = regex.test(telefono);
    longitudCorrecta = (telefono.length == 10);
    return formatoCorrecto && longitudCorrecta;
}//validarTelefono

function validarMensaje(mensaje){
    return(txtMensaje.value.trim().length > 50);
}//validarMensaje

btnSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    //Bandera
    let isValid = true;

    if (!validarNombre(txtNombre.value)) {

        Swal.fire({
            icon: "warning",
            title: "Nombre incorrecto",
            text: "El nombre esta mal escrito, verifique",
        });

        console.log("El nombre esta mal escrito, verifique");
        isValid = false;
    }

    if (!validarEmail(txtCorreo.value)) {
        Swal.fire({
            icon: "warning",
            title: "Correo incorrecto",
            text: "El correo esta mal escrito, verifique",
        });

        console.log("El correo esta mal escrito, verifique");
        isValid = false;
    }

    if (!validarTelefono(txtTelefono.value)) {
        Swal.fire({
            icon: "warning",
            title: "Numero incorrecto",
            text: "El numero esta mal escrito, verifique",
        });

        console.log("El numero esta mal escrito, verifique");
        isValid = false;
    }

    if(!validarMensaje(txtMensaje.value)){
        Swal.fire({
            icon: "warning",
            title: "Mensaje corto",
            text: "Escribe al menos 50 caracteres",
        });
        isValid=false;
    }


    if (isValid) {
        console.log("Todo bien");

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
