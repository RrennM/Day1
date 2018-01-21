
function updateClock() {

	// get today's day
	var js_date = new Date();
	var newDay = js_date.getDay();

	// Set today's day into html
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var today = days[js_date.getDay()];


	document.getElementById('day').innerHTML = today;


	// get time
	var newHours = js_date.getHours();
	var newMinutes = js_date.getMinutes();
	var newSeconds = js_date.getSeconds();


	// Fix hours so they display in non-military time
	if (newHours > 12) {
		newHours = newHours - 12;
	}
	// Fix minutes & seconds to display a zero if less than 10
	if (newMinutes < 10) {
		newMinutes = "0" + newMinutes;
	}

	if (newSeconds < 10) {
		newSeconds = "0" + newSeconds;
	}

	// set today's time
	document.getElementById('hours').innerHTML = newHours;
	document.getElementById('minutes').innerHTML = newMinutes;
	document.getElementById('seconds').innerHTML = newSeconds;

	setTimeout(updateClock, 1000);
}

updateClock(); //calls the function to set the time and keep updating