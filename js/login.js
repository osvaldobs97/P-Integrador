const btnLogin = document.getElementById("btnLogin");
const btnRegistro = document.getElementById("btnRegistro");
const botonAcceder = document.getElementById("btnAcceder");

botonAcceder.addEventListener("click", (event) {
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

function actualizarBtnsNav() {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogueado"));

    if (usuario) {
        btnLogin.textContent = usuario.nombre;
        btnRegistro.textContent = "Cerrar sesión"

        btnRegistro.addEventListener("click", cerrarSesion);
    } else {
        btnLogin.textContent = "Login";
        btnLogin.href = "login.html";

        btnRegistro.textContent = "Reistrarse"
        btnRegistro.href = "registro.html"
    }


}

function cerrarSesion (event) {
    event.preventDefault();
    localStorage.removeItem("usuarioLogueado");
    actualizarBtnsNav();
}