"use strict";

function Sector() {
    this.radius = 12;
    this.gradMera = 6;
    this.calcAreaOfSector = () => {
        let area = (3.14 * this.radius ** 2 * this.gradMera) / 360;
        return area;
    }
}

area.calcAreaOfSector();
console.log(area.calcAreaOfSector());