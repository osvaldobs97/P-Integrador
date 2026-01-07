//boton
const btnSubmit = document.getElementById("btnSubmitReg");
const btnClear = document.getElementById("btnClearReg");
//campos llenado
const txtNombre = document.getElementById("inputNombreReg");
const txtTelefono = document.getElementById("inputTelefonoReg");
const txtCorreo = document.getElementById("inputCorreoReg");
const inputContraseñaReg = document.getElementById("inputContraseñaReg");
const inputContraseñaReg2 = document.getElementById("inputContraseñaReg2");
const alertValidacionesTexto = document.getElementById(
  "alertValidacionesTextoReg"
);
const alertValidaciones = document.getElementById("alertValidacionesReg");
//formulario
const formularioContacto = document.getElementById("formularioRegistro");
//variables
const USERS_KEY = "usuariosReg";
let usuariosReg = JSON.parse(localStorage.getItem(USERS_KEY)) || [];

function correoYaRegistrado(email) {
  const emailLimpio = email.trim().toLowerCase();
  return usuariosReg.some(
    (u) => (u.correo || "").trim().toLowerCase() === emailLimpio
  );
}

function validarNombre(nombre) {
  const regex =
    /^[-a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+(?:\W+[-a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+){1,5}(?:\W+[-\s[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]]+)?$/;
  const limpio = nombre.trim();
  return regex.test(limpio) && limpio.length >= 3;
}

function validarEmail(email) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email.trim());
}

function validarTelefono(telefono) {
  const regex = /^([2-9]\d{2})\s?(\d{3})\s?(\d{4})$/;
  return regex.test(telefono.trim());
}

function validarContraseña(contraseña) {
  //Al menos 6 caracteres, una mayúscula, una minúscula, un número y un carácter especial
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  return regex.test(contraseña);
}

btnSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  //Bandera
  let isValid = true;
  inputNombreReg.style.border = "";
  inputCorreoReg.style.border = "";
  inputTelefonoReg.style.border = "";
  inputContraseñaReg.style.border = "";
  inputContraseñaReg2.style.border = "";
  alertValidacionesTextoReg.innerHTML = "";
  alertValidacionesReg.style.display = "none";

  if (!validarNombre(inputNombreReg.value)) {
    inputNombreReg.style.border = "solid medium red";
    alertValidacionesTextoReg.innerHTML +=
      "<strong>Nombre y apellido requeridos. Solo letras.</strong><br/>";
    alertValidacionesReg.style.display = "block";
    isValid = false;
  }

  if (!validarTelefono(inputTelefonoReg.value)) {
    inputTelefonoReg.style.border = "solid medium red";
    alertValidacionesTextoReg.innerHTML +=
      "<strong>Teléfono inválido. Formato a 10 números y sin guiones.</strong><br/>";
    alertValidacionesReg.style.display = "block";
    isValid = false;
  }

 const correo = txtCorreo.value.trim().toLowerCase();

if (!validarEmail(correo) || correoYaRegistrado(correo)) {
  txtCorreo.style.border = "solid medium red";

  if (!validarEmail(correo)) {
    alertValidacionesTexto.innerHTML +=
      "<strong>Correo inválido. Verifique el formato.</strong><br/>";
  } else {
    alertValidacionesTexto.innerHTML +=
      "<strong>Este correo ya está registrado. Usa otro.</strong><br/>";
  }

  alertValidaciones.style.display = "block";
  isValid = false;
}

  if (!validarContraseña(inputContraseñaReg.value)) {
    inputContraseñaReg.style.border = "solid medium red";
    alertValidacionesTextoReg.innerHTML +=
      "<strong>Contraseña inválida. Debe tener al menos 6 caracteres, una mayúscula, una minúscula, un número y un caracter especial.</strong><br/>";
    alertValidacionesReg.style.display = "block";
    isValid = false;
  }

  if (inputContraseñaReg.value !== inputContraseñaReg2.value) {
    inputContraseñaReg2.style.border = "solid medium red";
    alertValidacionesTextoReg.innerHTML +=
      "<strong>Las contraseñas no coinciden. Por favor, verifícalas.</strong><br/>";
    alertValidacionesReg.style.display = "block";
    isValid = false;
  }

  if (isValid) {

    let usuario = {
      nombre: inputNombreReg.value,
      telefono: inputTelefonoReg.value,
      correo: inputCorreoReg.value,
      contraseña: inputContraseñaReg.value,
    };

    usuariosReg.push(usuario);
    localStorage.setItem(USERS_KEY, JSON.stringify(usuariosReg));
    Swal.fire({
      icon: "success",
      title: "¡Bienvenido!",
      text: "Usuario registrado exitosamente",
      confirmButtonText: "Continuar",
    }).then(() => {
      window.location.href = "login.html";
    });

    formularioRegistro.reset();
  } //isValid
});

btnClear.addEventListener("click", function (event) {
  event.preventDefault();
  inputNombreReg.value = "";
  inputNombreReg.focus();
  inputCorreoReg.value = "";
  inputTelefonoReg.value = "";
  inputContraseñaReg.style.border = "";
  inputContraseñaReg.value = "";
  inputContraseñaReg2.style.border = "";
  inputContraseñaReg2.value = "";

  alertValidacionesReg.style.display = "none";
  inputNombreReg.style.border = "";
  inputCorreoReg.style.border = "";
  inputTelefonoReg.style.border = "";
});
