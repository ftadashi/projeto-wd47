;(function() {
    const btnSync = $('#btnSync');
    btnSync.on('click', function() {
        btnSync.addClass('botaoSync--esperando');
        btnSync.removeClass('botaoSync--sincronizado');
        const salvadorDeCartoes = new XMLHttpRequest();
        salvadorDeCartoes.open('json', 'https://ceep.herokuapp.com/cartoes/salvar');
        salvadorDeCartoes.setRequestHeader('Content-Type', 'application/json');
        const cartoes = document.querySelectorAll('.cartao');
        const infosDoMural = {
            usuario: 'f.tadashi@gmail.com'
            , cartoes: Array.from($('.cartao')).map(function(cartao) {
                
            })
        };
    });
})();