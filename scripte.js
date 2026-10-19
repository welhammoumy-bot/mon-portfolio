
/* 1. Menu mobile */
const menuToggle = document.querySelector("#menu-toggle");
const mainNav = document.querySelector("#main-nav");

menuToggle.addEventListener("click", function () {
    const isOpen = mainNav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fermer le menu" : "Ouvrir le menu"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
});

/* Fermer le menu après un clic sur un lien */
mainNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Ouvrir le menu");
        menuToggle.textContent = "☰";
    });
});

/* 2. Animation des projets au défilement */
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(function (card) {
    card.classList.add("project-hidden");
});

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("project-visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

projectCards.forEach(function (card) {
    observer.observe(card);
});

/* 3. Bouton Retour en haut */
const backToTop = document.createElement("button");

backToTop.textContent = "↑";
backToTop.className = "back-to-top";
backToTop.setAttribute("aria-label", "Retour en haut");
backToTop.hidden = true;

document.body.appendChild(backToTop);

window.addEventListener("scroll", function () {
    backToTop.hidden = window.scrollY < 300;
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
