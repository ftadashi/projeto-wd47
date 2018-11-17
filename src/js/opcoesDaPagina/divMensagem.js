;(function() {
    'use strict';
    window.mensagem = function(mensagem) {
        const form = document.querySelector('.formNovoCartao');
        const msgErro = document.createElement('div');
        msgErro.classList.add('formNovoCartao-msg');
        msgErro.textContent = mensagem
        const btnSubmit = form.children[form.children.length-1];
        form.addEventListener('animationend', function(event) {
            event.target.remove();
        });
        form.insertBefore(msgErro, btnSubmit);
    };
})();