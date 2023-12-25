import { fetchLibraryImage } from "./api.js";

document.addEventListener("DOMContentLoaded", async () => {
    const dataAreaDiv = document.querySelector("#data-area");
    const searchInput = document.querySelector("#search-input");

    try {
        dataAreaDiv.replaceChildren();

        const data = await fetchLibraryImage(); // { data, pages }
        
        data.data.forEach(midia => {
            const newMidia = document.createElement("div");
            newMidia.classList.add("container-midia");
            const img = document.createElement("img");

            const acess = (link, acess) => {
                return link.map(os => os[acess]);
            }
            
            img.src = acess(midia.links, "href")[0];
            img.alt = acess(midia.data, "title")[0];

            newMidia.appendChild(img);
            dataAreaDiv.appendChild(newMidia);
        });
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
});