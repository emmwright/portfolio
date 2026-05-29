const lightMode = document.getElementById("lightMode");
const darkMode = document.getElementById("darkMode");

const themeSwitcher = document.getElementById("themeSwitcher");
const themeToggle = document.getElementById("themeToggle");

document.body.classList.add("dark-mode");
darkMode.classList.add("active-theme");

lightMode.addEventListener("click", function () {
    document.body.classList.remove("dark-mode");

    lightMode.classList.add("active-theme");
    darkMode.classList.remove("active-theme");
});

darkMode.addEventListener("click", function () {
    document.body.classList.add("dark-mode");

    darkMode.classList.add("active-theme");
    lightMode.classList.remove("active-theme");
});

themeToggle.addEventListener("click", function () {
    themeSwitcher.classList.toggle("closed");

    if (themeSwitcher.classList.contains("closed")) {
        themeToggle.textContent = ">";
        themeToggle.setAttribute("aria-label", "Show theme switcher");
    } else {
        themeToggle.textContent = "<";
        themeToggle.setAttribute("aria-label", "Hide theme switcher");
    }
});