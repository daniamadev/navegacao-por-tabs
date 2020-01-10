const tabImagens = document.querySelectorAll('.js-imagens img');
const tabConteudo = document.querySelectorAll('.js-content div');
tabConteudo[0].classList.add('ativo');

//adicionar classe ativo aos paragrafos
function adicionarAtivo(index) {
    tabConteudo.forEach((item) => {
        item.classList.remove('ativo');
    });
    tabConteudo[index].classList.add('ativo');
}

tabImagens.forEach((item, index) => {
    item.addEventListener('click', () => {
        adicionarAtivo(index);
    });
});

