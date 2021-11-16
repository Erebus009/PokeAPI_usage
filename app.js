const pokeNumbers = 151;
const container = document.querySelector(".pokemon-container");
const colors = {
  fire: "#E85211",
  grass: "#25E811",
  electric: "#FFF230",
  water: "blue",
  bug: "green",
  poison: "purple",
  ice: "#5EFAF7",
  rock: "brown",
  normal: "gray",
  ground: "brown",
  fairy: "pink",
  fighting: "orange",
  psychic: "#261385",
  dragon: "#DC1B5C",
};

const main_types = Object.keys(colors);

console.log(main_types);

const fetchPokemon = async () => {
  for (let i = 1; i <= pokeNumbers; i++) {
    await GETPokemon(i);
  }
};

const GETPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  create(pokemon);
};

fetchPokemon();

function create(pokemon) {
  const pokemonEL = document.createElement("div");
  pokemonEL.classList.add("pokemonBox");
  const poke_types = pokemon.types.map((el) => el.type.name);
  const type = main_types.find((type) => poke_types.indexOf(type) > -1);
  const pokeInnerHtml = `
   
    
    <h1 class="pokemonName">${capitalizeFirstLetter(pokemon.name)}</h1> 
    <p>Height: ${heightConversionFeet(pokemon.height)}'Ft</p> 
    <img class="pokeimg" src=${pokemon.sprites.front_default}>
     <p class="type">${poke_types}</p>
    
    `;
  pokemonEL.innerHTML = pokeInnerHtml;
  const color = colors[type];
  pokemonEL.style.backgroundColor = color;
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
