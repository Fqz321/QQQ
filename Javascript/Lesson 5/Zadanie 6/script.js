"use strict";

let n = +prompt('Введите число');
let num = 0;

for (let i = 10; i <= 99; i++) {
    num = (i - i % 10) / 10 + i % 10;
    if (num % n == 0) { 
        alert(i);
    }
}