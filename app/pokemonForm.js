const pokemonForm = document.getElementById('form-pokemon');
const botaoForm = document.querySelector('#botao-voltar');
const pokemonInput = pokemonForm.querySelector('#search-pokemon')
const botoesPage = document.querySelector('.botoes-page');


pokemonForm.addEventListener('submit', (event) =>{
    event.preventDefault();
    elementoPrimariaLista.innerHTML = '';
    buscaPokemon(pokemonInput.value.toLowerCase());
    botaoForm.classList.remove('hidden');
    botoesPage.classList.add('hidden');
    pokemonInput.value = '';
})

botaoForm.addEventListener('click', () => voltaLista());

async function voltaLista(){
    elementoPrimariaLista.innerHTML = '';
    mostraPokemonNaTela(listaAtualDePokemons.results)
    botaoForm.classList.add('hidden');
    botoesPage.classList.remove('hidden');
}

