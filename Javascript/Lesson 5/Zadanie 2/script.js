"use strict";

let n = +prompt('Введите число');
let num = 0;
for (let i = 0; i <= n; i++) {
    num = i * 2;
    if (num == 0) continue; {
        if (num % 5 !=0) {
            alert(num);
        }
        else n++;
    }
}
