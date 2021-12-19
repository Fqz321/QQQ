// "use strict";

// function allSum(a, b) {
//     if (a < 0 && b < 0) {
//         alert("Числа не натуральные");
//     }
//     if (a > b) {
//         alert("Поменяй цифры местами");
//     } else {
//         let sum = 0;
//         for (let i = a; i <= b; i++) {
//             sum = sum + i;
//         }
//         return sum

//     }
// }

// let a = +prompt("Введите первое натуральное число");
// let b = +prompt("Введите второе натуральное число");

// alert(allSum(a, b));




// "use strict";

// let allSum = function(a, b) {
//     if (a < 0 && b < 0) {
//         alert("Числа не натуральные");
//     }
//     if (a > b) {
//         alert("Поменяй цифры местами");
//     } else {
//         let sum = 0;
//         for (let i = a; i <= b; i++) {
//             sum = sum + i;
//         }
//         return sum

//     }
// }

// let a = +prompt("Введите первое натуральное число");
// let b = +prompt("Введите второе натуральное число");

// alert(allSum(a, b));






"use strict";

let allSum = (a, b) => {
    if (a < 0 && b < 0) {
        alert("Числа не натуральные");
    }
    if (a > b) {
        alert("Поменяй цифры местами");
    } else {
        let sum = 0;
        for (let i = a; i <= b; i++) {
            sum = sum + i;
        }
        return sum

    }
}

let a = +prompt("Введите первое натуральное число");
let b = +prompt("Введите второе натуральное число");

alert(allSum(a, b));