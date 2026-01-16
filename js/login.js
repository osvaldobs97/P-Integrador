const usuario = document.getElementById("username");
const contra = document.getElementById("password");
const alertLogin = document.getElementById("alertLogin");
const alertTextoLogin = document.getElementById("alertTextoLogin");
const btnAcceder = document.getElementById("btnAcceder");

btnAcceder.addEventListener("click", async (event) => {
  event.preventDefault();

  const email = usuario.value.trim().toLowerCase();
  const password = contra.value.trim();

  if (!email || !password) {
    mostrarError("Llena todos los campos.");
    return;
  }

  try {
    const response = await fetch("http://localhost:8080/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });

    if (!response.ok) {
      throw new Error("Correo o contraseña incorrectos");
    }

    const data = await response.json();
    sessionStorage.setItem("token", data.token);

    Swal.fire({
      icon: "success",
      title: "¡Bienvenido!",
      text: "Inicio de sesión exitoso",
      confirmButtonText: "Continuar"
    }).then(() => {
      window.location.href = "index.html";
    });

  } catch (error) {
    mostrarError(error.message);
  }
});

function mostrarError(mensaje) {
  usuario.style.border = "solid medium red";
  contra.style.border = "solid medium red";
  alertTextoLogin.innerHTML = `<strong>${mensaje}</strong>`;
  alertLogin.style.display = "block";
}

function limpiarAlert() {
  alertLogin.style.display = "none";
  usuario.style.border = "";
  contra.style.border = "";
}

usuario.addEventListener("focus", limpiarAlert);
contra.addEventListener("focus", limpiarAlert);
