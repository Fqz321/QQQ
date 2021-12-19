"use strict";

function hello(n) {

    if (n != 0) {
        alert(`Привет ${n}`);
    } else {
        alert("Привет, гость");
    }

}

let n = prompt("Как вас назвать?");

hello(n);