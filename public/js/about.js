const dataProjects = [
    {
        title: "Midia of the Day",
        discription: "This session presents daily media information. Using the APOD API, made available by NASA, it provides data such as title, description, date, type of media and media access link, such as images and videos, in which this information is updated daily, thus every day The data will be different, making it more interesting every day. In short, a different media file per day.",
        alt: "Representation of the midia of the day",
        url: "/img/about-home-midia.png"
    },
    {
        title: "Calendar",
        discription: "2- Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi magnam impedit accusamus nesciunt maiores beatae qui nisi dolorum, voluptas aliquid. Libero nemo facere nesciunt, minima culpa fugiat molestias itaque quis?",
        alt: "Representation of the calendar",
        url: "/img/about-calendar.png"
    },
    {
        title: "Gallery",
        discription: "The Gallery is the part of the website where images are available from the database provided by NASA, with more than 1000 images present, each one has detailed data that helps you better understand each one of them. The data is obtained by HTTP query in the API Library, provided by NASA, where it is presented in the Gallery. The data provided includes the title, NASA identification ID, creation date, description, media type and access link. In addition to presenting this information, it is also possible to search, in English, for different contents according to key words, such as planet, moon, sun, Apollo 13, among others. So that the images can be better understood, there is a Gallery subpage that presents the details of each image.",
        alt: "Representation of the gallery",
        url: "/img/about-gallery.png"
    },
    {
        title: "Details of the Gallery",
        discription: "The gallery details subpage displays the expanded image in full size, its title and description. Making use of NASA's API Library, every detail helps in understanding each image in the gallery.",
        alt: "Representation of the details of the gallery",
        url: "/img/about-details-gallery.png"
    },
];

const loadAboutProject = async (index) => {
    const image = document.querySelector(".project-image");
    const description = document.querySelector(".container-project-description");
    const status = document.querySelector(".image-status");

    image.alt = dataProjects[index].alt;
    image.src = dataProjects[index].url;

    const title = document.createElement("h3");
    title.classList.add("title-about");
    title.textContent = dataProjects[index].title;
    const paragraph = document.createElement("p");
    paragraph.textContent = dataProjects[index].discription;

    description.replaceChildren();
    description.appendChild(title);
    description.appendChild(paragraph);

    status.replaceChildren();
    for (let i = 0; i < dataProjects.length; i ++) {
        const icon = document.createElement("i");
        icon.classList.add("fa-solid", "fa-circle", "fa-fw", "icon-status");
        icon.id = i;
        
        if (icon.id != index) icon.style.color = "rgba(127, 120, 120, 0.665)";
        
        status.appendChild(icon);
    }
}

const passImage = (index, type) => {
    if (type === "next") {
        if (index === dataProjects.length -1) return 0;
        else if (index >= 0) return index +1;
    }
    else if (type === "prev") {
        if (index === 0) return dataProjects.length -1;
        else if (index < dataProjects.length) return index -1;
    }
    return index;
}

document.addEventListener("DOMContentLoaded", async () => {
    const next = document.querySelector(".image-next");
    const prev = document.querySelector(".image-previous");

    let indexAbout = 0;

    next.addEventListener("mousemove", () => next.style.cursor = "pointer");
    next.addEventListener("click", async () => {
        indexAbout = passImage(indexAbout, "next");
        await loadAboutProject(indexAbout);
    });

    prev.addEventListener("mousemove", () => prev.style.cursor = "pointer");
    prev.addEventListener("click", async () => {
        indexAbout = passImage(indexAbout, "prev");
        await loadAboutProject(indexAbout);
    })

    await loadAboutProject(indexAbout);
});