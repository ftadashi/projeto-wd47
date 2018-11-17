;(function() {
    'use strict';
    const btnAdicionar = $('#btnAdicionar');
    const formNovoCartao = $('.formNovoCartao');
    btnAdicionar.on('click', function() {
        formNovoCartao.slideDown(1000);
        $('.formNovoCartao-conteudo').focus();
    });
    window.esconderFormulario = function(duration) {
        const d = (duration) ? duration : 1000 * 3;
        formNovoCartao.slideUp(d);
    };
    esconderFormulario();
    btnAdicionar.removeClass('no-js');
})();