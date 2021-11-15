


const pokeNumbers = 7
const container = document.querySelector('.pokemon')



const fetchPokemon = async () => {
    for(let i = 1; i<=pokeNumbers;i++){
        await GETPokemon(i)
    }
}


const GETPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url)
    const pokemon = await res.json()
    console.log(pokemon);
    create(pokemon)
}

fetchPokemon()

function create(pokemon){
    const pokemonEL = document.createElement("div")
    pokemonEL.classList.add('pokemonBox')

    const pokeInnerHtml =`
    ${pokemon.name +  heightConversion(pokemon.height)}
    <img src=${pokemon.sprites.front_default}>
    `;
    pokemonEL.innerHTML = pokeInnerHtml

    container.appendChild(pokemonEL)
}

function heightConversion(decimeter){
    let converted = decimeter *  0.34
    parseInt(converted)
    return converted

}