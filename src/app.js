/* Archivo principal de la aplicación */

import { Button } from "./components/common/button/button.js";
import { contactos } from "./components/sections/contactos/contactos.js";
import { formulario } from "./components/sections/formulario/formulario.js";
import { toDoList } from "./components/sections/toDoList/toDoList.js";
import { formularioTarea } from "./components/sections/toDoList/formularioTarea.js";
import { favoritos } from "./components/sections/favoritos/favoritos.js";


let nav = document.getElementById("nav");
let container = document.getElementById("container");

/* boton agenda*/

nav.appendChild(Button(
    "Agenda",
    "agenda",
    "user.svg",
    function () {
        container.innerHTML = "";
        container.appendChild(contactos());
    }
));

/* boton crear contacto */

nav.appendChild(Button(
    "crear contacto",
    "plus",
    "plus.svg",
    function () {
        container.innerHTML = "";
        container.appendChild(formulario());
    }
));

 /* boton toDoList*/

nav.appendChild(Button(
    "ToDoList", 
    "todolist", 
    "list.svg",
    function () {
        container.innerHTML = "";
        container.appendChild(toDoList());
    }
));

 /* boton crear tarea   */

nav.appendChild(Button(
    "Crear tarea", 
    "creartarea", 
    "tarea.svg",
    function () {
        container.innerHTML = "";
        container.appendChild(formularioTarea());
    }
));

/* boton favs   */
 
nav.appendChild(Button(
    "Favoritos", 
    "favoritos", 
    "user.svg",
    function () {
        container.innerHTML = "";
        container.appendChild(favoritos());
    }
));


/* Vista inicial: contactos */


container.appendChild(contactos());

async function tareas() {
    try {
        let data = await fetch("https://jsonplaceholder.typicode.com/posts");
        let r = await data.json();
        console.log(r);
     } catch (error) {
    }  
}      
tareas();
console.log("Completado");