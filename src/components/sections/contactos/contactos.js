import { ItemContacto } from "../../common/itemContacto/itemContacto.js";

function contactos() {
let sectionContactos = document.createElement("section");    
    sectionContactos.id = "contactos";

   let h2 = document.createElement("h2");
   h2.innerHTML = "Contactos";
   sectionContactos.appendChild(h2);
   
sectionContactos.appendChild(ItemContacto("user", "Bradley Oliva", "5551234"));
sectionContactos.appendChild(ItemContacto("user", "Bradley Oliva", "5551234"));
sectionContactos.appendChild(ItemContacto("user", "Bradley Oliva", "5551234"));
sectionContactos.appendChild(ItemContacto("user", "Bradley Oliva", "5551234"));
sectionContactos.appendChild(ItemContacto("user", "Bradley Oliva", "5551234"));
sectionContactos.appendChild(ItemContacto("user", "Bradley Oliva", "5551234"));
sectionContactos.appendChild(ItemContacto("user", "Bradley Oliva", "5551234"));
sectionContactos.appendChild(ItemContacto("user", "Bradley Oliva", "5551234"));

    return sectionContactos;
}
export {contactos};