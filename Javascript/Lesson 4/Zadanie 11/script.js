"use strict";

const jan = 1;
const feb = 2;
const mar = 3;
const apr = 4;
const may = 5;
const jun = 6;
const jul = 7;
const aug = 8;
const sep = 9;
const oct = 10;
const nov = 11;
const dec = 12;

let season = prompt('Введите месяц');


if (season == 'Декабрь' || season == 'декабрь') {
    season = dec;
}
if (season == 'Январь' || season == 'январь') {
    season = jan;
}
if (season == 'Февраль' || season == 'февраль') {
    season = feb;
}
if (season == 'Март' || season == 'март') {
    season = mar;
}
if (season == 'Апрель' || season == 'апрель') {
    season = apr;
}
if (season == 'Май' || season == 'май') {
    season = may;
}
if (season == 'Июнь' || season == 'июнь') {
    season = jun;
}
if (season == 'Июль' || season == 'июль') {
    season = jul;
}
if (season == 'Август' || season == 'август') {
    season = aug;
}
if (season == 'Сентябрь' || season == 'сентябрь') {
    season = sep;
}
if (season == 'Октябрь' || season == 'октябрь') {
    season = oct;
}
if (season == 'Ноябрь' || season == 'ноябрь') {
    season = nov;
}

if (season != 1 &&
    season != 2 &&
    season != 3 &&
    season != 4 &&
    season != 5 &&
    season != 6 &&
    season != 7 &&
    season != 8 &&
    season != 9 &&
    season != 10 &&
    season != 11 &&
    season != 12) {
    alert(`Месяц ${season} несуществует!`);
}
else if (season >= 3 && season <= 5) {
    alert('Весна');
}
else if (season >= 6 && season <=8) {
    alert('Лето');
}
else if (season >= 9 && season <= 11) {
    alert('Осень');
}
else {
    alert('Зима');
}
