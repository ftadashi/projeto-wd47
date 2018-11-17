;(function() {
    'use strict';
    let numeroDoCartao = 0;
    window.randomColor = function() {
        return '#' + Math.floor(Math.random()*16777215).toString(16);
    };
    const form = document.querySelector('.formNovoCartao');
    const textarea = form.querySelector('.formNovoCartao-conteudo');
    function criarCartao(event) {
        event.preventDefault();
        const isTextAreaVazio = textarea.value.trim().length === 0;
        if (isTextAreaVazio) {
            mensagem("Formulário inválido. Não digite vários nada!");
        }
        else {
            adicionarCartaoNoMural({
                conteudo: textarea.value
                ,cor: randomColor()
            });
            mensagem('Cartão salvo com sucesso.');
            textarea.value = '';
        }
    }
    form.addEventListener('submit', function(event) {
        criarCartao(event);
    });
    textarea.addEventListener('keypress', function(event) {
        if (event.ctrlKey && event.key === 'Enter') {
            criarCartao(event)
        }
    });
    form.classList.remove('no-js');
})();
