let commentBox = document.querySelector(".comment-box")
let commentInput = document.querySelector(".comment-input-section .comment-input");
let postBtn = document.querySelector(".comment-input-section button")
let replyButton = commentBox.querySelectorAll(".comment .question-post button")
let emptyComments = document.querySelector(".empty-comments")
let answerBtns = document.querySelector(".answer button")
let username = "jim low"

const displayCommentBox = () => {
    emptyComments.style.display = "none"
    commentBox.style.display = "block";
}

const updateAnswerBtns = () => {
    let answerBtns = document.querySelectorAll(".answer button")
    
    answerBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            let answerSection = btn.parentNode.querySelector(".reply-section")
            let answerInput = btn.parentNode.querySelector(".reply-input")
            if(answerInput.value === ""){
                alert("Please do not enter an empty answer.");
            }else {
                let answerStructure = `<div class="reply">
                                <div class="user-name">
                                    ${username}
                                </div>
                                <p>${answerInput.value}</p>
                            </div>`
                answerSection.innerHTML += answerStructure
                answerInput.value = ""
            }
        })
    })
}
const updateReplyBtns = () => {
    replyButton = commentBox.querySelectorAll(".comment .question-post button")

    replyButton.forEach(btn => { // toggle display for reply section
        btn.addEventListener("click", () => {
            let answer = btn.parentNode.parentNode.parentNode.querySelector(".answer")
            if(answer.style.display === "none") {
                answer.style.display = "block"
            }else {
                answer.style.display = "none"
            }
        })
    })

    updateAnswerBtns()
}

const postComment = () => {
    if(commentInput.value !== "") {
    let commentStructure = `<div class="comment">
        <div class="question">
            <p class="user"><span>${username}</span></p>
            <div class="question-post">
                <div class="ques">${commentInput.value}</div>
                <button>reply</button>
            </div>
        </div>
        <div class="answer">
            <p class="ans-empty">no reply yet...</p>
            <div class="reply-section">
            </div>
            <input class="reply-input" type="text">
            <button>answer</button>
        </div>
        </div>`
        commentBox.innerHTML += commentStructure
        updateReplyBtns()
        commentInput.value = ""
        displayCommentBox()
    }else {
        alert("Comment cannot be empty.")
    }
}

replyButton.forEach(btn => { // toggle display for reply section
    btn.addEventListener("click", () => {
        let answer = btn.parentNode.parentNode.parentNode.querySelector(".answer")
        if(answer.style.display === "none") {
            answer.style.display = "block"
        }else {
            answer.style.display = "none"
        }
    })
})

postBtn.addEventListener("click", () => {
    postComment()
})

