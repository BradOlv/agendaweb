/* Módulo para manejar el almacenamiento local de contactos y tareas */

const contacts_key = 'agenda_telefonica';
const todo_key = 'todo_list';

function saveContactsToStorage(contactos) {
    localStorage.setItem(contacts_key, JSON.stringify(contactos));
}

function getContactsFromStorage() {
    let data = localStorage.getItem(contacts_key);
    return data ? JSON.parse(data) : null;
}

function saveTasksToStorage(tasks) {
    localStorage.setItem(todo_key, JSON.stringify(tasks));
}

function getTasksFromStorage() {
    let data = localStorage.getItem(todo_key);
    return data ? JSON.parse(data) : [];
}

/* Exportamos las funciones para usarlas en otros módulos */

export { 
    getContactsFromStorage, 
    saveContactsToStorage, 
    getTasksFromStorage, 
    saveTasksToStorage 
};