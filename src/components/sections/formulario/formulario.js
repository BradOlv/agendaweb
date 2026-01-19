import { getContactsFromStorage, saveContactsToStorage } from "../../common/storage.js";
function formulario() {

    let form = document.createElement("form");
    form.id = "formulario";

    let title = document.createElement("h2");
    title.textContent = "Formulario de Contacto";

    let inputNombre = document.createElement("input");
    inputNombre.placeholder = "Nombre";

    let inputTelefono = document.createElement("input");
    inputTelefono.placeholder = "Teléfono";

    let button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Guardar contacto";

    form.append(title, inputNombre, inputTelefono, button);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

       let listaStorage = getContactsFromStorage() || [];

        // 2. Creamos el nuevo objeto
        const nuevoContacto = {
            nombre: inputNombre.value,
            telefono: inputTelefono.value
        };

        // 3. Lo agregamos a la lista y guardamos en LocalStorage
        listaStorage.push(nuevoContacto);
        saveContactsToStorage(listaStorage);

        alert("Contacto guardado en LocalStorage");
        
        // Limpiar inputs
        inputNombre.value = "";
        inputTelefono.value = "";
        
        // Opcional: Redirigir o recargar para ver el cambio
        window.location.hash = "#/contactos"; 
    });

    return form;
    
}

export { formulario };
