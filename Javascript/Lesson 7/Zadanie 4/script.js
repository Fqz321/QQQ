"use strict";

let result = (cash, price) => cash - price;

function answer(cash, price, result) {
    if (cash > price) {
        return alert(`Сдача ${result(cash, price)}`);
    } else {
        return alert(`Нужно больше золота`);
    }
}

let price = +prompt("Сумма покупки");
let cash = +prompt("Номинал купюр");

answer(cash, price, result);