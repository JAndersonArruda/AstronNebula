import { fetchLibraryImage } from "./api.js";

const updateLibrary = async (search, page) => {
     try {
        const dataAreaDiv = document.querySelector("#data-area");
        dataAreaDiv.replaceChildren();

        const data = await fetchLibraryImage(search, page); // { data, pages }
        
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
}

document.addEventListener("DOMContentLoaded", async () => {
    const searchInput = document.querySelector("#search-input");

    let search = "all";
    const page = 1;

    await updateLibrary(search, page);

    searchInput.addEventListener("keydown", async (event) => {
        if (event.key === "Enter") {
            search = searchInput.value;
            if (search === "") {
                search = "all";
            }

            await updateLibrary(search, page);
        }
    });
});