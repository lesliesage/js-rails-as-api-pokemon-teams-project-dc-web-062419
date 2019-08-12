const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`
document.addEventListener("DOMContentLoaded", function() {
    const trainerDiv = document.querySelector("#trainer-container")




})

function fetchTrainers() {

}

function renderTrainer(trainer) {
    let newCard = document.createElement('div')
    newCard.className = "card" 
    newCard.dataset.id = trainer.id

    let newBttn = document.createElement('button')
    newBttn.innerText = "Add Pokemon"
    newBttn.dataset.trainer-id = trainer.id
    newCard.appendChild(newBttn)

    let newUl = document.createElement('ul')
    
    let newLi = document.createElement('li')



}



