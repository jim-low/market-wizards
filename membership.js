let memberName = document.querySelector(".name-input input")
let memberEmail = document.querySelector(".email-input input")
let memberAddress = document.querySelector(".address-input textarea")
let memberJob = document.querySelector(".occupation-input select")
let inputFields = [memberName, memberEmail, memberAddress, memberJob]

let typeOfMember = document.querySelectorAll(".type-input input")
let submitBtn = document.querySelector(".form-btns .submit")

setInterval(() => {
    if(typeOfMember[0].checked) {
        inputFields.forEach(input => {
            input.disabled = true
            input.value = ""
        })
    }else {
        inputFields.forEach(input => {
            input.disabled = false
        })
    }
}, 500);

submitBtn.addEventListener("mousedown", () => {
    let emptyInput = true
    for(let i = 0; i < inputFields.length; i++){
        if(inputFields[i].value === ""){
            let type = inputFields[i].classList.toString()
            if(type === "uname"){
                alert("alias can not be empty")
            }else {
                alert(`${type} can not be empty`)
            }
            emptyInput = true
            break
        }else {
            emptyInput = false
        }
    }

    if(!emptyInput) {
        sessionStorage.setItem("isMember", "true")
        alert("Thank you very much for joining Market Wizards!")
        window.location.reload()
    }
})

// ! membership form problem still not solved