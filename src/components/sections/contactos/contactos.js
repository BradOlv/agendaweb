import { ItemContacto } from "../../common/itemContacto/itemContacto.js";
import { ContacList } from "./db.js";
import { getContactsFromStorage, saveContactsToStorage } from "../../common/storage.js";

function contactos() {
    let section = document.createElement("section");
    section.id = "contactos";

    let h2 = document.createElement("h2");
    h2.textContent = "Contactos";
    section.appendChild(h2);

    let contactosActuales = getContactsFromStorage();

    if (!contactosActuales) {
        contactosActuales = ContacList;
        saveContactsToStorage(contactosActuales);
    }

    contactosActuales.forEach(contacto => {
        section.appendChild(
            ItemContacto("user", contacto.nombre, contacto.telefono)
        );
    });

    return section;
}

export { contactos };