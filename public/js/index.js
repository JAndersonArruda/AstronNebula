import { fetchApod }  from "./api.js";

document.addEventListener("DOMContentLoaded", async () => {
    const midiaDay = document.querySelector(".midia-day");
    const descriptionImageDay = document.querySelector(".container-description-midia");

    try {
        const date = await fetchApod();

        const typeMidia = (type) => {
            if (type === "video") return document.createElement("iframe");
            else if (type === "image") return document.createElement("img");
        }

        const midia = typeMidia(date.midia_type);
        midia.src = date.url;
        midia.classList.add("midia");
        if (date.midia_type === "image") midia.alt = "Midia day";
        if (date.midia_type === "video") {
            midia.title = "Midia day";
            midia.setAttribute("frameborder", "0");
            midia.setAttribute("allowfullscreen", "");
        }

        const title = document.createElement("p");
        title.textContent = date.name;

        midiaDay.appendChild(midia);
        midiaDay.appendChild(title);

        const containerTilte = document.createElement("div");
        containerTilte.classList.add("container-title-section-midia-day")
        
        const titleSection = document.createElement("h1");
        titleSection.textContent = "Mídia do Dia";
        titleSection.classList.add("title-section");

        containerTilte.appendChild(titleSection);

        const description = document.createElement("p");
        description.textContent = date.description;
        
        descriptionImageDay.appendChild(containerTilte);
        descriptionImageDay.appendChild(description);
    } catch (error) {
        console.error('Erro no acesso aos dados da requisição (APOD)', error);
    }
});
