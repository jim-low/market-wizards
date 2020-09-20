let chapSelectButtons = document.querySelectorAll(".chapter-selection div")
let chapters = document.querySelectorAll(".chapter-content .chapter")

chapSelectButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        let chapBtn = btn.classList.item(0).toString()
        chapSelectButtons.forEach(bttn => {
            bttn.classList.remove("active")
        })
        btn.classList.add("active")
        chapters.forEach(chapter => {
            let currentChap = chapter.classList.item(1).toString();
            document.querySelector("#course-content .chapter-content .intro").style.display = "none"
            if(currentChap === chapBtn){
                chapter.style.display = "block"
            }else {
                chapter.style.display = "none"
            }
        })
    })
})