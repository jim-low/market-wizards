const AMT_OF_COURSES = 8
let course = 
[
    {
        img: "leadership.jpg",
        course: "leadership",
        link: "leadership.html",
        desc: "In this course, you will be able to learn how to lead change and leverage different roles and function within for-profit institutions to create lasting value in the marketplace. Throughout this course, you will explore how great leaders assess themselves and lead collaborative teams that effectively manage negotiations and conflict."
    },
    {
        img: "marketing-sales.jpg",
        course: "marketing and sales",
        link: "marketing.html",
        desc: "This course is to develop your marketing plans to strengthen your brand as your business grows. You will be able to explore a range of useful utilities to measure success in your own business growth. Other than that, this course will provide you a clear understanding of the marketing and sales cycle. You will use this knowledge as a foundation to develop your marketing and sales plans."
    },
    {
        img: "project-management.jpg",
        course: "project management",
        link: "project-management.html",
        desc: "In this course, you will learn about the process of defining your objectives and scope, your goals and milestones and assigning tasks and budgetary resources for each step. You will also learn how to use manage your projects in a simple Google Doc or by using other project management softwares. This will allow you to be more efficient and structure your projects in an effective way."
    },
    {
        img: "networking.jpg",
        course: "networking",
        link: "networking.html",
        desc: "In this course, you will be learning about the importance of networking and the advantage it gives you when generating revenue from cotacts, business owners, potential suppliers or other professionals who have business experiences. Developing relationships as a business owner and offering assistnace to others affects your sales amount proportionally in the positives."
    },
    {
        img: "problem-solving.jpg",
        course: "problem solving",
        link: "problem-solving.html",
        desc: "In this course, you will learn about the importance of having analytical and logical thinking skills to solve problems in an effective and efficient manner. This skill is essential especially in the business industry where the biggest problem solvers are entrepreneurs due to constantly solving customers' needs. By enrolling in this course, you will have a much higher probability of being an aspiring entrepreneur."
    },
    {
        img: "communication-negotiation.jpg",
        course: "communication and negotiation",
        link: "communication-negotiation.html",
        desc: "In this course, you will learn how to communicate effectively at work and achieve your goals in the process. This course is designed to give you the tools needed to improve your communication skills and the strategies for using them to your advantage. Furthermore, you will also learn when to cooperate or compete, how to create persuasiveness, ask thoughtful questions and more."
    },
    {
        img: "financial-management.jpg",
        course: "financial management",
        link: "financial-management.html",
        desc: "This course is to provide the students with a basic understanding of the financial reporting process. The main aim is the reporting process and to provide you with an appreciation of the production process that is sufficiently detailed so that you have the ability to analyze and interpret a complex set of financial statement successfully in different context."
    },
    {
        img: "entrepreneurship.jpg",
        course: "entrepreneurship",
        link: "entrepreneurship.html",
        desc: "In this course, you will learn about the act of creating a business while building and scaling it to generate income and revenue. Entrepreneurship is what people do to take your career and dreams into their hands and lead it in their desired direction, that is to say to shape your future with your own hands. By successfully completing this course, you will be on your journey to living the life you wish to live."
    }
    
]
let courseContainer = document.querySelector("#courses-list")

for(let i = 0; i < AMT_OF_COURSES; i++){
    let normalCourseStructure = `<div class="course course${i + 1}">
                                    <div class="course-img">
                                        <img src="images/courses/${course[i].img}" alt="" />
                                    </div>
                                    <div class="course-details">
                                        <h2 class="title">${course[i].course}</h2>
                                        <p class="desc">
                                            ${course[i].desc}
                                        </p>
                                    </div>
                                    <div class="course-enroll">
                                        <a href="${course[i].link}"><span>enroll now!</span></a>
                                    </div>
                                </div>`
    let memberCourseStructure = `<div class="course member-course course${i + 1}">
                                    <div class="course-img">
                                        <img src="images/courses/${course[i].img}" alt="" />
                                    </div>
                                    <div class="course-details">
                                        <h2 class="title">${course[i].course}</h2>
                                        <p class="desc">
                                            ${course[i].desc} 
                                        </p>
                                    </div>
                                    <div class="course-enroll">
                                        <a href="${course[i].link}"><span>enroll now!</span></a>
                                    </div>
                                </div>`
    if(i >= 5) {
        courseContainer.innerHTML += memberCourseStructure
    }else {
        courseContainer.innerHTML += normalCourseStructure
    }
}
