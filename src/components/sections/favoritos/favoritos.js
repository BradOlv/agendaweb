/* en este archivo se muestra la seccion de favoritos */

import { ItemContacto } from "../../common/itemContacto/itemContacto.js";
import { getContactsFromStorage, saveContactsToStorage } from "../../common/storage.js";

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
        /* Filtrar solo los contactos marcados como favoritos */
        let soloFavoritos = lista.filter(contacto => contacto.favorito === true);
        
        if (soloFavoritos.length > 0) {
            soloFavoritos.forEach(contacto => {
                const handleFavoritoChange = (nombre, esFavorito) => {
                    const index = lista.findIndex(c => c.nombre === nombre);
                    if (index !== -1) {
                        lista[index].favorito = esFavorito;
                        saveContactsToStorage(lista);
                    }
                };
                section.appendChild(
                    ItemContacto("user", contacto.nombre, contacto.telefono, true, handleFavoritoChange, contacto.fecha)
                );
            });
        } else {
            let p = document.createElement("p");
            p.textContent = "No hay contactos marcados como favoritos. ¡Agrega algunos!";
            section.appendChild(p);
        }
    } else {
        let p = document.createElement("p");
        p.textContent = "No hay contactos disponibles.";
        section.appendChild(p);
    }

    return section;
}

export { favoritos };