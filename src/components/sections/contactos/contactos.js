import { ItemContacto } from "../../common/itemContacto/itemContacto.js";
import { ContacList } from "./db.js";

function contactos() {
    const section = document.createElement("section");
    section.id = "contactos";

    const h2 = document.createElement("h2");
    h2.textContent = "Contactos";
    section.appendChild(h2);

    ContacList.forEach(contacto => {
        section.appendChild(
            ItemContacto("user.svg", contacto.nombre, contacto.telefono)
        );
    });

    return section;
}

export { contactos };
