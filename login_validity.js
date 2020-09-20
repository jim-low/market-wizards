let signup_form = document.querySelector(".sign-up")

const signUpDisappear = () => {
    signup_form.style.display="none"
}

setInterval(() => {
    if(sessionStorage.getItem("isLoggedIn") === "true"){
        signUpDisappear();
    }
}, 500)