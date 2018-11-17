;(function() {
    'use strict';
    const btnAdicionar = $('#btnAdicionar');
    const formNovoCartao = $('.formNovoCartao');
    btnAdicionar.on('click', function() {
        $('.formNovoCartao-conteudo').focus();
    });
    btnAdicionar.removeClass('no-js');
})();