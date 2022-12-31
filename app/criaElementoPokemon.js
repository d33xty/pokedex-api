async function buscaPokemon(pokemonNome) {
    try{
        erro.innerHTML = '';
        const apiPokemonAtual = await fetch(pokemonApi + pokemonNome);
        const res = await apiPokemonAtual.json();
        console.log(res);
        const pokemon = {
            id: res.id,
            nome: pokemonNome,
            sprite: res.sprites.front_default,
            tipo: res.types
        }
        criaELementoPokemon(pokemon);
    }catch{
        erro.textContent = 'pokemon não encontrado'
    }
}

function criaELementoPokemon(pokemonAtual) {
    var tipos = [];
    pokemonAtual.tipo.forEach(tipo => {
        tipos.push(tipo.type.name);
    });
    if (tipos.length > 1) {
        elementoPrimariaLista.innerHTML += `
        <div class="pokemon-container">
            <p class="pokemon-nome">${pokemonAtual.nome}</p>
            <img class="pokemon-sprite" src="${pokemonAtual.sprite}" alt="descrição do pokemon: ${pokemonAtual.nome}">
            <p class="tipos__tittle">tipo:</p>
            <div class="tipos__container">
                <p class="pokemon-type ${tipos[0]}">${tipos[0]}</p>
                <p class="pokemon-type ${tipos[1]}" >${tipos[1]}</p>
            </div>
        </div>
        `
    }else{
        elementoPrimariaLista.innerHTML += `
        <div class="pokemon-container">
            <p class="pokemon-nome">${pokemonAtual.nome}</p>
            <img class="pokemon-sprite" src="${pokemonAtual.sprite}" alt="descrição do pokemon: ${pokemonAtual.nome}">
            <p class="tipos__tittle">tipo:</p>
            <div class="tipos__container">
                <p class="pokemon-type ${tipos[0]}">${tipos[0]}</p>
            </div>
        </div>
        `
        
    }
}

