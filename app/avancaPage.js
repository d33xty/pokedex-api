const botoes = document.querySelectorAll('.botao-page');
const pageAtual = document.getElementById('pageAtual');
var pageAtualVar = parseFloat(pageAtual.textContent);

botoes.forEach(botao => botao.addEventListener('click', () => {
    if(botao.id == 'retroceder'){
        if (paginaAtual != 0) {
            elementoPrimariaLista.innerHTML = '';
            paginaAtual -= 20;
            getListaPokemons();
            pageAtual.textContent = pageAtualVar -= 1;
        }
    }else{
        elementoPrimariaLista.innerHTML = '';
        paginaAtual += 20;
        getListaPokemons();
        if (pageAtualVar < parseInt(limitePage.textContent)) {
            pageAtual.textContent = pageAtualVar += 1;
        }
    }
}));