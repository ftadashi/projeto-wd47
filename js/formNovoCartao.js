;(function() {
    const form = document.querySelector('.formNovoCartao');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const textarea = form.querySelector('.formNovoCartao-conteudo');
        const isTextAreaVazio = textarea.nodeValue.trim().length === 0;
        if (isTextAreaVazio) {
            const msgErro = document.createElement('div');
            msgErro.classList.add('formNovoCartao-msg');
        }
    });
})();