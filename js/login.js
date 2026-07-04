function initLogin() {

    const btn = document.getElementById("btnLogin");

    if (!btn) return;

    btn.addEventListener("click", function () {

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if (username === "admin" && password === "admin") {

            Router.load("dashboard");

        } else {

            alert("Username atau Password salah!");

        }

    });

}