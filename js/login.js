const usuario = document.getElementById("username");
const contra = document.getElementById("password");
const alertLogin = document.getElementById("alertLogin");
const alertTextoLogin = document.getElementById("alertTextoLogin");
const btnAcceder = document.getElementById("btnAcceder");
const USERS_KEY = "usuariosReg";

btnAcceder.addEventListener("click", function (event) {
  event.preventDefault();

  const usuariosGuardados = localStorage.getItem(USERS_KEY);

  if (!usuariosGuardados) {
    alertTextoLogin.innerHTML =
      "<strong>Usuario no registrado, Registrate para comenzar.</strong>";
    alertLogin.style.display = "block";
    return;
  }
  const emailIngresado = usuario.value.trim().toLowerCase();
  const contraIngresada = contra.value.trim();

  if (!emailIngresado || !contraIngresada) {
    alertTextoLogin.innerHTML = "<strong>Llena todos los campos.</strong>";
    alertLogin.style.display = "block";
    return;
  }

  let usuarios;
  try {
    usuarios = JSON.parse(usuariosGuardados);
  } catch {
    localStorage.removeItem("usuariosReg");
    alertTextoLogin.innerHTML =
      "<strong>Error en los datos. Registrate nuevamente.</strong>";
    alertLogin.style.display = "block";
    return;
  }

  const usuarioEncontrado = usuarios.find(
    (user) =>
      user.correo.trim().toLowerCase() === emailIngresado &&
      user.contraseña === contraIngresada
  );

  if (usuarioEncontrado) {
    const usuarioLogueado = {
      nombre: usuarioEncontrado.nombre,
      email: usuarioEncontrado.correo,
    };
    localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioLogueado));

    Swal.fire({
      icon: "success",
      title: "¡Bienvenido!",
      text: "Inicio de sesión exitoso",
      confirmButtonText: "Continuar",
    }).then(() => {
      window.location.href = "index.html";
    });
  } else {
    usuario.style.border = "solid medium red";
    contra.style.border = "solid medium red";
    alertTextoLogin.innerHTML =
      "<strong>Correo o contraseña incorrectos.</strong>";
    alertLogin.style.display = "block";
  }
});

function limpiarAlert() {
  alertLogin.style.display = "none";
  usuario.style.border = "";
  contra.style.border = "";
}

usuario.addEventListener("focus", limpiarAlert);
contra.addEventListener("focus", limpiarAlert);
alertLogin.addEventListener("focus", limpiarAlert);
