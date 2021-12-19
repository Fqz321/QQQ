"use strict";

let age = +prompt('Введите Ваш возраст, путник');

function showMessage() {
    const message = ('Добро пожаловать');
    if (age >= 16) {
        alert(message);
    }
    else {
        alert('Вам еще рано сюда заходить');
    }
}
showMessage();