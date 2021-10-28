'use strict';

let btnFlower = document.querySelector('.btn-flower');
let btnToys = document.querySelector('.btn-toys');
let app = document.querySelector('.app');
let buttonNext = document.querySelector('.button-next');
let inputGroup = document.querySelector('.input-group');

btnToys.addEventListener('click', () => {
    app.classList.add('toy');
    btnToys.classList.add('btn-active');
    btnFlower.classList.remove('btn-active');
})

btnFlower.addEventListener('click', () => {
    app.classList.remove('toy');
    btnToys.classList.remove('btn-active');
    btnFlower.classList.add('btn-active');
})
//Сообщение о не правильном вводе телефона
buttonNext.addEventListener('click', event => {
    let phoneInput = document.querySelector('.phone-input');
    event.preventDefault();
    let regStr = /\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}\s?\d{2}\s?\d{2}/;
//проверка соотвествия заполненной информацией перед отправкой на сервер
    if (regStr.test(phoneInput.value)) {
        let textWrong = document.querySelector('.text-wrong');
        if (!!textWrong) textWrong.remove();
        inputGroup.submit();

    } else {
        phoneInput.insertAdjacentHTML('afterend', `
        <p class = "text-wrong">Введите номер телефона в указанном формате: (900) 999 00 00</p>
        `)
    }
})