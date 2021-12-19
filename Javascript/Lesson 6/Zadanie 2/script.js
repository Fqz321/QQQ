"use strict";

let num = +prompt('Введите число');

function showMessage() {
    if (num >= 10) {
        num = num * num;
        alert(num);
    }
    if (num == 8 || num == 9) {
        num = num - 1;
        alert(num);
        return num;
    }  
    if (num <= 7) {
        alert('Меньше либо равно 7');
        return num;
    }
}
showMessage();