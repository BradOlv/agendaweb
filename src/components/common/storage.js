const CONTACTS_KEY = 'agenda_telefonica';
const TODO_KEY = 'todo_list';

function saveContactsToStorage(contactos) {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contactos));
}

function getContactsFromStorage() {
    let data = localStorage.getItem(CONTACTS_KEY);
    return data ? JSON.parse(data) : null;
}

function saveTasksToStorage(tasks) {
    localStorage.setItem(TODO_KEY, JSON.stringify(tasks));
}

function getTasksFromStorage() {
    let data = localStorage.getItem(TODO_KEY);
    return data ? JSON.parse(data) : [];
}

export { 
    getContactsFromStorage, 
    saveContactsToStorage, 
    getTasksFromStorage, 
    saveTasksToStorage 
};