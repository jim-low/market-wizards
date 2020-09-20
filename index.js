// slider javascript
let backgroundText = document.querySelector(".float-text")
let previewImg = document.querySelector("#slider .top .preview-img")
let courses = ["leadership","marketing","networking","problem","management"]
let imgSelectors = document.querySelectorAll(".img-bg img")
let count = 0

const addShowClass = () => {
    imgSelectors.forEach(img => {
        if(previewImg.src === img.src) {
            img.classList.add("show")
        }else {
            img.classList.remove("show")
        }
    })
}

const changeBgText = () => {
    let imgOnShow = previewImg.src.toString().slice(57).split("/").join(" ").split("-").join(" ").split(".").join(" ").split(" ")
    for(var i = 0; i < courses.length; i++){
        for(var j = 0; j < imgOnShow.length; j++){
            if(courses[i] == imgOnShow[j]){
                count = i
                backgroundText.innerText = courses[i]
            }
        }
    }
}

let autoChangeImg = () => {
    if(count >= imgSelectors.length) {
        count = 0
    }else {
        previewImg.src = imgSelectors[count].src
        changeBgText()
        addShowClass()
        count += 1
    }
}

imgSelectors.forEach(img => {
    img.addEventListener("click", () => {
        previewImg.src = img.src
        changeBgText()
        addShowClass()
    })
})

addShowClass()

setInterval(autoChangeImg, 2000)
// end slider javascript

// course briefing javascript
let briefingContainer = document.querySelector("#course-brief")
let courseLayout =
[
    {
        video: "leadership.mp4",
        desc: "Discover your potential to be a leader and guide others through and through. Be the one on top that lends a helping hand to other people."
    },
    {
        video: "marketing.mp4",
        desc: "Increase and generate revenue by selling ideas and products to customers and contacts. Compete with others by attracting more customers to buy your ideas."
    },
    {
        video: "networking.mp4",
        desc: "Stay connected anywhere and everywhere. The marketing or economical trend may be changing anytime and you have to constantly stay updated."
    },
    {
        video: "problem-solving.mp4",
        desc: "Be a problem solver by training and practicalize your analytical and logical skills. The more problems you solve, the more sales you will be able to generate."
    },
    {
        video: "management.mp4",
        desc: "Management is a daily part of life. Manage your sales like how you manage your life, organized with more assets than liabilities."
    }
]

for(var i = 0; i < courseLayout.length; i++) {
    let briefTitle = courseLayout[i].video.slice(0,courseLayout[i].video.length - 4).split("-").join(" ")
    let briefStructure = `<div class="row">
                            <div class="course-video">
                                <video src="videos/${courseLayout[i].video}" autoplay loop playsinline>
                                </video>
                            </div>
                            <div class="course-desc">
                                <h3><span>${briefTitle}</span></h3>
                                <p>
                                    ${courseLayout[i].desc}
                                </p>
                            </div>
                        </div>`
    briefingContainer.innerHTML += briefStructure
}
// end course briefing javascript

// play all videos when window finishes loading
let playVid = setInterval(() => {
    if(document.readyState === "complete"){
        document.querySelectorAll(".course-video video").forEach(vid => {
            vid.play()
        })
        clearInterval(playVid)
    }
}, 1000);
