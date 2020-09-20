let navList = document.querySelector("#nav-bar ul");
document.querySelector("#nav-bar img").src = "images/generalUse/logo.jpg";

document.querySelectorAll("header #nav-bar ul li a").forEach(link => {
    if(!(link.classList.contains("active"))) {
        link.classList.add("link-respond");
    }
})

document.querySelector("#nav-bar #nav-toggle").addEventListener("click", () => {
    document.querySelector("#nav-bar ul.small-screen").classList.toggle("appear");
})