const AMT_OF_BOOKS = 12
let addToCartButtons = document.querySelectorAll(".add-btn button")
let cartMid = document.querySelector(".cart-middle")
let removeButtons = document.querySelectorAll(".rm-btn button")
let purchaseButton = document.querySelector(".purchase-btn button")
let showTotal = document.querySelector(".total-price .total")
let cart = []
let storeContainer = document.querySelector("#store-container")
let book = 
[
    {
        title: "art of war",
        author: "sun tzu",
        img: "art-of-war.jpg",
        desc: "The Art of War has been applied to many fields outside of the military. Much of the text is about how to outsmart one's opponent without actually having to engage in physical battle. Many business books have applied the lessons taken from the book to office politics and corporate business strategy. Many entrepreneurs and corporate executives have turned to it for inspiration and advice on how to succeed in competitive business situations.",
        price: "74.82",
        alt: "art of war book"
    },
    {
        title: "blue ocean strategy",
        author: "w. chan kim and renée mauborgne",
        img: "Blue_Ocean_Strategy.jpg",
        desc: "Examining a wide range of strategic moves across a host of industries, Blue Ocean Strategy highlights the six principles that every company can use to successfully formulate and execute blue ocean strategies. The six principles show how to reconstruct market boundaries, focus on the big picture, reach beyond existing demand, get the strategic sequence right, overcome organizational hurdles, and build execution into strategy.",
        price: "103.35",
        alt: "blue ocean strategy book"
    },
    {
        title: "emotional intelligence",
        author: "daniel goleman",
        img: "emotional-intelligence.jpg",
        desc: "Emotional Intelligence explains the importance of emotions in your life, how they help and hurt your ability to navigate the world, followed by practical advice on how to improve your own emotional intelligence and why that is the key to leading a successful life. Goleman explains how two separate minds live in our brains, one rational and one emotional, and why the five key skills making up your emotional “literacy” are actually a much bigger predictor of happiness and success.",
        price: "71.15",
        alt: "emotinal intelligence book"
    },
    {
        title: "7 habits of highly effective people",
        author: "stephen covey",
        img: "habits-highly-effect.jpg",
        desc: "The 7 Habits of Highly Effective People by Stephen R. Covey is a self-improvement book. It is written on Covey's belief that the way we see the world is entirely based on our own perceptions. In order to change a given situation, we must change ourselves, and in order to change ourselves, we must be able to change our perceptions. We all want to succeed, and one path to success is identifying the habits that can help us on our journey.",
        price: "39.95",
        alt: "seven habits of highly effective people book"
    },
    {
        title: "how to win friends and influence people",
        author: "dale carnegie",
        img: "how-to-win-friends-and-influence-people.jpg",
        desc: "In this book, you will learn the art of influencing and how to handle differrent types of people in order to achieve something in advance. This book covers different techniques in handling people, ways to make people like you and to win people to your way of thinking. Other than that, it shows you the secret to change people's behaviors around you in a well-mannered way without arousing resentment, how to deal criticism and a secret to success.",
        price: "28.90",
        alt: "how to win friends and influence people book"
    },
    {
        title: "law of success",
        author: "napoleon hill",
        img: "law-of-success.jpg",
        desc: "Author says that you can do it if you believe you can, author says this is a course on the fundamentals of success, author says that success is very largely a matter of adjusting one’s self to the ever changing and varying environment of life, author says that people should learn to adjust themselves in the ever changing environment of life with peace and with spirit of harmony, author says that harmony is based upon the understanding of the forces constituting one’s environment.",
        price: "93.49",
        alt: "law of success book"
    },
    {
        title: "lean in",
        author: "sheryl sandberg",
        img: "lean-in.jpg",
        desc: "This book is an interesting examination of the current workplace and women's role within it. She identifies a need for women to be in leadership roles and explains the reasons why women both hold themselves back, and are held back. Sandberg includes many examples from her own life, specifically working with Mark Zuckerberg and emphasises the importance of men supporting women in the workplace, and women supporting women.",
        price: "49.97",
        alt: "lean in book"
    },
    {
        title: "so good they can't ignore you",
        author: "newport cal",
        img: "so-good-they-cant-ignore-you.jpg",
        desc: "So Good They Can’t Ignore You is a book challenges the common wisdom of “follow your passion” and uncovers a better alternative. The idea of “follow your passion” is flawed. If you want to do what you love, you need something rare and valuable (career capital) in return. A great strategy to acquire these career capital is by adopting the craftsman mindset and deliberate practice.",
        price: "92.21",
        alt: "so good they can't ignore you book"
    },
    {
        title: "the four hour work",
        author: "timothy ferriss",
        img: "the-four-hour-work-week.jpg",
        desc: "\"Doing something unimportant well does not make it important\" - Timothy Ferriss. A quote by the author of this book denotes a very important message to the reader, that is if you’ve entertained the idea of what your life could look like if you didn’t have to work, or could be a lot more picky about the projects you do take on, because you rest comfortably on a big, financial cushion, this is a must read.",
        price: "81.20",
        alt: "the four hour work book"
    },
    {
        title: "the lean startup",
        author: "eric ries",
        img: "the-lean-startup.jpg",
        desc: "Most new businesses fail. But most of those failures would have been preventable if the Lean Startup methodology had been followed. The Lean Startup is about learning what your customers really want — and learning it quickly. It’s about continuously testing what you think your customers might want and adapting based on the results — and doing this before you run out of money.",
        price: "73.67",
        alt: "the lean startup book"
    },
    {
        title: "think and grow rich",
        author: "nepoleon hill",
        img: "think-and-grow-rich.jpg",
        desc: "This book tries to help you find your path in life by giving you hints on why you may lack success in your life. Success comes to those who become success conscious, Failure comes to those who indifferently allow themselves to become failure conscious. This book will show you how to change your mindset and enable you to show your true potential.",
        price: "44.96",
        alt: "think and grow rich book"
    },
    {
        title: "zero to one",
        author: "peter thiel",
        img: "zero-to-one.jpg",
        desc: " Zero To One is an inside look at Peter Thiel’s philosophy and strategy for making your startup a success by looking at the lessons he learned from founding and selling PayPal, investing in Facebook and becoming a billionaire in the process. This book will teach you the way to think, how to approache businesses, and what you can do to build your startup’s own future and shape the future of the world in the process.",
        price: "103.22",
        alt: "zero to one book"
    }    
]

for(let i = 0; i < AMT_OF_BOOKS; i++){
    let productStructure = `<div class="item item${i + 1}">
                            <div class="upper">
                                <div class="img-price">
                                    <img src="images/store/${book[i].img}" alt="${book[i].alt}">
                                    <p class="price">rm${book[i].price}</p>
                                </div>
                                <div class="about-book">
                                    <h2 class="heading">about the book</h2>
                                    <p class="desc">
                                        ${book[i].desc}
                                    </p>
                                </div>
                            </div>
                            <div class="lower">
                                <div class="title-author">
                                    <p>
                                        <span class="title">${book[i].title}</span>
                                        <br>
                                        <span class="author">written by: ${book[i].author}</span>
                                    </p>
                                </div>
                                <div class="add-btn">
                                    <button>add to cart</button>
                                </div>
                            </div>
                        </div>`
    storeContainer.innerHTML += productStructure
}

const updateTotal = () => {
    let total = 0;
    let prices = document.querySelectorAll(".purchased-price")
    prices.forEach(price => {
        let itemPrice = parseFloat(price.innerText.slice(2))
        total += itemPrice
    })
    total = Math.round(total * 100) / 100
    showTotal.innerHTML = `rm${total}`
}

const removeButtonUpdate = () => {
    removeButtons = document.querySelectorAll(".rm-btn button")

    removeButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            let title = e.target.parentNode.parentNode.querySelector(".title-author .title").innerText
            let index = cart.indexOf(title);
            e.target.parentNode.parentNode.remove()
            cart.splice(index, 1);
            updateTotal()
        })
    })
}

const updateAddToCartButtons = () => {
    addToCartButtons = document.querySelectorAll(".add-btn button")
    addToCartButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            let author = btn.parentNode.parentNode.querySelector(".author").innerText.slice(12)
            let title =  btn.parentNode.parentNode.querySelector(".title").innerText
            let price = btn.parentNode.parentNode.parentNode.querySelector(".price").innerText
            let img = btn.parentNode.parentNode.parentNode.querySelector("img").src
            let itemTemplate = `<div class="row cart-body">
                            <div class="purchased-book">
                                <img src="${img}" alt="">
                                <p class="title-author">
                                    <span class="title">${title}</span>
                                    <br>by
                                    <span class="author">
                                        ${author}
                                    </span>
                                </p>
                            </div>
                            <div class="purchased-price">${price}</div>
                            <div class="rm-btn">
                                <button>remove</button>
                            </div>
                        </div>`
            if(cart.indexOf(title) === -1){
                cart.push(title)
                cartMid.innerHTML += itemTemplate
                updateTotal()
                removeButtonUpdate()
            }else {
                alert("Item is already in cart.")
            }
            
        })
    })
}

purchaseButton.addEventListener("click", () => {
    if(cart.length !== 0){
        if(confirm("Confirm purchase?")){
            alert("Thank you for your purchase!")
            cartMid.innerHTML = ""
            showTotal.innerHTML = "rm0"
            cart = []
        }
    }else {
        alert("You have no items in your cart.")
    }
})

updateAddToCartButtons()