const url = "data/members.json";

const membersContainer = document.querySelector("#members");
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#nav");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    const expanded = menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute("aria-expanded", !expanded);

    menuButton.textContent = navigation.classList.contains("open")
        ? "✕"
        : "☰";
});

async function getMembers() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Unable to load member data.");
        }

        const members = await response.json();

        displayMembers(members);

    } catch (error) {

        console.error(error);

        membersContainer.innerHTML =
            "<p>Unable to load member information.</p>";
    }
}

function displayMembers(members) {

    members.forEach(member => {

        const card = document.createElement("section");

        card.classList.add("member-card");

        card.innerHTML = `
            <img src="images/${member.image}"
                 alt="${member.name} logo"
                 loading="lazy"
                 width="120"
                 height="120">

            <h3>${member.name}</h3>

            <p>${member.address}</p>

            <p>${member.phone}</p>

            <p>${member.description}</p>

            <a href="${member.website}"
               target="_blank"
               rel="noopener">
               Visit Website
            </a>
        `;

        membersContainer.appendChild(card);

    });

}

gridButton.addEventListener("click", () => {

    membersContainer.classList.add("grid");
    membersContainer.classList.remove("list");

});

listButton.addEventListener("click", () => {

    membersContainer.classList.add("list");
    membersContainer.classList.remove("grid");

});

document.querySelector("#year").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    document.lastModified;

getMembers();