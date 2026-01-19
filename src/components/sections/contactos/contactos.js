import { ItemContacto } from "../../common/itemContacto/itemContacto.js";
import { ContacList } from "./db.js";
import { getContactsFromStorage, saveContactsToStorage } from "../../common/storage.js";

function contactos() {
    const section = document.createElement("section");
    section.id = "contactos";

    const h2 = document.createElement("h2");
    h2.textContent = "Contactos";
    section.appendChild(h2);


let contactosActuales = getContactsFromStorage();

    // Si no hay nada en storage, usamos los de db.js y los guardamos por primera vez
    if (!contactosActuales) {
        contactosActuales = ContacList;
        saveContactsToStorage(contactosActuales);
    }

    contactosActuales.forEach(contacto => {
        section.appendChild(
            ItemContacto("user.svg", contacto.nombre, contacto.telefono)
        );
    });

    return section;
}

export { contactos };
    