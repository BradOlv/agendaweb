
import {contactos} from "../../sections/contacts/contactos.js";
import {formulario} from "../../sections/formulario/formulario.js";

let container = document.getElementById("container");

let viewContacts = function() {
    container.innerHTML = "";
    container.appendChild(contactos());
}

let viewCreateContact = function() {
    container.innerHTML = "";
    container.appendChild(formulario());
}

export {viewContacts, viewCreateContact};