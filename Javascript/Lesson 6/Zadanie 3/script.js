"use strict";

let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");
let c = +prompt("Введите третье число");

function calcMin(a, b, c) {
    let num = a;
    if (num > b) {
        num = b;
    }
    if (num > c) {
        num = c;
    }
        return num;   
}
alert(calcMin(a, b, c));