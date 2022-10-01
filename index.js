
const typewriter = document.querySelector(".typewriter")

const Typewriter = window.Typewriter

const type = new Typewriter(typewriter, {
  loop:true,
  delay:75,
})

type.pauseFor(2500)
.typeString('write code')
.pauseFor(2500)
.deleteChars(10)
.typeString('love lifting weights')
.pauseFor(2500)
.deleteChars(20)
.typeString('used to navigate ships')
.pauseFor(2500)
.deleteChars(22)
.typeString('can actually cook')
.pauseFor(2500)
.deleteChars(17)
.start();

const myProjects =[
  {
    imgUrl: "https://res.cloudinary.com/dxc2oj7lt/image/upload/v1664655270/battleships_k3otqq.jpg",
    title: "Battleships",
    description: "A clone of the popular board game 'Battleships' created with DOM manipulation and JavaScript. I added two special attacks and an opponent that could beat you if you are not careful."
  },
  {
    imgUrl: "https://res.cloudinary.com/dxc2oj7lt/image/upload/v1664656157/irongames_szksij.jpg",
    title: "IronGames",
    description: "lorem ipsum lorem ispum lorem ipsum lorem ispum lorem ipsum lorem ispumlorem ipsum lorem ispum lorem ipsum lorem ispumlorem ipsum lorem ispum"
  },
  {
    imgUrl: "placeholder",
    title: "Project 3",
    description: "lorem ipsum lorem ispum lorem ipsum lorem ispum lorem ipsum lorem ispumlorem ipsum lorem ispum lorem ipsum lorem ispumlorem ipsum lorem ispum"
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
    title.innerHTML = project.title
    const description = document.createElement("p")
    description.innerHTML = project.description
    textHolder.appendChild(title)
    textHolder.appendChild(description)
    projectCard.appendChild(projectImage)
    projectCard.appendChild(textHolder)
    projectCard.className = "project-card"
    projectsHolder.appendChild(projectCard)
}



const hamburger = document.querySelector(".fa-bars")
const mobileNav = document.querySelector(".mobile-nav")

hamburger.addEventListener("click" , () => {
  mobileNav.classList.toggle("hidden")
})