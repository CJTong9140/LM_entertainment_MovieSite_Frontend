
/* 
    Name:               CJ Jingren Tong
    Student Number:     152464194
    Date:               December 12th, 2020
    Website Reference:
        https://www.disneyplus.com/en-ca
        https://www.netflix.com/ca/
    Netlify registered webpage name: lmentertainment.netlify.app
    Page: Home Page JavaScript 
    Task: Part 1 Subscribe Email Form Validation and Submission
*/

const main = () => {
    const img = document.querySelector("#hero-section img");
    const imgs = ["lion-king-slide.jpg", "home-alone.jpg", "deadpool-slider.jpeg", "haunting-of-the-hill-house-slide.jpg", "toy-story-slider.jpg", "interstellar-slider.jpg", "the-Haunting-Of-Bly-Manor-slider.jpg"];
    const alts = ["A poster for the movie Lion King", "A poster for the movie home alone", "A poster of the movie DeadPool", "A poster of the show The Haunting of Hill House", "A poster for the movie Toy Story", "A poster of the movie Interstellar", "A poster of the show The Haunting of Bly Manor"];
    const header = document.querySelector("#hero-section h2");
    const headers = ["Lion King", "Home Alone", "DeadPool", "The Haunting of Hill House", "Toy Story", "Interstellar", "The Haunting of Bly Manor"];
    const link = document.querySelector("#hero-section a");
    const links = ["#", "home-alone.html", "#", "haunting-of-hill-house.html", "#", "#", "#"];
    const previous = document.querySelector(".previous");
    const next = document.querySelector(".next");
    const homeAlones = document.querySelectorAll(".home-alone");
    const apostles = document.querySelectorAll(".apostle");
    const modalHome = document.querySelector(".modalHome");
    const modalApostle = document.querySelector(".modalApostle");
    const cancelHome = document.querySelector(".cancel-home");
    const cancelApostle = document.querySelector(".cancel-apostle");

    let i = 0;

    // Slideshow auto-play logic
    setInterval(() => {
        if (i >= imgs.length - 1) {
            i = -1;
        }
        i++;
        img.src = `../img/${imgs[i]}`;
        img.setAttribute("alt", `${alts[i]}`);
        header.innerText = `${headers[i]}`;
        link.setAttribute("href", `../html/links/${links[i]}`);
    }, 5000);

    // Previous button logic
    previous.addEventListener("click", () => {
        if (i <= 0) {
            i = imgs.length;
        }
        i--;
        img.setAttribute("src", `../img/${imgs[i]}`);
        img.setAttribute("alt", `${alts[i]}`);
        header.innerText = `${headers[i]}`;
        link.setAttribute("href", `../html/links/${links[i]}`);
    });

    // Next button logic
    next.addEventListener("click", () => {
        if (i >= imgs.length - 1) {
            i = -1;
        }
        i++;
        img.setAttribute("src", `../img/${imgs[i]}`);
        img.setAttribute("alt", `${alts[i]}`);
        header.innerText = `${headers[i]}`;
        link.setAttribute("href", `../html/links/${links[i]}`);
    });

    // Modal logic for "Home Alone"
    homeAlones.forEach((homeAlone) => {
        homeAlone.addEventListener("click", () => {
            modalHome.classList.remove("hide");
        });
    });

    // Modal logic for "Apostle"
    apostles.forEach((apostle) => {
        apostle.addEventListener("click", () => {
            modalApostle.classList.remove("hide");
        });
    });

    // Close modals
    cancelHome.addEventListener("click", () => {
        modalHome.classList.add("hide");
    });

    cancelApostle.addEventListener("click", () => {
        modalApostle.classList.add("hide");
        console.log("Closing Apostle Modal");
    });

    window.addEventListener("click", (event) => {
        if (event.target === modalHome) {
            modalHome.classList.add("hide");
            //console.log("Home Alone modal closed by clicking outside");
        }
        if (event.target === modalApostle) {
            modalApostle.classList.add("hide");
            //console.log("Apostle modal closed by clicking outside");
        }
    });
};
main();

