// Footer Information
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

// Timestamp
document.querySelector("#timestamp").value =
    new Date().toLocaleString();

// Membership Dialogs

const buttons = document.querySelectorAll("[data-dialog]");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const dialog =
            document.getElementById(button.dataset.dialog);

        dialog.showModal();

    });

});

const closeButtons =
    document.querySelectorAll(".closeDialog");

closeButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.closest("dialog").close();

    });

});