document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const usernameInput = document.getElementById("username").value.trim();
    const passwordInput = document.getElementById("password").value;

    if (!usernameInput || !passwordInput) {
        alert("⚠️🚨 Por favor completa todos los campos!🚨⚠️");
        return;
    }

    const usuarioGuardado = JSON.parse(localStorage.getItem("usuarioRegistrado"));

    if (!usuarioGuardado) {
        alert("🚨 No hay ningún usuario registrado!🚨");
        return;
    }

    if (
        usernameInput === usuarioGuardado.username &&
        passwordInput === usuarioGuardado.password
    ) {
        alert(`✅ Inicio de sesión exitoso. ¡Bienvenido, ${usuarioGuardado.fullname}!✅`);
        sessionStorage.setItem("usuarioActivo", JSON.stringify(usuarioGuardado));
        window.location.href = "index.html";
    } else {
        alert("❌ Usuario o contraseña incorrectos!❌");
    }
});