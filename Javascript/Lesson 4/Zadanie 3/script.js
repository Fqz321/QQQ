"use strict";

let date = new Date();
let h = date.getHours();

if (h < 10) {
    alert('Добрый день');
}
else if (h >= 10 && h <= 18) {
    alert('Добрый день');
}
else {
    alert('Доброй ночи');
}