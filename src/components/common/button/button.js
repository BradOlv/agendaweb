let Button = (title, id, img, callback) => {
    let div = document.createElement("div");
    div.id = id;
    div.className = "button";

    let divImage = document.createElement("div");
    divImage.className = "button-image";

    let imgIcon = document.createElement("img");
    imgIcon.src = `./assets/icons/${img}`;
    divImage.appendChild(imgIcon);

    let p = document.createElement("p");
    p.className = "button-text";
    p.textContent = title;

    div.appendChild(divImage);
    div.appendChild(p);

    div.addEventListener("click", () => {   
        callback();
        console.log("seccion completada");
    });

    return div;
}

export { Button };
