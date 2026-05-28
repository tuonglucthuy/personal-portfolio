/* ========================= */
/* Scroll Fade Animation */
/* ========================= */

const fadeElements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting) {
      entry.target.classList.add("active");
    }

  });

}, {
  threshold: 0.2
});

fadeElements.forEach((element) => {
  observer.observe(element);
});

/* ========================= */
/* Navbar Background Effect */
/* ========================= */

window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 50) {
    navbar.style.background = "rgba(0,0,0,0.7)";
  } else {
    navbar.style.background = "rgba(0,0,0,0.4)";
  }

});

async function loadComponent(id, file) {
    const response = await fetch(file);
    const data = await response.text();

    document.getElementById(id).innerHTML = data;
}

// loadComponent("header", "../components/header.html");
// loadComponent("footer", "../components/footer.html");

loadComponent("header", "components/header.html");
loadComponent("footer", "components/footer.html");