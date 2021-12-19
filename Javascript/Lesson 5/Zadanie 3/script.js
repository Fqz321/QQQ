"use strict";

let n = null;
let num = 0;
let i = 1;
for (let i = 1; i > 0; i++) {
    n = +prompt('Введите числа');
    if (n != 0) {
        num = num + n;
    } 
    else break;
}
alert(`Сумма чисел ${num}`);