import { fetchLibraryImage } from "./api.js";

const updateLibrary = async (search, page) => {
     try {
        const dataAreaDiv = document.querySelector("#data-area");
        dataAreaDiv.replaceChildren();

        const data = await fetchLibraryImage(search, page); // { data, pages }

        let id = (100*page) -100;
        data.data.forEach(midia => {
            const newMidia = document.createElement("div");
            newMidia.classList.add("container-midia");
            newMidia.id = id ++;

            const acess = (link, acess) => {
                return link.map(os => os[acess]);
            }

            const img = document.createElement("img");
            img.src = acess(midia.links, "href")[0];
            img.alt = acess(midia.data, "title")[0];

            newMidia.appendChild(img);
            dataAreaDiv.appendChild(newMidia);
        });
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
}

const renderPages = async (page) => {
    const areaPagesDiv = document.querySelector(".pages-elements");

    areaPagesDiv.replaceChildren();

    const divPagePrev = document.createElement("div");
    divPagePrev.classList.add("page-previous");
    const iconPrev = document.createElement("i");
    iconPrev.classList.add("fa-solid", "fa-angle-left");

    divPagePrev.appendChild(iconPrev);

    const divPageNext = document.createElement("div");
    divPageNext.classList.add("page-next");
    const iconNext = document.createElement("i");
    iconNext.classList.add("fa-solid", "fa-angle-right");

    divPageNext.appendChild(iconNext);

    const divPageNumbers = document.createElement("div");
    divPageNumbers.classList.add("page-numbers");

    for (let i = page; i <= 10; i ++) {
        const divNumber = document.createElement("div");
        divNumber.classList.add("page-num");
        divNumber.id = i;
        const text = document.createElement("p");
        text.textContent = i;

        divNumber.appendChild(text);
        divPageNumbers.appendChild(divNumber);
    }

    areaPagesDiv.appendChild(divPagePrev);
    areaPagesDiv.appendChild(divPageNumbers);
    areaPagesDiv.appendChild(divPageNext);;
}

document.addEventListener("DOMContentLoaded", async () => {
    const searchInput = document.querySelector("#search-input");

    let search = "all";
    const page = 1;

    await updateLibrary(search, page);
    await renderPages(page);

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