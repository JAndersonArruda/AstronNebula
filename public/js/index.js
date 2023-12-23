import { fetchApod }  from "./api.js";

document.addEventListener("DOMContentLoaded", async () => {
    const imageDay = document.querySelector(".image-day");
    const descriptionImageDay = document.querySelector(".container-description-image");

    try {
        const date = await fetchApod();

        const image = document.createElement("img");
        image.src = date.url;
        image.alt = "Image day";

        const title = document.createElement("p");
        title.textContent = date.name;

        imageDay.appendChild(image);
        imageDay.appendChild(title);

        const containerTilte = document.createElement("div");
        containerTilte.classList.add("container-title-section-image-day")
        
        const titleSection = document.createElement("h1");
        titleSection.textContent = "Imagem do Dia";
        titleSection.classList.add("title-section");

        containerTilte.appendChild(titleSection);

        const description = document.createElement("p");
        description.textContent = date.description;
        
        descriptionImageDay.appendChild(containerTilte);
        descriptionImageDay.appendChild(description);
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
});
