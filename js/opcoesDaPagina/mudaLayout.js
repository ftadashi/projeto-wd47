;(function(){
    const btn = document.querySelector('#btnMudaLayout');
    const mural = document.querySelector('.mural');
    function mudaTexto() {
        btn.textContent = 
            btn.textContent == 'Blocos'
                ? 'Linhas' 
                : 'Blocos';
    }
    function mudaLayout() {
        mural.classList.toggle('mural--linha');
    }
    btn.addEventListener('click', mudaTexto);
    btn.addEventListener('click', mudaLayout);
    btn.classList.remove('no-js');
})();