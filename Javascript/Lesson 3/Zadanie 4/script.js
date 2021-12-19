"use strict";

const width = prompt("Ширина галереи?"[1024]);
const image = prompt("Количество изображений?"[1]);
const widthImg = prompt("Ширина каждого изображения?"[200]);
const maxImg = Math.floor(width / widthImg);

if (image < maxImg) {
    let row = Math.ceil(image / maxImg)
    alert('Количество рядов ${row}');
}