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

// Read URL Parameters

const params = new URLSearchParams(window.location.search);

document.querySelector("#first").textContent =
    params.get("first");

document.querySelector("#last").textContent =
    params.get("last");

document.querySelector("#email").textContent =
    params.get("email");

document.querySelector("#phone").textContent =
    params.get("phone");

document.querySelector("#organization").textContent =
    params.get("organization");

document.querySelector("#membership").textContent =
    params.get("membership");

document.querySelector("#timestamp").textContent =
    params.get("timestamp");