/* Componente de sección de lista de tareas */

import { getTasksFromStorage, saveTasksToStorage } from "../../common/storage.js";

/* Función para abrir modal de edición */
function abrirModalEdicion(tarea, tareas, callback) {
    // Verificar si ya existe un modal
    let modalExistente = document.getElementById("modal-edicion");
    if (modalExistente) {
        modalExistente.remove();
    }

    let modal = document.createElement("div");
    modal.id = "modal-edicion";
    modal.className = "modal-overlay";

    let contenedor = document.createElement("div");
    contenedor.className = "modal-content";

    let titulo = document.createElement("h2");
    titulo.textContent = "Editar Tarea";

    let inputTitulo = document.createElement("input");
    inputTitulo.type = "text";
    inputTitulo.placeholder = "Título de la tarea";
    inputTitulo.value = tarea.titulo;
    inputTitulo.className = "modal-input";

    let inputDescripcion = document.createElement("textarea");
    inputDescripcion.placeholder = "Descripción de la tarea";
    inputDescripcion.value = tarea.descripcion || "";
    inputDescripcion.className = "modal-textarea";

    let divBotones = document.createElement("div");
    divBotones.className = "modal-buttons";

    let btnGuardar = document.createElement("button");
    btnGuardar.textContent = "Guardar";
    btnGuardar.className = "btn-guardar";
    btnGuardar.addEventListener("click", () => {
        if (inputTitulo.value.trim() !== "") {
            tarea.titulo = inputTitulo.value;
            tarea.descripcion = inputDescripcion.value;
            saveTasksToStorage(tareas);
            modal.remove();
            callback();
        } else {
            alert("El título no puede estar vacío");
        }
    });

    let btnCancelar = document.createElement("button");
    btnCancelar.textContent = "Cancelar";
    btnCancelar.className = "btn-cancelar";
    btnCancelar.addEventListener("click", () => {
        modal.remove();
    });

    divBotones.append(btnGuardar, btnCancelar);
    contenedor.append(titulo, inputTitulo, inputDescripcion, divBotones);
    modal.appendChild(contenedor);

    // Cerrar modal si se hace click fuera
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });

    document.body.appendChild(modal);
    inputTitulo.focus();
}

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
            p.innerHTML = `<strong>${tarea.titulo}</strong><br><span style="font-size: 14px; color: #666;">${tarea.descripcion || ''}</span><br><span style="font-size: 12px;">[${tarea.prioridad}]</span>`;

            let btnEditar = document.createElement("button");
            btnEditar.textContent = "Editar";
            btnEditar.addEventListener("click", () => {
                abrirModalEdicion(tarea, tareas, pintarTareas);
            });

            let btnEliminar = document.createElement("button");
            btnEliminar.textContent = "Borrar";
            btnEliminar.addEventListener("click", () => {
                tareas.splice(index, 1);
                saveTasksToStorage(tareas);
                pintarTareas();
            });

            let btnPrioridad = document.createElement("button");
            btnPrioridad.textContent = "Prioridad";
            btnPrioridad.addEventListener("click", () => {
                let p_orden = ["Baja", "Media", "Alta"];
                let actual = p_orden.indexOf(tarea.prioridad);
                tarea.prioridad = p_orden[(actual + 1) % 3];
                saveTasksToStorage(tareas);
                pintarTareas();
            });

            div.append(checkbox, p, btnEditar, btnPrioridad, btnEliminar);
            container.appendChild(div);
        });
    };

    /* Pintamos las tareas inicialmente */
    
    pintarTareas();
    section.appendChild(container);
    return section;
}

export { toDoList };