let usernameLogin = document.querySelector(".login input[name='uname']")
let userEmailLogin = document.querySelector(".login input[name='psw']")
let loginBtn = document.querySelector(".click button")
let name = sessionStorage.getItem("userName")
let email = sessionStorage.getItem("userEmail")

const loginValidity = () => {
    if(usernameLogin.value !== name || userEmailLogin.value !== email){
        alert("Credentials do not match.")
        alert("Please check your username and email again.")
    }else if(usernameLogin.value === "" || userEmailLogin.value === ""){
        alert("Credentials cannot be empty.")
    }else {
        sessionStorage.setItem("isLoggedIn", "true")
        alert("Login successful.")
        alert("Welcome to Market Wizards!");
        window.location = "index.html"
    }
}

loginBtn.addEventListener("click", () => {
    loginValidity()
})

document.addEventListener("keypress", e => {
    if(e.which === 13) {
        loginValidity()
    }
})