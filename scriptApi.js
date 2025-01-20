let pokemons = [];

const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

let limit = 10;
let offSet = 0;
let total = 0;
let totalPages = 0;

async function fetchPokemonApi(url) {
    const result = await fetch(url);
    const resultJson = await result.json();
    const resultEspecie = await fetch(resultJson.species.url);
    const resultJsonEspecie = await resultEspecie.json();
    resultJson.color = resultJsonEspecie.color;

    return resultJson;
}

async function fetchTodosApi() {
    const url = `${baseUrl}?limit=${limit}&offset=${offSet}`;
    const result = await fetch(url);
    const pokemonsResult = await result.json();
    const pokemonList = pokemonsResult.results;

    const promises = pokemonList.map(async (pokemon) => {
        const namePokemon = await fetchPokemonApi(pokemon.url);

        return namePokemon;
    });

    pokemons = await Promise.all(promises);
    popularTela();
}

fetchTodosApi();

function popularTela() {
    const divs = document.querySelectorAll(".card");
    pokemons.forEach((pokemon, index) => {
        const color = pokemon.color;
        const nomePokemon = pokemon.species.name;
        const imagemPokemon = pokemon.sprites.front_default;
        const card = divs[index];
        const img = card.querySelector("img");
        img.src = imagemPokemon;
        const name = card.querySelector("span");
        name.innerText = nomePokemon;
        card.setAttribute("style", `background-color:${color.name}`);
    });
}

async function proxima() {
    offSet = offSet + limit;
    await fetchTodosApi();
}

async function anterior() {
    offSet = offSet - limit;
    await fetchTodosApi();
}
