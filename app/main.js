const pokemonApi = 'https://pokeapi.co/api/v2/pokemon/';
const elementoPrimariaLista = document.getElementById('lista-pokemon');
var paginaAtual = 0;
const erro = document.getElementById('erro');
const limitePage = document.getElementById('limitePage');

let listaAtualDePokemons = [];
getListaPokemons();

async function getListaPokemons() {
    const res = await (await fetch(pokemonApi)).json()
    res.next = `https://pokeapi.co/api/v2/pokemon/?offset=${paginaAtual}&limit=20`
    const resAtualizado = await fetch(res.next);
    listaAtualDePokemons = await resAtualizado.json();
    limitePage.textContent = parseInt(res.count / 20);

    mostraPokemonNaTela(listaAtualDePokemons.results)
}


async function mostraPokemonNaTela(lista) {
    lista.forEach(pokemon => {
        buscaPokemon(pokemon.name);
    });
} 
