// "use strict";

// function grad(g) {
//     let result = (g * 3.14 / 180);
//     alert(`${result}` + " значение в радианах")
// }

// let g = +prompt("Введите градусы угла");
// grad(g);



// "use strict";

// let grad = function(g) {
//     let result = (g * 3.14 / 180);
//     alert(`${result}` + " значение в радианах")
// }

// let g = +prompt("Введите градусы угла");
// grad(g);



"use strict";

let grad = (g) => g * 3.14 / 180;

let g = +prompt("Введите градусы угла");
alert(grad(g) + " значение в радианах");