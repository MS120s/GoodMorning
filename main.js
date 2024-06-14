const heartContainer = document.getElementById("hero")
const letter = document.querySelector(".top-cover")
const container = document.querySelector(".container")
const mainLetter = document.querySelector(".letter")

// window.addEventListener("load", ()=>{
  
// })

for(let i = 0; i < 25; i++){
    let position = randInt(1, 95)
    let size = randInt(20, 40)
    let delay = randInt(1, 20)
    let bottom = randInt(30, 100)
    let opac = Math.random()

    let images = document.createElement("img")
    images.src = "Group.png"
    // images.style.position = "absolute"
    images.style.width = size + "px"
    images.style.bottom = `-${bottom}px`
    images.style.opacity = opac
    images.style.animationDelay = delay + "s"
    images.style.left = `${position}%`
    images.classList.add("images")
    heartContainer.appendChild(images)
    console.log(images.src)
}  


function randInt(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}

letter.addEventListener("click", ()=>{
    letter.classList.add("anim-one")
    container.classList.add("anim-two")
    mainLetter.classList.add("anim-three")
    console.log("it's working")
})