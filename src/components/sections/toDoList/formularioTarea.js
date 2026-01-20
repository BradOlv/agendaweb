
import { getTasksFromStorage, saveTasksToStorage } from "../../common/storage.js";

function formularioTarea() {
    let form = document.createElement("form");
    form.id = "formulario-tarea";

    let title = document.createElement("h2");
    title.textContent = "Nueva Tarea";

    let inputTitulo = document.createElement("input");
    inputTitulo.placeholder = "Descripción de la tarea";

    let selectPrioridad = document.createElement("select");
    
    // Creamos las opciones de prioridad

    let opt1 = document.createElement("option");
    opt1.value = "Baja"; opt1.textContent = "Baja";
    let opt2 = document.createElement("option");
    opt2.value = "Media"; opt2.textContent = "Media";
    let opt3 = document.createElement("option");
    opt3.value = "Alta"; opt3.textContent = "Alta";
    
    selectPrioridad.append(opt1, opt2, opt3);

    let button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Guardar Tarea";

    form.append(title, inputTitulo, selectPrioridad, button);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let listaTareas = getTasksFromStorage();

        let nuevaTarea = {
            titulo: inputTitulo.value,
            prioridad: selectPrioridad.value
        };

        listaTareas.push(nuevaTarea);
        saveTasksToStorage(listaTareas);

        alert("Tarea guardada correctamente");
        
        inputTitulo.value = "";

        // Redirección manual al ToDoList para ver el cambio

        let container = document.getElementById("container");
        container.innerHTML = "";
        container.appendChild(toDoList()); 
    });

    return form;
}


export { formularioTarea };