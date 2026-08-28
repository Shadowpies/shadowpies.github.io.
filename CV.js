const theme_button = document.getElementById("theme")
const page = document.getElementById("page")
const all_h = document.querySelectorAll("h1, h2, h3, h4, h5, h6")
const header = document.querySelector(".header_text")

theme_button.addEventListener("click", () => {
    page.classList.toggle("light")
    header.classList.toggle("light")
    all_h.forEach((heading) => heading.classList.toggle("light"))
} );
