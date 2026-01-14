function login() {
    const section = document.createElement("section");
    section.id = "login";

    const h3 = document.createElement("h3");
    h3.textContent = "Login";

    const user = document.createElement("input");
    user.placeholder = "Usuario";

    const pass = document.createElement("input");
    pass.type = "password";
    pass.placeholder = "Password";

    const button = document.createElement("button");
    button.textContent = "Iniciar Sesión";

    button.addEventListener("click", () => {
        const root = document.getElementById("root");
        root.innerHTML = "";
        cargarApp();
    });

    section.append(h3, user, pass, button);
    return section;
}

export { login };