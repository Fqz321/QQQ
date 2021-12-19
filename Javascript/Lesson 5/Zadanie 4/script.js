"use strict";

let n = 0;
let num = +prompt('Введите натуральное число');

for (let i = 0; i <= num; i++) {
    n += i;
}
alert(`Сумма чисел равно ${n}`);
