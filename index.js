
const typewriter = document.querySelector(".typewriter")

const Typewriter = window.Typewriter

const type = new Typewriter(typewriter, {
  loop:true,
  delay:75,
})

type.pauseFor(2500)
.typeString('love coding')
.pauseFor(2500)
.deleteChars(11)
.typeString('live in Berlin')
.pauseFor(2500)
.deleteChars(14)
.typeString('am learning every day')
.pauseFor(2500)
.deleteChars(21)
.typeString('am looking for a job')
.pauseFor(2500)
.deleteChars(20)
.typeString('used to navigate ships')
.pauseFor(2500)
.deleteChars(22)
.typeString('enjoy CSS')
.pauseFor(2500)
.deleteChars(9)
.typeString('love lifting weights')
.pauseFor(2500)
.deleteChars(20)
.typeString('can actually cook')
.pauseFor(2500)
.deleteChars(17)
.typeString('read old Sci-Fi books')
.pauseFor(2500)
.deleteChars(21)
.start();

const myProjects =[
  {
    imgUrl: "https://res.cloudinary.com/dxc2oj7lt/image/upload/v1665419920/sportUp-users-gallery/sportup_xronm7.jpg",
    title: "SportUP",
    url: "https://sportup-app.netlify.app/",
    description: "Together with a classmate at Ironhack collaborated to make a full stack app that would go on to win the Hackshow - a contest for the best projects from all the alumni. We used React on the front end and we created a RESTful API using NodeJS, ExpressJS, MongoDB and Mongoose. All of that in just under 7 days!"
  },
  {
    imgUrl: "https://res.cloudinary.com/dxc2oj7lt/image/upload/v1664655270/battleships_k3otqq.jpg",
    title: "Battleships",
    url: "https://github.com/veykos/Battleships",
    description: "A clone of the popular board game 'Battleships' with an opponent with a decision making algorithm. Players are able to set up their fleet and rotate the ships to be vertically or horizontally placed on the board and to make the gameplay more dynamic I added two special attacks. Utilized JS classes and DOM manipulation and finished the project in under 4 days!"
  },
  {
    imgUrl: "https://res.cloudinary.com/dxc2oj7lt/image/upload/v1664656157/irongames_szksij.jpg",
    title: "IronGames",
    url: "https://irongames.cyclic.app/",
    description: "A project I created together with a classmate from IronHack. A gallery for games made by Ironhack alumni. The project was created in 4 days and used to practice server side rendering and CRUD operations. The website supports users signing up and logging in utilizing PassportJS, holding a user session using Express-sessions. We created the server using NodeJS, ExpressJS, Mongoose and the rendering is done using HandlebarsJS."
  },
]

const projectsHolder = document.querySelector(".projects-holder")

for (let project of myProjects) {
    const projectCard = document.createElement("div")
    const projectImage = document.createElement("img")
    projectImage.src = project.imgUrl;
    projectImage.alt = "project-cover"
    const textHolder = document.createElement("article")
    const title = document.createElement("h4")
    const linkToProject = document.createElement("a")
    linkToProject.href = project.url
    linkToProject.innerHTML = "Check it out"
    title.innerHTML = project.title
    const description = document.createElement("p")
    description.innerHTML = project.description

    textHolder.appendChild(title)
    textHolder.appendChild(description)
    textHolder.appendChild(linkToProject)
    projectCard.appendChild(projectImage)
    projectCard.appendChild(textHolder)
    projectCard.className = "project-card"
    projectsHolder.appendChild(projectCard)
}




const hamburger = document.querySelector(".fa-bars")
const mobileNav = document.querySelector(".mobile-nav")
const mobileNavLi = document.querySelectorAll(".mobile-nav>ul>li")

hamburger.addEventListener("click" , () => {
  mobileNav.classList.toggle("hidden")
})

mobileNavLi.forEach(li => {
  li.addEventListener('click', () => {
    mobileNav.classList.toggle("hidden")
  })
})