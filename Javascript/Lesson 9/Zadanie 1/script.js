"use strict";

let square = {
    width: 200,
    height: 130,
    mathArea() {
        let area = this.width * this.height;
        return alert(area);
    },
    mathPerimetr() {
        let perimetr = (this.width + this.height) * 2;
        return alert(perimetr);
    },
};



square.width = +prompt("Введите ширину");
square.height = +prompt("Введите высоту");

square.mathArea();
square.mathPerimetr();