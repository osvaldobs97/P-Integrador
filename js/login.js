const usuario = document.getElementById("username");
const contra = document.getElementById("password");
const alertLogin = document.getElementById("alertLogin");
const alertTextoLogin = document.getElementById("alertTextoLogin");
const btnAcceder = document.getElementById("btnAcceder");
const btnLogin = document.getElementById("btnLogin");
const btnRegistro = document.getElementById("btnRegistro");


btnAcceder.addEventListener("click", function (event) {
    event.preventDefault();

    const usuariosGuardados = localStorage.getItem("usuariosReg");


    if (!usuariosGuardados) {
        alertTextoLogin.innerHTML = "<strong>Usuario no registrado, Registrate para comenzar.</strong>";
        alertLogin.style.display = "block";
        return;
    }
    const usuarios = JSON.parse(usuariosGuardados);
    const emailIngresado = usuario.value;
    const contraIngresada = contra.value;

    const usuarioEncontrado = usuarios.find(user =>
        user.correo === emailIngresado &&
        user.contraseña === contraIngresada);


    if (usuarioEncontrado) {
        const usuarioLogueado = {
            nombre: usuarioEncontrado.nombre,
            email: usuarioEncontrado.correo
        }
        localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioLogueado));

        Swal.fire({
            icon: "success",
            title: "¡Bienvenido!",
            text: "Inicio de sesión exitoso",
            confirmButtonText: "Continuar"
        }).then(() => {
            window.location.href = "index.html";
        });


    } else {
        usuario.style.border = "solid medium red";
        contra.style.border = "solid medium red";
        alertTextoLogin.innerHTML = "<strong>Correo o contraseña incorrectos.</strong>";
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

/*

const botonAcceder = document.getElementById("btnAcceder");

botonAcceder.addEventListener("click", (event) => {
    event.preventDefault();
    const email = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    //OSVALDO CAMBIAR RECORDATORIO CUANDO SE PONGA A CHAMBIAR
    const emailValido = validarEmail(email);
    const passValido = validarPassword(password);
    //OSVALDO CAMBIAR RECORDATORIO CUANDO SE PONGA A CHAMBIAR

    if (emailValido && passValido) {
        const usuario = {
            nombre: "Omar",
            email: email
        }
        
        localStorage.setItem("usuarioLogueado", JSON.stringify(usuario));

        window.location.href = "index.html";
    }
});

*/