/* Componente de sección de lista de tareas */

import { getTasksFromStorage, saveTasksToStorage } from "../../common/storage.js";

function toDoList() {
    let section = document.createElement("section");
    section.id = "todolist";

    let h2 = document.createElement("h2");
    h2.textContent = "Mis Pendientes";
    section.appendChild(h2);

    let container = document.createElement("div");
    container.id = "tasks-container";

    let pintarTareas = () => {
        container.innerHTML = "";
        let tareas = getTasksFromStorage();

/* Ordenamos las tareas por prioridad: Alta, Media, Baja */


        let pesos = { "Alta": 1, "Media": 2, "Baja": 3 };
        tareas.sort((a, b) => pesos[a.prioridad] - pesos[b.prioridad]);


        tareas.forEach((tarea, index) => {
            let div = document.createElement("div");
            div.className = "task-item";
            if (tarea.completada) {
                div.classList.add("completed");
            }

            /* Checkbox para marcar como completada */
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.className = "task-checkbox";
            checkbox.checked = tarea.completada || false;
            checkbox.addEventListener("change", () => {
                tarea.completada = checkbox.checked;
                saveTasksToStorage(tareas);
                pintarTareas();
            });

            let p = document.createElement("p");
            p.textContent = `${tarea.titulo} - [${tarea.prioridad}]`;

            let btnEditar = document.createElement("button");
            btnEditar.textContent = "Prioridad";
            btnEditar.addEventListener("click", () => {
                let p_orden = ["Baja", "Media", "Alta"];
                let actual = p_orden.indexOf(tarea.prioridad);
                tarea.prioridad = p_orden[(actual + 1) % 3];
                saveTasksToStorage(tareas);
                pintarTareas();
            });

            let btnEliminar = document.createElement("button");
            btnEliminar.textContent = "Borrar";
            btnEliminar.addEventListener("click", () => {
                tareas.splice(index, 1);
                saveTasksToStorage(tareas);
                pintarTareas();
            });

            div.append(checkbox, p, btnEditar, btnEliminar);
            container.appendChild(div);
        });
    };

    /* Pintamos las tareas inicialmente */
    
    pintarTareas();
    section.appendChild(container);
    return section;
}

export { toDoList };