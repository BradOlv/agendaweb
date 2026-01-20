// Componente de ítem de contacto con modal hover
    
    let ItemContacto = (imgContacto, nombre, telefono) => {
    let div = document.createElement("div");
    div.className = "item-contacto";

    let etiquetaImg = document.createElement("img");
    etiquetaImg.src = `./assets/icons/${imgContacto}.svg`;
    etiquetaImg.alt = "icono";

    let etiquetaNombre = document.createElement("h3");
    etiquetaNombre.textContent = nombre;

    let etiquetaTelefono = document.createElement("p");
    etiquetaTelefono.textContent = telefono;

  let modal;
  
  // Variable para controlar el cartelito (modal) flotante

   div.addEventListener("mouseenter", () => {
        modal = document.createElement("div");
        modal.className = "perfil-modal-hover";
        
        modal.innerHTML = `
            <div class="perfil-contenido-hover">
                <img src="./assets/icons/${imgContacto}.svg" alt="foto" style="width: 55px;">
                <h4>${nombre}</h4>
                <p><strong>Tel:</strong> ${telefono}</p>
                <p style="color: #6366f1; font-size: 0.8rem;">${nombre.toLowerCase().replace(/\s+/g, '.')}@estudiante.com</p>
            </div>
        `;

        document.body.appendChild(modal);

        let rect = div.getBoundingClientRect();
        modal.style.position = "fixed";
        

        // Posicionamiento vertical (debajo del ítem)

        modal.style.top = `${rect.top + rect.height + 10}px`; 
        
        // Centrado horizontal (se mantiene igual)
        let centroBarra = rect.left + (rect.width / 2);
        modal.style.left = `${centroBarra - 130}px`;
    });

    div.addEventListener("mouseleave", () => {


    // Si el mouse sale de querer ver el usuario,
    //  quitamos el modal inmediatamente


        if (modal) {
            modal.remove();
        }
    });

    div.appendChild(etiquetaImg);
    div.appendChild(etiquetaNombre);
    div.appendChild(etiquetaTelefono);

    return div;
};

export { ItemContacto };