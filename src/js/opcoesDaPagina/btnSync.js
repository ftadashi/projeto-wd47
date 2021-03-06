;(function() {
    'use strict';
    const btnSync = $('#btnSync');
    btnSync.on('click', function() {
        btnSync.addClass('botaoSync--esperando');
        btnSync.removeClass('botaoSync--sincronizado');
        const salvadorDeCartoes = new XMLHttpRequest();
        salvadorDeCartoes.open('POST', 'https://ceep.herokuapp.com/cartoes/salvar');
        salvadorDeCartoes.setRequestHeader('Content-Type', 'application/json');
        const cartoes = document.querySelectorAll('.cartao');
        const infosDoMural = {
            usuario: 'f.tadashi@gmail.com'
            , cartoes: Array.from($('.cartao')).map(function(cartao) {
                return {
                    conteudo: cartao.querySelector('.cartao-conteudo').textContent
                    ,cor: getComputedStyle(cartao).getPropertyValue('background-color')
                };
            })
        };
        salvadorDeCartoes.send(JSON.stringify(infosDoMural));
        salvadorDeCartoes.addEventListener('load', function() {
            const response = JSON.parse(salvadorDeCartoes.response);
            const msg = `${response.quantidade} cartões salvos em ${response.usuario}`;
            mensagem(msg);
            btnSync.removeClass('botaoSync--esperando');
            btnSync.addClass('botaoSync--sincronizado');
        });
        salvadorDeCartoes.addEventListener('error', function() {
            btnSync.removeClass('botaoSync--esperando');
            btnSync.addClass('botaoSync--deuRum');
        });
    });
    btnSync.removeClass('no-js');
})();