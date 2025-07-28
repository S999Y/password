const password = document.getElementById("password");
const message = document.getElementById("password-strength");

password.addEventListener("input", (e) => {
    if (password.value.length <= 0) {
        message.style.display = "none";
    }
    else {
        message.style.display = "block";
    }

    if (password.value.length <= 1) {
        message.innerHTML = "Password must be at least 8 characters";
        message.style.color = "red";
    }
    else if (password.value.length >= 10) {
        message.innerHTML = "Password is Strong.";
        message.style.color = "green";
    }
})