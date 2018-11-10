;(function() {
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

            })
        };
        salvadorDeCartoes.send(JSON.stringify(infosDoMural));
        salvadorDeCartoes.addEventListener('load', function() {
            const response = JSON.parse(salvadorDeCartoes.response);
            console.log(`${response.quantidade} cartões salvos em ${response.usuario}`);
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