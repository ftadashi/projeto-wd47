function randomColor() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}
;(function(){
    const msgs = [
        { conteudo: 'Bem vindo', cor: randomColor() }
        ,{ conteudo: 'Clique no botão', cor: randomColor() }
    ];
    const btnAjuda = document.querySelector('#btnAjuda');
    btnAjuda.addEventListener('click', function() {
        msgs.forEach(function(msg) {
            adicionarCartaoNoMural(msg);
        });
        // const xhr = new XMLHttpRequest();
        // xhr.open('json', 'https://ceep.herokuapp.com/cartoes/instrucoes');
        // /* xhr.responseType = 'json'; */
        // xhr.send();
        // xhr.addEventListener('load', function() {
        //     const objeto = xhr.response;
        //     const ajudas = objeto.instrucoes;
        //     ajudas.forEach(function(ajuda) {
        //         adicionarCartaoNoMural(ajuda);
        //     });
        // });
    });
    btnAjuda.classList.remove('no-js');
})();