const nav = document.querySelector(".nav-bar");
const navLinks = document.querySelectorAll(".link");
const newNav = nav.cloneNode(true);
const navPanelBars = document.querySelectorAll(".header__navPanel > div");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 0) {
    nav.style.padding = "1rem 2rem";
    nav.style.color = "black";
    nav.style.backgroundColor = "#fff";
    // navPanelBars.forEach((bar) => (bar.style.backgroundColor = "#000000"));
  } else {
    nav.style.padding = "5rem";
    nav.style.color = "#fff";
    nav.style.backgroundColor = "transparent";
    // navPanel.style.backgroundColor = "#fff";
    // navPanelBars.forEach((bar) => (bar.style.backgroundColor = "#ffffff"));
  }
});
