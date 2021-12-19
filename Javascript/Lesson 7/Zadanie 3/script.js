// "use strict";

// function factorial(n) {
//     if (n < 0) {
//         alert("Числа не натуральные");
//     }
//     if (n > 0) {
//         return n != 1 ? n * factorial(n - 1) : 1;
//     }
// }

// let n = +prompt("Введите натуральное число");
// alert(factorial(n));




"use strict";

let factorial = function(n) {
    if (n < 0) {
        alert("Числа не натуральные");
    }
    if (n > 0) {
        return n != 1 ? n * factorial(n - 1) : 1;
    }
}

let n = +prompt("Введите натуральное число");
alert(factorial(n));





"use strict";

let factorial = (n) => {
    if (n < 0) {
        alert("Числа не натуральные");
    }
    if (n > 0) {
        return n != 1 ? n * factorial(n - 1) : 1;
    }
}

let n = +prompt("Введите натуральное число");
alert(factorial(n));