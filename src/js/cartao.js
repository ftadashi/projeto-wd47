;(function() {
    'use strict';
    function decideTipoCartao(conteudo){
        var quebras = conteudo.split("<br>").length;
        var totalDeLetras = conteudo.replace(/<br>/g, " ").length;
        var ultimoMaior = "";
        conteudo.replace(/<br>/g, " ").split(" ").forEach(function(palavra){
            if (palavra.length > ultimoMaior.length) {
                ultimoMaior = palavra;
            }
        });
        var tamMaior = ultimoMaior.length;
        //no mínimo, todo cartão tem o texto pequeno
        var tipoCartao = "cartao--textoPequeno";
        if (tamMaior < 9 && quebras < 5 && totalDeLetras < 55) {
            tipoCartao = "cartao--textoGrande";
        } else if (tamMaior < 12 && quebras < 6 && totalDeLetras < 75) {
            tipoCartao = "cartao--textoMedio";
        }
        return tipoCartao;
    }
    const cartoes = document.querySelectorAll('.cartao');
    for (let i = 0; i < cartoes.length; i++) {
        const cartao = cartoes[i];
        cartao.addEventListener('focusin', function() {
            cartao.classList.add('cartao--focado');
        });
        cartao.addEventListener('focusout', function() {
            cartao.classList.remove('cartao--focado');
        });
        cartao.addEventListener('change', function() {
            const elementoSelecionado = event.target;
            const isRadioTipo = elementoSelecionado.classList.contains('opcoesDoCartao-radioTipo');
            if (isRadioTipo) {
                cartao.style.backgroundColor = elementoSelecionado.value;
            }
        });
        cartao.addEventListener('keydown', function(event) {
            if (event.target.classList.contains('opcoesDoCartao-opcao')
                && (event.key === 'Enter' || event.key === ' ')) {
                    event.target.click();
            }
        });
        cartao.addEventListener('click', function(event) {
            const elementoSelecionado = event.target;
            if (elementoSelecionado.classList.contains('opcoesDoCartao-remove')) {
                cartao.classList.add('cartao--some');
                cartao.addEventListener('transitionend', function() {
                    cartao.remove();
                });
            }
        });
    }
    const opcoes = document.querySelectorAll('.opcoesDoCartao-opcao');
    for (let i = 0; i < opcoes.length; i++) {
        opcoes[i].classList.remove('no-js');
    }
})();