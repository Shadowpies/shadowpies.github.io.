const theme_button = document.getElementById("theme")
const page = document.getElementById("page")

theme_button.addEventListener("click", () => {
    page.classList.toggle("light")
} );
