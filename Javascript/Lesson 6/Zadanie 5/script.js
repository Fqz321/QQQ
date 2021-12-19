"use strict";

let r = +prompt("Введите радиус окружности");

function circle(r) {
    let result = 2 * Math.PI * r;
    return result;

}


alert(circle(r));