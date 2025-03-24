document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const birthdate = document.getElementById("birthdate").value;

    if (!fullname || !username || !email || !password || !confirmPassword || !birthdate) {
        alert("🚨⚠️Para registrarte debes completar TODOS los campos⚠️🚨.");
        return;
    }

    if (/\d/.test(fullname)) {
        alert("🚨⚠️El nombre NO puede contener numeros!🚨⚠️");
        return;
    }

    if (username.includes(" ")) {
        alert("🚨⚠️El nombre de usuario NO puede contener espacios!🚨⚠️");
        return;
    }

    if (username.length < 5) {
        alert("🚨⚠️El nombre de usuario debe tener al menos 5 caracteres🚨⚠️.");
        return;
    }

    if (password !== confirmPassword) {
        alert("🚨⚠️Las contraseñas no coinciden!🚨⚠️");
        return;
    }

    if (password.length < 6 || password.length > 18) {
        alert("🚨⚠️La contraseña debe tener entre 6 y 18 caracteres!🚨⚠️");
        return;
    }

    if (!/(?=.*[a-zA-Z])(?=.*\d)/.test(password)) {
        alert("🚨⚠️La contraseña debe incluir al menos una letra y un numero!🚨⚠️");
        return;
    }

    const birthDateObj = new Date(birthdate);
    const today = new Date();
    const age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();
    const dayDiff = today.getDate() - birthDateObj.getDate();

    const isUnder13 = (age < 13) || (age === 13 && (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)));

    if (isUnder13) {
        alert("🚨⚠️Debes tener al menos 13 años para registrarte!🚨⚠️");
        return;
    }

    const usuario = {
        fullname,
        username,
        email,
        password,
        birthdate
    };

    localStorage.setItem("usuarioRegistrado", JSON.stringify(usuario));

    alert("✅Registro exitoso! Ya Puedes Iniciar Sesion en JOGO Games✅");
    document.getElementById("registrationForm").reset();
});