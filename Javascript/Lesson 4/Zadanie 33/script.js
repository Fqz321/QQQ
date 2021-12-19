"use strict";

let date = new Date();
let h = date.getHours();

let nam = prompt('Введите Ваше имя, пожалуйста');

switch (h) {
    case 22:
    case 23:
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        alert(`Доброй ночи, ${nam}`);
        break;
    case 7:
    case 8:
    case 9:
    case 10:
        alert(`Доброе утро, ${nam}`);
        break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
        alert(`Добрый день, ${nam}`);
        break;
    case 18:
    case 19:
    case 20:
    case 21:
        alert(`Добрый вечер, ${nam}`);
        break;
}