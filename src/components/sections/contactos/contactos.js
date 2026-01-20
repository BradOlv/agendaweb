/* contactos.js */

import { ItemContacto } from "../../common/itemContacto/itemContacto.js";
import { getContactsFromStorage, saveContactsToStorage } from "../../common/storage.js";

/* Función que crea la sección de contactos */

function contactos() {
    let section = document.createElement("section");
    section.id = "contactos";

    let h2 = document.createElement("h2");
    h2.textContent = "Mis Contactos";
    section.appendChild(h2);

    let lista = getContactsFromStorage();

    /* Verificamos si la lista no es nula */

    if (lista != null) {
        if (lista.length > 0) {
            lista.forEach(contacto => {
                const handleFavoritoChange = (nombre, esFavorito) => {
                    const index = lista.findIndex(c => c.nombre === nombre);
                    if (index !== -1) {
                        lista[index].favorito = esFavorito;
                        saveContactsToStorage(lista);
                    }
                };
                section.appendChild(
                    ItemContacto("user", contacto.nombre, contacto.telefono, contacto.favorito || false, handleFavoritoChange, contacto.fecha)
                );
            });
        } else {

            /* Si no hay contactos, mostramos un mensaje */


            let p = document.createElement("p");
            p.textContent = "No hay contactos guardados.";
            section.appendChild(p);
        }

    } else {

        /* Si la lista es nula, mostramos un mensaje de agenda vacía */

        let p = document.createElement("p");
        p.textContent = "La agenda está vacía.";
        section.appendChild(p);
    }

    return section;
}

export { contactos };