var day = document.getElementById('day');
console.log(day);

var js_date = new Date();
var newDay = js_date.getDay();
console.log(newDay);

var newHours = js_date.getHours();
var newMinutes = js_date.getMinutes();
var newSeconds = js_date.getSeconds();
console.log(newHours)
console.log(newMinutes)
console.log(newSeconds)

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var today = days[js_date.getDay()];
console.log(today)

day.innerHTML = today;