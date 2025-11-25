//boton
const btnSubmit = document.getElementById("btnSubmit");
//campos llenado
const txtNombre = document.getElementById("inputNombre");
const txtCorreo = document.getElementById("inputCorreo");
const txtTelefono = document.getElementById("inputTelefono");
const txtMensaje = document.getElementById("inputMensaje");
//formulario
const formularioContacto = document.getElementById("formularioContacto");




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



btnSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    //Bandera
    let isValid = true;

    if (!validarNombre(txtNombre.value)) {
        console.log("El nombre esta mal escrito, verifique");
        isValid = false;
    }

    if (!validarEmail(txtCorreo.value)) {
        console.log("El correo esta mal escrito, verifique");
        isValid = false;
    }

    if (!validarTelefono(txtTelefono.value)) {
        console.log("El numero esta mal escrito, verifique");
        isValid = false;
    }

    if (isValid) {
        console.log("Todo bien");
    }

});
