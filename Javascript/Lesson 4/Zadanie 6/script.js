"use strict";

const n = prompt('Количество долек по вертикали');
const m = prompt('Количество долек по горизонтали');
const k = prompt('Сколько долек отломить');

switch (k) {
    case n:
        alert('Можно по вертикали');
        break;
    case m:
        alert('Можно по горизонтали');
        break;
    default:
        alert('Не выйдет');
}