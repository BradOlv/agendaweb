/* en este archivo se muestra la seccion de favoritos */

import { ItemContacto } from "../../common/itemContacto/itemContacto.js";
import { getContactsFromStorage } from "../../common/storage.js";

/* Función que crea la sección de favoritos */

function favoritos() {
    let section = document.createElement("section");
    section.id = "favoritos";

    let h2 = document.createElement("h2");
    h2.textContent = "Mis Favoritos";
    section.appendChild(h2);

    let lista = getContactsFromStorage();
    
/* Verificamos si la lista no es nula */

    if (lista) {
        let soloFavoritos = lista.slice(0, 3); 
        soloFavoritos.forEach(contacto => {
            section.appendChild(
                ItemContacto("user", contacto.nombre, contacto.telefono)
            );
        });
    }

    return section;
}

export { favoritos };