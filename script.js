const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".navigation");

btnNav.addEventListener("click", function () {
    header.classList.toggle("nav-open");
})