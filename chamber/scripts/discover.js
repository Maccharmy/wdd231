document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent = document.lastModified;

// Mobile Navigation
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#nav");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

    const expanded =
        menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute("aria-expanded", !expanded);

    menuButton.textContent =
        navigation.classList.contains("open") ? "✕" : "☰";

});

// Visitor Message

const visitMessage = document.querySelector("#visitMessage");

const lastVisit = localStorage.getItem("lastVisit");

const today = Date.now();

if (!lastVisit) {

    visitMessage.textContent =
        "Welcome! Let us know if you have any questions.";

}
else {

    const difference = today - Number(lastVisit);

    const days = Math.floor(difference / 86400000);

    if (days < 1) {

        visitMessage.textContent =
            "Back so soon! Awesome!";

    }
    else if (days === 1) {

        visitMessage.textContent =
            "You last visited 1 day ago.";

    }
    else {

        visitMessage.textContent =
            `You last visited ${days} days ago.`;

    }

}

localStorage.setItem("lastVisit", today);