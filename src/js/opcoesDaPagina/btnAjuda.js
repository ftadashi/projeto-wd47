;(function() {
    'use strict';
    let ajudas = [];
    const btnAjuda = document.querySelector('#btnAjuda');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://ceep.herokuapp.com/cartoes/instrucoes');
    xhr.responseType = 'json';
    xhr.send();
    xhr.addEventListener('load', function() {
        ajudas = xhr.response.instrucoes;
    });
    btnAjuda.addEventListener('click', function() {
        if (ajudas.length > 0) {
            ajudas.forEach(function(ajuda) {
                adicionarCartaoNoMural(ajuda);
            });
        }
    });
    btnAjuda.classList.remove('no-js');
})();