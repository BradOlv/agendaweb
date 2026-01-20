

import { Button } from "./components/common/button/button.js";
import { contactos } from "./components/sections/contactos/contactos.js";
import { formulario } from "./components/sections/formulario/formulario.js";
// Agregamos los nuevos sin borrar los de arriba
import { toDoList } from "./components/sections/toDoList/toDoList.js";
import { formularioTarea } from "./components/sections/toDoList/formularioTarea.js";

let nav = document.getElementById("nav");
let container = document.getElementById("container");

// BOTÓN AGENDA (Existente)
nav.appendChild(Button(
    "Agenda",
    "agenda",
    "user.svg",
    function () {
        container.innerHTML = "";
        container.appendChild(contactos());
    }
));

// BOTÓN CREAR CONTACTO (Existente)
nav.appendChild(Button(
    "crear contacto",
    "plus",
    "plus.svg",
    function () {
        container.innerHTML = "";
        container.appendChild(formulario());
    }
));

// BOTÓN TODOLIST (Nuevo - Ahora con la función callback)
nav.appendChild(Button(
    "ToDoList", 
    "todolist", 
    "list.svg",
    function () {
        container.innerHTML = "";
        container.appendChild(toDoList());
    }
));

// BOTÓN CREAR TAREA (Nuevo - Ahora con la función callback)
nav.appendChild(Button(
    "Crear tarea", 
    "creartarea", 
    "tarea.svg",
    function () {
        container.innerHTML = "";
        container.appendChild(formularioTarea());
    }
));

// Carga inicial (lo que se ve al abrir la app)
container.appendChild(contactos());