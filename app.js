let numberContainer = document.querySelector('.raiting');
let rateNumber = document.querySelector('.thanks__number');
let submit = document.querySelector('.card__submit');
let raiting = document.querySelector('.card-state');
let thanks = document.querySelector('.card-thanks');

numberContainer.addEventListener('click', event=>{
    let numberSelect = event.target.innerText;
    rateNumber.innerText =numberSelect;
});

submit.addEventListener('click', ()=>{
    raiting.style.display = 'none';
    thanks.style.display = 'flex';
});