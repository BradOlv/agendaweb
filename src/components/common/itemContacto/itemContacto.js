// Componente de ítem de contacto con modal hover
    
    let ItemContacto = (imgContacto, nombre, telefono, esFavorito = false, onFavoritoChange = null, fecha = null) => {
    let div = document.createElement("div");
    div.className = "item-contacto";

    let etiquetaImg = document.createElement("img");
    etiquetaImg.src = `./assets/icons/${imgContacto}.svg`;
    etiquetaImg.alt = "icono";

    let etiquetaNombre = document.createElement("h3");
    etiquetaNombre.textContent = nombre;

    let etiquetaTelefono = document.createElement("p");
    etiquetaTelefono.textContent = telefono;

    /* Estrella para marcar como favorito */
    let estrella = document.createElement("button");
    estrella.className = "favorito-estrella";
    estrella.innerHTML = esFavorito ? "★" : "☆";
    estrella.type = "button";
    estrella.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const nuevoEstado = !esFavorito;
        esFavorito = nuevoEstado;
        estrella.innerHTML = nuevoEstado ? "★" : "☆";
        if (onFavoritoChange) {
            onFavoritoChange(nombre, nuevoEstado);
        }
    });

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
                ${fecha ? `<p style="color: #6b7280; font-size: 0.85rem;"><strong>Fecha:</strong> ${fecha}</p>` : ''}
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

    let containerContacto = document.createElement("div");
    containerContacto.className = "container-contacto";
    containerContacto.appendChild(etiquetaImg);
    containerContacto.appendChild(etiquetaNombre);
    containerContacto.appendChild(etiquetaTelefono);

    div.appendChild(estrella);
    div.appendChild(containerContacto);

    return div;
};

export { ItemContacto };