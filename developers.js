const AMT_OF_MEMBERS = 5
let teamContainer = document.querySelector("#team-container")
let percentage = 0;
let members = 
[
    {
        name: "Jim Low Lap Hong",
        img: "jim.jpg",
        position: "Project Manager",
        desc: "Manage and lead the team to make sure that everyone is doing their job. ",
        email: "+60 12-7746260"
    },
    {
        name: "Jason Liew Jun Xian",
        img: "jason.jpg",
        position: "UI Designer",
        desc: "Monitor and design the layout and the  structure of the webpages. Confirms the final design outcome of the website.",
        email: "+60 173953627"
    },
    {
        name: "Lam Wai Hong",
        img: "wai-hong.jpg",
        position: "Web Developer",
        desc: "Develop the content of the websites and make sure that the website is suitable for publishment. ",
        email: "+60 178585792"
    },
    {
        name: "Darren thong dei ya",
        img: "darren.jpg",
        position:  "UI Designer",
        desc: "Monitor and design the layout and the  structure of the webpages. Confirms the final design outcome of the website.",
        email: "+60 124939698"
    },
    {
        name: "Gan Jin Eng",
        img: "jin-eng.jpg",
        position: "Web Developer",
        desc: "Develop the content of the websites and make sure that the website is suitable for publishment.",
        email: "+60 1111459297"
    }
]

for(let i = 0; i < AMT_OF_MEMBERS; i++){
    let hoverName = members[i].name.split(" ")[0]
    let cardStructure = `<div class="card card${i + 1}">
                            <div class="top">
                            <img src="images/team/${members[i].img}" alt="">
                            <div class="hoverName"><p>My name is ${hoverName}</p></div>
                            </div>
                            <div class="bottom">
                            <div class="name">${members[i].name}</div>
                            <div class="position"><span>${members[i].position}</span></div>
                            <div class="desc">${members[i].desc}</div>
                            <div class="email"><a href="#">${members[i].email}</a></div>
                            <div class="contact-btn">
                                <button>contact</button>
                            </div>
                            <div class="social-media">
                                <img src="images/generalUse/whatsapp.jpg">
                                <img src="images/generalUse/instagram-sketched.jpg">
                                <img src="images/generalUse/twitter.jpg">
                                <img src="images/generalUse/facebook.jpg">
                            </div>
                            </div>
                            </div>`
    teamContainer.innerHTML += cardStructure
}

for(let i = 0; i < AMT_OF_MEMBERS; i++){
    let currentCard = document.querySelector(`.card${i + 1}`)
    currentCard.style.cssText = "top: " + percentage + "%;"
    percentage += 9;
}