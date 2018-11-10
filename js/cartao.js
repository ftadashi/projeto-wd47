;(function() {
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
            console.log(event);
            if (event.target.classList.contains('opcoesDoCartao-opcao')
                && (event.key === 'Enter' || event.key === ' ')) {
                    event.target.click();
            }
        });
        cartao.addEventListener('click', function(event) {
            console.log(event);
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