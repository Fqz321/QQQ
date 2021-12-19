"use strict";

let randomNumber = prompt('Введите число от 100 до 999');

if (randomNumber >= 100 && randomNumber <= 999) {
    alert(randomNumber);
}
else {
    alert('нужно от 100 до 999');
}