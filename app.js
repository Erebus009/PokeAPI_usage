const pokeNumbers = 151;
const container = document.querySelector(".pokemon-container");

const fetchPokemon = async () => {
  for (let i = 1; i <= pokeNumbers; i++) {
    await GETPokemon(i);
  }
};

const GETPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  console.log(pokemon);
  create(pokemon);
};

fetchPokemon();

function create(pokemon) {
  const pokemonEL = document.createElement("div");
  pokemonEL.classList.add("pokemonBox");

  const pokeInnerHtml = `
   
    
    ${capitalizeFirstLetter(pokemon.name)} || Height: ${heightConversionFeet(pokemon.height)}'Ft
    <img src=${pokemon.sprites.front_default}>
     ${pokemon.types[0].type.name}
    
    `;
  pokemonEL.innerHTML = pokeInnerHtml;

  container.appendChild(pokemonEL);
}

function heightConversionFeet(decimeter) {
  let converted = decimeter * 0.34;
  let rounded = converted.toFixed(2);

  return rounded;
}

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }