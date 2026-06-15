const lightMode = document.getElementById("lightMode");
const darkMode = document.getElementById("darkMode");

const themeSwitcher = document.getElementById("themeSwitcher");
const themeToggle = document.getElementById("themeToggle");

function applyTheme(theme) {
    if (theme === "light") {
        document.body.classList.remove("dark-mode");
    } else {
        document.body.classList.add("dark-mode");
    }

    if (lightMode && darkMode) {
        if (theme === "light") {
            lightMode.classList.add("active-theme");
            darkMode.classList.remove("active-theme");
        } else {
            darkMode.classList.add("active-theme");
            lightMode.classList.remove("active-theme");
        }
    }
}

let savedTheme = localStorage.getItem("theme");

if (savedTheme !== "light" && savedTheme !== "dark") {
    savedTheme = "dark";
    localStorage.setItem("theme", "dark");
}

applyTheme(savedTheme);

if (lightMode && darkMode) {
    lightMode.addEventListener("click", function () {
        localStorage.setItem("theme", "light");
        applyTheme("light");
    });

    darkMode.addEventListener("click", function () {
        localStorage.setItem("theme", "dark");
        applyTheme("dark");
    });
}

if (themeSwitcher && themeToggle) {
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
}

const screenshotImages = document.querySelectorAll(".project-screenshots img");
const imageLightbox = document.getElementById("imageLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

let currentImageIndex = 0;

if (
    screenshotImages.length > 0 &&
    imageLightbox &&
    lightboxImage &&
    lightboxClose &&
    lightboxPrev &&
    lightboxNext
) {
    function openLightbox(index) {
        currentImageIndex = index;
        lightboxImage.src = screenshotImages[currentImageIndex].src;
        lightboxImage.alt = screenshotImages[currentImageIndex].alt;
        imageLightbox.classList.add("open");
    }

    function closeLightbox() {
        imageLightbox.classList.remove("open");
        lightboxImage.src = "";
    }

    function showPreviousImage() {
        currentImageIndex--;

        if (currentImageIndex < 0) {
            currentImageIndex = screenshotImages.length - 1;
        }

        lightboxImage.src = screenshotImages[currentImageIndex].src;
        lightboxImage.alt = screenshotImages[currentImageIndex].alt;
    }

    function showNextImage() {
        currentImageIndex++;

        if (currentImageIndex >= screenshotImages.length) {
            currentImageIndex = 0;
        }

        lightboxImage.src = screenshotImages[currentImageIndex].src;
        lightboxImage.alt = screenshotImages[currentImageIndex].alt;
    }

    screenshotImages.forEach(function (image, index) {
        image.addEventListener("click", function () {
            openLightbox(index);
        });
    });

    lightboxClose.addEventListener("click", closeLightbox);
    lightboxPrev.addEventListener("click", showPreviousImage);
    lightboxNext.addEventListener("click", showNextImage);

    imageLightbox.addEventListener("click", function (event) {
        if (event.target === imageLightbox) {
            closeLightbox();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (!imageLightbox.classList.contains("open")) {
            return;
        }

        if (event.key === "Escape") {
            closeLightbox();
        }

        if (event.key === "ArrowLeft") {
            showPreviousImage();
        }

        if (event.key === "ArrowRight") {
            showNextImage();
        }
    });
}