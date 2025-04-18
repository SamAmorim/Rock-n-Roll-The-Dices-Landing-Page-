let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let containers = document.querySelector('.container');
let items = containers.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicators');
let dots = indicator ? indicator.querySelectorAll('ul li') : [];
let section = document.querySelector('section'); // Adiciona referência à section

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

const colors = [
    '#ffd000a5', // Cor para o primeiro slide
    '#ff5733a5', // Cor para o segundo slide
    '#33ff57a5'  // Cor para o terceiro slide
    // Adicione mais cores se tiver mais slides
];

function setSider() {
    let itemOld = containers.querySelector('.item.active');

    if (itemOld) {
        itemOld.classList.remove('active');
    }
    let dotsOld = indicator.querySelector('ul li.active');

    if (dotsOld) {
        dotsOld.classList.remove('active');
    }

    dots[active].classList.add('active');
    indicator.querySelector('.number').innerHTML = `0${active + 1}`;

}

prevButton.onclick = () => {
    active = active - 1 < firstPosition ? lastPosition : active - 1;
    setSider();
    items[active].classList.add('active');
}

nextButton.onclick = () => {
    active = active + 1 > lastPosition ? 0 : active + 1;
    setSider();
    items[active].classList.add('active');
}