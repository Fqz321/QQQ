"use strict";

const salary = {
    Bezos: 201,
    Mask: 190,
    Gates: 134,
    Zuckerberg: 134,
    Page: 123,
    Brin: 118,
    Ellison: 117,
    Buffett: 102,
    Balmer: 96,
    Bloomberg: 70,
};

const clone = Object.assign(salary);

let sum = 0;
let quantity = 0;
let srednZp = 0;

for (let key in salary) {
    sum = sum + salary[key];
    quantity++;
    srednZp = sum / quantity;
}

salary.mid = srednZp;

let srednNeNije = 0;
for (let key in salary) {
    if (salary[key] >= salary.mid)
        srednNeNije++;
}

salary.hum = srednNeNije;

alert(srednNeNije);
alert(salary.hum);