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

            newMidia.addEventListener("click", () => {
                openDetail(midia.links[0].href, midia.data[0].title, midia.data[0].description);
            });

            const img = document.createElement("img");
            img.src = midia.links[0].href;
            img.alt = midia.data[0].title;

            newMidia.appendChild(img);
            dataAreaDiv.appendChild(newMidia);
        });
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
}

const openDetail = (href, title, description) => {
    const modal = document.querySelector("#my-modal");
    const modalImg = document.querySelector("#modal-img");
    const modalTitle = document.querySelector("#modal-title");
    const modalDescription = document.querySelector("#modal-discription");

    modal.style.display = "flex";
    modalImg.src = href;
    modalImg.alt = title;
    modalTitle.textContent = title;
    modalDescription.textContent = description;

    const closeDetail = () => {
        modal.style.display = "none";
    }

    const close = document.querySelector(".close");
    close.addEventListener("click", closeDetail);
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeDetail();
        }
    });
}

const renderPages = async (page) => {
    const areaPagesDiv = document.querySelector(".page-numbers");

    areaPagesDiv.replaceChildren();

    for (let i = page; i <= page +9; i ++) {
        const divNumber = document.createElement("div");
        divNumber.classList.add("page-num");
        divNumber.id = i;
        const text = document.createElement("p");
        text.textContent = i;

        divNumber.appendChild(text);
        areaPagesDiv.appendChild(divNumber);
    }
}

const actionPage = (action, numPage) => {
    if (action === "next") {
        return numPage +1;
    } else if (action === "previous" && numPage > 1) {
        return numPage -1;
    }
    return numPage;
}



// Main Functionality
document.addEventListener("DOMContentLoaded", async () => {
    const searchInput = document.querySelector("#search-input");
    const prev = document.querySelector(".page-previous");
    const next = document.querySelector(".page-next"); 

    let search = searchInput.value;
    let page = 1;
    
    if (!search) {
        search = "all";
    }

    searchInput.addEventListener("keydown", async (event) => {
        if (event.key === "Enter") {
            search = searchInput.value;
            page = 1;
            if (search === "") {
                search = "all";
            }

            await updateLibrary(search, page);
            await renderPages(page)
        }
    });

    prev.addEventListener("mouseover", () => prev.style.cursor = "pointer");
    prev.addEventListener("click", async () => {
        page = actionPage("previous", page);

        await updateLibrary(search, page);
        await renderPages(page);
    });

    next.addEventListener("mouseover", () => next.style.cursor = "pointer");
    next.addEventListener("click", async () => {
        page = actionPage("next", page);

        await updateLibrary(search, page);
        await renderPages(page);
    });

    await updateLibrary(search, page);
    await renderPages(page);
});