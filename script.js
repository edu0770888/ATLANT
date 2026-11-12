
const WHATSAPP_NUMBER = "996555894988";
const DEFAULT_MESSAGE = "Здравствуйте, какие услуги предоставляете?";

// Мобильное меню
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

// Все кнопки WhatsApp используют один адрес и одно сообщение
document.querySelectorAll(".whatsapp-link").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

        window.open(url, "_blank");
    });
});

// Форма заявки
const form = document.getElementById("contactForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    const text = `Здравствуйте! Хочу оставить заявку.
Имя: ${name}
Телефон: ${phone}
Услуга: ${service}
Дополнительная информация: ${message}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
});

// Анимация появления
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll(
    ".about-grid, .service-card, .advantage, .gallery-grid img, .contact-grid"
).forEach(element => {
    element.classList.add("reveal");
    observer.observe(element);
});
