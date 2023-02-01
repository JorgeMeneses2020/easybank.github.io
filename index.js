const hamburguer = document.querySelector("#hamburguesa");
const close = document.querySelector("#close");
const menu = document.querySelector("#menu");
const info = document.querySelector("#info");
const cards = document.querySelector("#cards");
const articles = document.querySelector("#articles");
const news = document.querySelector("#news");

hamburguer.addEventListener('click', () => {

    close.style.display = 'block';
    hamburguer.style.display = 'none';
    // ]info.style.opacity = '0.5';
    menu.style.display = 'block';
    info.classList.add('opacity');
    articles.classList.add('opacity');
    cards.classList.add('opacity');
    news.classList.add('opacity');
    menu.style.transtion = 'all 0.5s ease'


});

close.addEventListener('click', () => {

    close.style.display = 'none';
    hamburguer.style.display = 'block';
    info.classList.remove('opacity');
    cards.classList.remove('opacity');
    articles.classList.remove('opacity');
    news.classList.remove('opacity');
    menu.style.display = 'none';


});