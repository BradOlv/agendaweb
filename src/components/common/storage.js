// src/components/common/storage.js

const LOCAL_STORAGE_KEY = 'agenda_telefonica';

function saveContactsToStorage(contactos) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contactos));
}

function getContactsFromStorage() {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    return data ? JSON.parse(data) : null; // Retorna null si no hay nada
}

export { LOCAL_STORAGE_KEY, getContactsFromStorage, saveContactsToStorage };