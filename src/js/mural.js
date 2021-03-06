;const adicionarCartaoNoMural = (function(){
    let numeroDoCartao = 0;
    'use strict';
    const adicionarCartao = function(cartaoObj) {
        numeroDoCartao++;
        const conteudoDoCartao = cartaoObj.conteudo
                                    .replace('\n', '<br>')
                                    .replace(/\*\*(.*)\*\*/g, '<b>$1</b>')
                                    .replace(/\*(.*)\*/g, '<em>$1</em>');
        const corDoCartao = cartaoObj.cor;
        const cartao = $(`
        <article id="cartao_${numeroDoCartao}" tabindex="0" class="cartao">
            <div class="opcoesDoCartao">
            <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0" title="Excluir">
                <svg><use xlink:href="#iconeRemover"></use></svg>
            </button>
            <input type="radio" name="corDoCartao${numeroDoCartao}" value="#EBEF40" id="corPadrão-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
            <label for="corPadrão-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">Padrão</label>
            <input type="radio" name="corDoCartao${numeroDoCartao}" value="#F05450" id="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
            <label for="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">Importante</label>
            <input type="radio" name="corDoCartao${numeroDoCartao}" value="#92C4EC" id="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
            <label for="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">Tarefa</label>
            <input type="radio" name="corDoCartao${numeroDoCartao}" value="#76EF40" id="corInspiração-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
            <label for="corInspiração-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">Inspiração</label>
            </div>
            <p class="cartao-conteudo" contenteditable tabindex="0">${conteudoDoCartao}</p>
        </article>
        `);
        cartao.css('background-color', corDoCartao);
        cartao.on('focusin', function() {
            cartao.addClass('cartao--focado');
        });
        cartao.on('focusout', function() {
            cartao.removeClass('cartao--focado');
        });
        cartao.on('change', ".opcoesDoCartao-radioTipo", function mudaCor(event) {
            cartao.css('background-color', event.target.value);
        });
        cartao.on('keydown', function deixarClicarComEnter(event) {
            if (event.target.classList.contains('opcoesDoCartao-opcao')
                && (event.key === 'Enter' || event.key === ' ') ) {
                event.target.click();
            }
        });
        cartao.on('click', function(event) {
            const elementoSelecionado = event.target;
            if (elementoSelecionado.classList.contains('opcoesDoCartao-remove')) {
                cartao.addClass('cartao--some');
                cartao.on('transitionend', function() {
                    cartao.remove();
                });
            }
        });
        cartao.hide();
        $('.mural').append(cartao);
        cartao.fadeIn('slow');
    };
    
    $.ajax({
        url: 'https://ceep.herokuapp.com/cartoes/carregar'
        ,method: 'GET'
        ,data: {usuario: 'f.tadashi@gmail.com'}
        ,dataType: 'jsonp'
        ,success: (response) => {
            response.cartoes.forEach(adicionarCartao);
            mensagem(`${response.cartoes.length} cartões adicionado`);
        }
    });
    return adicionarCartao;
})();