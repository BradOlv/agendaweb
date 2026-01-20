/* Componente de sección de login */


function login() {
    let section = document.createElement("section");
    section.id = "login";

    let h3 = document.createElement("h3");
    h3.textContent = "Login";

    let user = document.createElement("input");
    user.placeholder = "Usuario";

    let pass = document.createElement("input");
    pass.type = "password";
    pass.placeholder = "Password";

    let button = document.createElement("button");
    button.textContent = "Iniciar Sesión";

/* Al hacer clic, simplemente cambiamos de página*/

    button.addEventListener("click", () => {
        window.location.href = "src/app.html";
    });

    /* Agregamos los elementos a la sección */
    
    section.append(h3, user, pass, button);
    return section;
}

export { login };