"use strict";

let numberName = +prompt('Оцените качество обслуживания от 1 до 5');

switch (numberName) {
    case 1:
        alert('1 - это плохо');
        break;
    case 2:
        alert('2 - это неудовлетворительно');
        break;
    case 3:
        alert('3 - это хорошо');
        break;
    case 4:
        alert('4 - это хорошо');
        break;
    case 5:
        alert('5 - это отлично');
        break;
    default:
        alert('Ну просили же от 1 до 5, ну Ё маЁ');
}