// Function adds 0 in front of number if it's less than 10. Ex 9:00 becomes 09:00
function checkTime(i){
	if (i < 10) {
		i = "0" + i
	}
	// sends back new value
	return i
}

function startTime() {
	// this is creating a variable to hold the time
	var currentTime = new Date()

	// stores hours, minutes, and seconds into variables
	var hour = currentTime.getHours()
	var minute = currentTime.getMinutes()
	var second = currentTime.getSeconds()

	// change military time to standard time if greater than 12. Ex 14:00 becomes 2:00
	if (hour > 12) {
		// subtracts 12 from hour
		hour = hour - 12;
	}

	// update variables minute and second using checkTime function from line 1
	minute = checkTime(minute)
	second = checkTime(second)

	// selects the div in HTML with id of time and then adds time variables to the current text
	document.getElementById('time').textContent = hour + ":" + minute + ":" + second
	// recalls the function every second, time becomes dynamic incstead of static

	setTimeout(function () {
		startTime()
	}, 1000)
}
// adds event listener to start function so time will be displayed
document.getElementById('time').addEventListener('onload', startTime(), false)