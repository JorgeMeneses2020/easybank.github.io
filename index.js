const hamburguer = document.querySelector("#hamburguesa");
const close = document.querySelector("#close");
const menu = document.querySelector("#menu");


hamburguer.addEventListener('click', () => {

    close.style.display = 'block';
    hamburguer.style.display = 'none';

    menu.style.display = 'block';
    menu.style.transtion = 'all 0.5s ease'

});

close.addEventListener('click', () => {

    close.style.display = 'none';
    hamburguer.style.display = 'block';

    menu.style.display = 'none';


});