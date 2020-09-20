document.querySelectorAll("#faq-container ul li .question").forEach(question => {
    question.parentNode.querySelector(".answer").style.display = "none"
    question.addEventListener("click", () => {
        let arrow = question.querySelector("span")
        let answer = question.parentNode.querySelector(".answer")
        if(answer.style.display === "none"){
            answer.style.display = "block"
            arrow.style.cssText = "transform: rotate(90deg)"
        }else {
            answer.style.display = "none"
            arrow.style.cssText = "transform: rotate(0deg)"
        }
    })
})