
import { Button } from "./components/common/button/button.js";
import {contactos} from "./components/sections/contactos/contactos.js";
import {formulario} from "./components/sections/formulario/formulario.js";
// section app
let app = document.getElementById("app");

//section menu
let nav = document.getElementById("nav");

//Agregar botones al nav
nav.appendChild(Button("Agenda", "agenda", "user.svg"));
nav.appendChild(Button("crear contacto", "plus", "plus.svg"));
nav.appendChild(Button("ToDoList", "todolist", "list.svg"));
nav.appendChild(Button("Crear tarea", "creartarea", "tarea.svg"));
//container
let container = document.getElementById("container");
container.appendChild(contactos());
    