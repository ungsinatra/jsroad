{/* <div class="vac__input"></div>
<button class="vac__btn"></button> */}
const inputName = document.querySelector('.vac__input');
const inputImg = document.querySelector('.vac__img');
const bnt = document.querySelector('.vac__btn');
const vac = document.querySelector('.vac');
const blockCards = document.querySelector('.cards')
const cards = [];


function Vacation(img, name) {
    this.name = name;
    this.image = img;
};
const btnListener = ()=>{
    const inputTxtValue = inputName.value;
    const inputImgValue = inputImg.value;
    cards.push(new Vacation(inputImgValue, inputTxtValue))
    console.log('asdasd')
    console.log(cards);
    render(template)
}
bnt.addEventListener('click',btnListener);

function template(element) {
    return `<div class="card">
    <div class="card__items">
        <h3 class="card__name">${element.name}</h3>
        <img  class = 'card__img'src="${element.image}" alt="${element.name}">
    </div>
</div>`
}
const render = (tmp) => {
    blockCards.innerHTML = '';
    cards.forEach(el => {
        blockCards.innerHTML += tmp(el);
    })
}

