const header = document.getElementById("header");
const menu = document.getElementById("nav-menu");

header.addEventListener("click", (e) => {
  const target = e.target;

  if (target.closest("#nav-toggle")) {
    menu.classList.add("show-menu");
  }

  if (target.closest("#nav-close")) {
    menu.classList.remove("show-menu");
  }

  if (target.matches(".nav_link")) {
    menu.classList.remove("show-menu");
  }
});
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 2500,
});

sr.reveal(".header", { origin: "top", distance: "120px", delay: 200 });
sr.reveal(".home_title", { delay: 500 });
sr.reveal(".home_description", { delay: 600 });
sr.reveal(".home_social", { delay: 700 });
sr.reveal(".home_image-img", { origin: "right", interval: 100, delay: 1200 });

sr.reveal(".suscribe", { interval: 100, delay: 200 });

sr.reveal(".about_title", { origin: "top", delay: 200 });
sr.reveal(".about_data", { origin: "left", interval: 100, delay: 600 });
sr.reveal(".about_button", { delay: 1200 });

sr.reveal(".product_title", { delay: 200 });
sr.reveal(".productss", { delay: 300, interval: 100 });

sr.reveal(".contact_title", { origin: "top", delay: 200 });
sr.reveal(".contact_info", { origin: "left", delay: 200, interval: 100 });
sr.reveal(".contact_form", { delay: 300, interval: 100 });

mixitup(".productss", {
  selectors: {
    target: ".products",
  },
  animation: {
    duration: 200,
  },
}).filter("all");
