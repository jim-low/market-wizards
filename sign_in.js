let username = document.querySelector(".sign-up .usrname")
let userEmail = document.querySelector(".sign-up .email")
let signInBtn = document.querySelector(".sign-up button")
let contactBtn = document.querySelector(".btn button")

signInBtn.addEventListener("click", () => {
    if(username.value === "" || userEmail.value === "") {
        alert("Please fill in your Sign Up credentials.")
    }else {
        sessionStorage.setItem("userName", username.value)
        sessionStorage.setItem("userEmail", userEmail.value)
        window.location = "login_page.html"
    }
})

contactBtn.addEventListener("click", () => {
    alert("Your response has been recorded.")
    alert("Thank you for contacting us!")
    document.querySelectorAll(".contact-us .wrapper input").forEach(input => {
        input.value = ""
    })
    document.querySelector(".contact-us .wrapper textarea").value = ""
})