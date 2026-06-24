const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");

if (menuToggle && header) {
  menuToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("nav-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll(".faq-item button").forEach((button) => {
  button.addEventListener("click", () => {
    button.closest(".faq-item").classList.toggle("open");
  });
});

const countdown = document.querySelector("[data-countdown]");

function updateCountdown() {
  if (!countdown) return;

  const target = new Date(countdown.dataset.countdown).getTime();
  const remaining = Math.max(0, target - Date.now());
  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);

  countdown.querySelector("[data-days]").textContent = String(days).padStart(2, "0");
  countdown.querySelector("[data-hours]").textContent = String(hours).padStart(2, "0");
  countdown.querySelector("[data-minutes]").textContent = String(minutes).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 60000);

const templateSelect = document.querySelector('select[name="template"]');

if (templateSelect) {
  const selectedTemplate = new URLSearchParams(window.location.search).get("template");
  const templateMap = {
    "midnight-crest": "Midnight Crest",
    "royal-elegance": "Royal Elegance",
    "modern-minimal": "Modern Minimal",
    "bliss-garden": "Bliss Garden",
    "crystal-vows": "Crystal Vows",
    "classic-pearl": "Classic Pearl"
  };

  if (templateMap[selectedTemplate]) {
    templateSelect.value = templateMap[selectedTemplate];
  }
}

document.querySelectorAll(".page-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = form.querySelector(".form-message");

    if (message) {
      message.textContent = form.dataset.success || "Thank you. Your details have been received.";
    }

    form.reset();
  });
});
