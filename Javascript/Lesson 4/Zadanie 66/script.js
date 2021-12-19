"use strict"

let dateName = prompt('Введите любой день недели');
let monday = '1, 8, 15, 23, 30'; 
let tuesday = '2, 9, 16, 24';
let wednesday = '3, 10, 17, 25';
let thursday = '4, 11, 18, 26';
let friday = '5, 12, 19, 27';
let saturday = '6, 13, 20, 28';
let sunday = '7, 14, 21, 29';

if (dateName == 'Понедельник' || dateName == 'понедельник') {
    alert(monday);
}
else if (dateName == 'Вторник' || dateName == 'вторник') {
    alert(tuesday);
}
else if (dateName == 'Среда' || dateName == ' среда') {
    alert(wednesday);
}
else if (dateName == 'Четверг' || dateName == 'четверг') {
    alert(thursday);
}
else if (dateName == 'Пятница' || dateName == 'пятница') {
    alert(friday);
}
else if (dateName == 'Суббота' || dateName == 'суббота') {
    alert(saturday);
}
else if (dateName == 'Воскресенье' || dateName == 'воскресенье') {
    alert(sunday);
}
else {
    alert('Такого дня нет');
}