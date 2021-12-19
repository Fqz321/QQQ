"use strict";

function Vehicle(model, engine, year) {
    this.model = model;
    this.engine = engine;
    this.year = year;
}

const AudiVehicle = new Vehicle("Audi a8", 4000, 2016);
const LexusVehicle = new Vehicle("Lexus LS 600", 4600, 2018);
const RollsRoyceVehicle = new Vehicle("Rolls-Royce Cullinan", 6750, 2020);

console.log(AudiVehicle);
console.log(LexusVehicle);
console.log(RollsRoyceVehicle);