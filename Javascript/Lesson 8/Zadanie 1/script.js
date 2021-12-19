"use strict";

const person = {
    surname: "Mask",
    name: "Jack",
    middleName: "Vovovich",
};

person.dateBirt = "11.11.1911";
person.profession = "Busines";
person.position = "Boss";
person.experience = 8;

const person2 = {
    surname: person.surname,
    name: person.name,
    middleName: person.middleName,
};

delete person.middleName;

if (person.middleName) {
    alert(person.middleName);
} else {
    alert("Такого свойства не существует!");
}

let sumKeys = 0;
let sumNumber = 0;

for (let key in person) {
    sumKeys++;
    if (typeof person[key] === "number") {
        sumNumber++;
    }
}


alert(sumKeys);
alert(`Сумма свойств, значение которых является число равно ${sumNumber}`);