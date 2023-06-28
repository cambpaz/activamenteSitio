document.querySelector(".cont-form").addEventListener("submit", function(e){
    e.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (!email.includes("@") || !email.endsWith(".com")) {
        alert("Por favor, ingresa un email válido. Debe contener '@' y terminar con '.com'.");
        return false;
    }

    if (password.length < 5) {
        alert("La contraseña debe tener al menos 5 caracteres.");
        return false;
    }

    this.submit();
});

