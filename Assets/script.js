var navbar = document.getElementById("navbar");
function navbarExpand() {
  document.getElementById("nav-list-mobile").classList.toggle("expand");
}
document.addEventListener("scroll", function () {
  if (window.scrollY < 46) {
    navbar.classList.remove("scrolled");
  } else {
    navbar.classList.add("scrolled");
  }
});
const html = document.querySelector("html");
html.dataset.theme = `theme-dark`;
const dark = document.getElementById("dark");
const light = document.getElementById("light");
function switchTheme(theme) {
  html.dataset.theme = `theme-${theme}`;
  if (theme == "dark") {
    dark.classList.add("hide");
    light.classList.remove("hide");
  } else if (theme == "light") {
    dark.classList.remove("hide");
    light.classList.add("hide");
  }
}
