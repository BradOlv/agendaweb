import { Button } from "./components/common/button/button.js";
import { contactos } from "./components/sections/contactos/contactos.js";
import { formulario } from "./components/sections/formulario/formulario.js";

let nav = document.getElementById("nav");
let container = document.getElementById("container");

nav.appendChild(Button(
    "Agenda",
    "agenda",
    "user.svg",
    function () {
        container.innerHTML = "";
        container.appendChild(contactos());
    }
));

nav.appendChild(Button(
    "crear contacto",
    "plus",
    "plus.svg",
    function () {
        container.innerHTML = "";
        container.appendChild(formulario());
    }
));

nav.appendChild(Button("ToDoList", "todolist", "list.svg"));
nav.appendChild(Button("Crear tarea", "creartarea", "tarea.svg"));

container.appendChild(contactos());
