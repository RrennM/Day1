var day = document.getElementById('day');
console.log(day);

var time = document.getElementById('time');
console.log(time);

var js_date = new Date();
var newDay = js_date.getDay();
console.log(newDay);

var newTime = js_date.getTime();
var newHours = js_date.getHours();
var newMinutes = js_date.getMinutes();
var newSeconds = js_date.getSeconds();
console.log(newTime)
console.log(newHours)
console.log(newMinutes)
console.log(newSeconds)

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];