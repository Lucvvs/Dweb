const usuarioActivo = JSON.parse(sessionStorage.getItem("usuarioActivo"));
const saludo = document.getElementById("saludo");
const authButtons = document.getElementById("authButtons");
const seccionUsuario = document.getElementById("usuarioActivo");

if (usuarioActivo) {
    saludo.textContent = `🎮 Bienvenido, ${usuarioActivo.fullname}🎮`;
    authButtons.style.display = "none";
    seccionUsuario.style.display = "block";
} else {
    saludo.textContent = "";
    seccionUsuario.style.display = "none";
}

function cerrarSesion() {
    localStorage.removeItem("usuarioActivo");
    alert("🔒 Sesión cerrada!🔒");
    window.location.href = "login.html";
}