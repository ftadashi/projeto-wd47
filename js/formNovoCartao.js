;(function() {
    let numeroDoCartao = 0;
    const form = document.querySelector('.formNovoCartao');
    const textarea = form.querySelector('.formNovoCartao-conteudo');
    function criarCartao(event) {
        event.preventDefault();
        const isTextAreaVazio = textarea.value.trim().length === 0;
        if (isTextAreaVazio) {
            const msgErro = document.createElement('div');
            msgErro.classList.add('formNovoCartao-msg');
            msgErro.textContent = "Formulário inválido. Não digite vários nada!"
            const btnSubmit = form.children[form.children.length-1];
            form.addEventListener('animationend', function(event) {
                event.target.remove();
            });
            form.insertBefore(msgErro, btnSubmit);
        }
        else {
            adicionarCartaoNoMural({conteudo: textarea.value});
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
