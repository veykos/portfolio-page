
const typewriter = document.querySelector(".typewriter")

const Typewriter = window.Typewriter

const type = new Typewriter(typewriter, {
  loop:true,
  delay:75,
})

type.pauseFor(2500)
.typeString('I write code')
.pauseFor(2500)
.deleteChars(12)
.typeString('I love lifting')
.pauseFor(2500)
.deleteChars(14)
.typeString('I am an ex navigational officer')
.pauseFor(2500)
.start();

const myProjects =[
  {
    imgUrl: "placeholder",
    title: "Battleships",
    description: "lorem ipsum lorem ispum lorem ipsum lorem ispum lorem ipsum lorem ispumlorem ipsum lorem ispum lorem ipsum lorem ispumlorem ipsum lorem ispum"
  },
  {
    imgUrl: "placeholder",
    title: "IronGames",
    description: "lorem ipsum lorem ispum lorem ipsum lorem ispum lorem ipsum lorem ispumlorem ipsum lorem ispum lorem ipsum lorem ispumlorem ipsum lorem ispum"
  },
  {
    imgUrl: "placeholder",
    title: "Placeholder",
    description: "lorem ipsum lorem ispum lorem ipsum lorem ispum lorem ipsum lorem ispumlorem ipsum lorem ispum lorem ipsum lorem ispumlorem ipsum lorem ispum"
  },
]

const projectsHolder = document.querySelector(".projects-holder")

for (let project of myProjects) {
    const projectCard = document.createElement("div")

    const projectImage = document.createElement("img")
    projectImage.src = project.imgUrl;
    projectImage.alt = "project-cover"

    const title = document.createElement("h4")
    title.innerHTML = project.title
    const description = document.createElement("p")
    description.innerHTML = project.description
    projectCard.appendChild(projectImage)
    projectCard.appendChild(title)
    projectCard.appendChild(description)
    projectCard.className = "project-card"
    projectsHolder.appendChild(projectCard)
}



const hamburger = document.querySelector(".fa-bars")
const mobileNav = document.querySelector(".mobile-nav")

hamburger.addEventListener("click" , () => {
  mobileNav.classList.toggle("hidden")
})