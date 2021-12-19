"use strict";

function calcSt(num1, num2) {
    let result = num1;
    for (let i = 1; i < num2; i++) {
        result *= num1;
    }
    return result;
}

let num1 = +prompt("Введите натуральное число");
let num2 = +prompt("Введите степень числа");

alert(calcSt(num1, num2));