function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const burger = document.getElementById("hamburgerBtn");
  const body = document.body;

  menu.classList.toggle("open");
  burger.classList.toggle("active");

  if (menu.classList.contains("open")) {
    body.classList.add("no-scroll");
  } else {
    body.classList.remove("no-scroll");
  }
}

/* nav link */
document.querySelectorAll("#mobileMenu a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("mobileMenu").classList.remove("open");
    document.getElementById("hamburgerBtn").classList.remove("active");
    document.body.classList.remove("no-scroll");
  });
});

/* closing animation */
document.addEventListener("click", (e) => {
  const menu = document.getElementById("mobileMenu");
  const burger = document.getElementById("hamburgerBtn");

  if (menu.classList.contains("open") &&
      !menu.contains(e.target) &&
      !burger.contains(e.target)) {
    
    menu.classList.remove("open");
    burger.classList.remove("active");
    document.body.classList.remove("no-scroll");
  }
});