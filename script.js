const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");
const contactButton = document.querySelector("#contactButton");
const contactFeedback = document.querySelector("#contactFeedback");
const year = document.querySelector("#year");

if (year) year.textContent = String(new Date().getFullYear());

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (contactButton && contactFeedback) {
  contactButton.addEventListener("click", () => {
    contactFeedback.textContent =
      "Antes de publicar, substitua esta mensagem pelo seu e-mail comercial ou por um link de WhatsApp que você controla.";
  });
}
