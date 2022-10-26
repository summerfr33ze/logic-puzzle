const textInputForm = document.querySelector("form")
const textInput = document.querySelector(".text-input")
const details = document.querySelectorAll(".details")
const detailText = document.querySelectorAll(".details > div")
const playButton = document.querySelector(".play-button")

let currentPizza
let currentIndex

details.forEach(detail => detail.addEventListener ("click", (event) =>{
    details.forEach(detail => {
        detail.style.backgroundColor = "#28694a"

    })
    event.currentTarget.style.backgroundColor = "white"
    currentPizza = event.currentTarget.dataset.pizza
    currentIndex = event.currentTarget.dataset.id
    console.log(currentIndex)
    console.log(currentPizza)
}))

textInputForm.addEventListener("submit", (event) => {
    event.preventDefault()
    if(currentPizza === textInput.value){
        detailText[(currentIndex * 2) - 1].style.display = "block"
        detailText[(currentIndex * 2) - 2].style.display = "block"
    }
    else {details[currentIndex - 1].textContent = "You Lose"}

})


playButton.addEventListener("click", () => {
detailText[0].style.display = "block"
detailText[1].style.display = "block"
})
