// Change the navigation background when scrolling

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        nav.style.background = "rgba(11, 13, 16, 0.97)";
    } else {
        nav.style.background = "rgba(11, 13, 16, 0.85)";
    }
});


// Simple reveal animation

const cards = document.querySelectorAll(
    ".project-card, .stat, .timeline-item"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    },
    {
        threshold: 0.15
    }
);

cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);
});
