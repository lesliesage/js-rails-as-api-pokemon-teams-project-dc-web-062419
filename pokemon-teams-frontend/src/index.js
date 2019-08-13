const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`
document.addEventListener("DOMContentLoaded", function() {
    fetchTrainers()
})

function fetchTrainers() {
    fetch(TRAINERS_URL)
    .then(resp => resp.json())
    .then(data => data.forEach(trainer => renderTrainer(trainer)))
}

function renderTrainer(trainer) {
    const main = document.querySelector('main')
    const newCard = document.createElement('div')
    const newP = document.createElement('p')
    const newBttn = document.createElement('button')
    const newUl = document.createElement('ul')

    newCard.className = "card" 
    newCard.dataset.id = trainer.id
    newP.innerText = trainer.name
    newBttn.innerText = "Add Pokemon"
    newBttn.dataset.trainerId = trainer.id
    newBttn.addEventListener("click", addPokemon)
    
    newCard.appendChild(newP)
    main.appendChild(newCard)
    newCard.appendChild(newBttn)
    newCard.appendChild(newUl)

    trainer.pokemons.forEach((pokemon) => {renderPokemon(pokemon, newUl)})
}

function addPokemon(e) {
    const tId = e.target.dataset.trainerId
    const thisUl = e.currentTarget.parentElement.querySelector("ul")
    if (thisUl.childElementCount < 6) {
        fetch(POKEMONS_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({trainer_id: tId})
        })
        .then(resp => resp.json())
        .then(data => renderPokemon(data, thisUl))
    } else {
        alert("ONLY 6 POKEMONS PER TRAINER.")
    }
}

function renderPokemon(pokemon, thisUl) {
    const newLi = document.createElement('li')
    const releasebttn = document.createElement('button')

    newLi.innerText = `${pokemon.nickname} (${pokemon.species})`
    releasebttn.innerText = "Release"
    releasebttn.className = "release"
    releasebttn.dataset.pokemonId = pokemon.id

    thisUl.appendChild(newLi)
    newLi.appendChild(releasebttn)

    releasebttn.addEventListener("click", removePokemon)
}

function removePokemon(e) {
    pId = e.target.dataset.pokemonId
    fetch(`${POKEMONS_URL}/${pId}`, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"}
    })
    .then(resp => resp.json())
    .then(json => e.target.parentElement.remove())
}

