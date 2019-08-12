const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`
document.addEventListener("DOMContentLoaded", function() {
    
    fetchTrainers()
    
    
})

function fetchTrainers() {
    
    fetch(TRAINERS_URL).then(resp => resp.json()).then(data => {console.log(data)
        data.forEach(trainer => renderTrainer(trainer))
    })
    
}

function renderTrainer(trainer) {
    console.log(trainer)
    // const trainerDiv = document.querySelector("#trainer-container")
    const main = document.querySelector('main')
    let newCard = document.createElement('div')
    newCard.className = "card" 
    newCard.dataset.id = trainer.id
    let newP = document.createElement('p')
    newP.innerText = trainer.name
    newCard.appendChild(newP)
    main.appendChild(newCard)

    let newBttn = document.createElement('button')
    newBttn.innerText = "Add Pokemon"
    newBttn.dataset.trainerId = trainer.id
    newCard.appendChild(newBttn)

    let newUl = document.createElement('ul')
    newCard.appendChild(newUl)
    trainer.pokemons.forEach((pokemon) => {
    let newLi = document.createElement('li')
    newLi.innerText = `${pokemon.nickname} (${pokemon.species})`
    newUl.appendChild(newLi)
    
    let releasebttn = document.createElement('button')
    releasebttn.innerText = "Release"
    releasebttn.className = "release"
    releasebttn.dataset.pokemonId = pokemon.id
    newLi.appendChild(releasebttn)

    })



}



