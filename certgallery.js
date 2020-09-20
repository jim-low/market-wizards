let certImg = "images/certgallery/cert template.jpg"
const AMT_OF_CERTS = 8
let studentName = sessionStorage.getItem("userName")
let courses = ["leadership","marketing and sales","project management and planning","networking","problem solving","communication and negotiation","financial management","entrepreneurship"]
let gallery = document.querySelector("#gallery-container")

for(let i = 0; i < AMT_OF_CERTS; i++){
    if(studentName === null){
        alert("You are not logged in yet.")
        if(confirm("Make an account?")){
            window.location = "about.html"
        }else {
            alert("You need an account and membership to access this page.")
            window.location = "index.html"
        }
        break
    }
    let courseStructure = `<div class="cert cert${i + 1}">
                            <img src="${certImg}" alt="certificate">
                            <div class="accreds">
                                <span class="cert-head">Certificate</span>
                                <p class="cert-creds">
                                    Congratulations to <span id="student">${studentName}</span> <br>
                                    for completing the <span id="course">${courses[i]}</span> course.
                                </p>
                            </div>
                        </div>`
    gallery.innerHTML += courseStructure
}