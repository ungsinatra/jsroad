const inputName = document.querySelector('.vac__input');
const inputImg = document.querySelector('.vac__img');
const bnt = document.querySelector('.vac__btn');
const vac = document.querySelector('.vac');
const blockCards = document.querySelector('.cards')

class Vacation{
    constructor(name,img){
        this.name = name;
        this.img = img;
    }
    cards = [];
}

class Render extends Vacation{
    constructor(name,img){
        super(name,img);
    }


    templates(element){
        return `<div class="card">
    <div class="card__items">
        <h3 class="card__name">${element.name}</h3>
        <img  class = 'card__img'src="${element.image}" alt="${element.name}">
    </div>
</div>`
    }
    render(tmp){
        blockCards.innerHTML = '';
        this.cards.forEach(el => {
        blockCards.innerHTML += tmp(el);
    })
    }
}

class BtnListener extends Render{
    constructor(name,img){
        super(name,img);
    }
    click(){
        const inputTxtValue = inputName.value;
        const inputImgValue = inputImg.value;
        this.cards.push(new Vacation(inputImgValue, inputTxtValue))
        console.log('asdasd')
        console.log(this.cards);
        this.render.call(this,this.templates)
    }
}
bnt.addEventListener('click',BtnListener.click);
