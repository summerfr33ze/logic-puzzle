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
    event.currentTarget.style.backgroundColor = "#c23329"
    currentPizza = event.currentTarget.dataset.pizza
    currentIndex = event.currentTarget.dataset.id
    console.log(currentIndex)
    console.log(currentPizza)
}))

textInputForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const pizzaTypesArray = ["c","s","b","p","v"]
    const index = pizzaTypesArray.indexOf(currentPizza)
    if (index !== -1){
        pizzaTypesArray.splice(index, 1)
    }

    
    if(textInput.value === currentPizza || textInput.value === currentPizza.toUpperCase()){
        detailText[(currentIndex * 2) - 1].style.display = "block"
        detailText[(currentIndex * 2) - 2].style.display = "block"
    }

    else if (pizzaTypesArray.includes(textInput.value)) {
        details.forEach(detail => {
            detail.textContent = ""
        })
        details[currentIndex - 1].textContent = "You Lose"

    }

    else return

})



playButton.addEventListener("click", () => {
detailText[0].style.display = "block"
detailText[1].style.display = "block"
})
