"use strict";

const one = prompt('Введите первое число');
const two = prompt('Введите второе число');
const three = prompt('Введите третье число');

if (one > two && one > three) {
    alert(one);
}
else if (two > one && two > three) {
    alert(two);
}
else {
    alert(three);
}