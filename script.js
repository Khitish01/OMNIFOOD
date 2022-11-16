const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".navigation");

btnNav.addEventListener("click", function () {
    header.classList.toggle("nav-open");
})




// const allLink = document.querySelector("a:link");

// allLink.forEach(function (link){
//     link.addEventListener("click", function(e) {
//         e.preventDefault();
//         const href = link.getAttribute("href");


//         if (href === "#")
//             window.scrollTo({
//                 top:0,
//                 behavior: "smooth",
//             });

//         if (href !== "#" && href.startsWith("#")) {
//             const sectionE1 = document.querySelector(href);
//             sectionE1.scrollIntoView({behavior: "smooth"});
//         }



//         if (link.classList.contains("nav-link"))
//             header.classList.toggle("nav-open");
//     });
// });