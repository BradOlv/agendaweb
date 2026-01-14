import { ContacList } from "../contactos/db.js";

function formulario() {

    let form = document.createElement("form");
    form.id = "formulario";

    let title = document.createElement("h2");
    title.textContent = "Formulario de Contacto";

    let inputNombre = document.createElement("input");
    inputNombre.placeholder = "Nombre";

    let inputTelefono = document.createElement("input");
    inputTelefono.placeholder = "Teléfono";

    let button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Guardar contacto";

    form.append(title, inputNombre, inputTelefono, button);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        ContacList.push({
            nombre: inputNombre.value,
            telefono: inputTelefono.value
        });

        console.log(ContacList);
    });

    return form;
}

export { formulario };
