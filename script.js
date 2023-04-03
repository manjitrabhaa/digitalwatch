// Get the clock element
const clockElement = document.getElementById('clock');

// Update the clock every second
setInterval(updateClock, 1000);

function updateClock() {
    // Get the current date and time
    const now = new Date();

    // Format the time as HH:MM:SS
    const timeString = now.toLocaleTimeString('en-US', { hour12: false });

    // Update the clock element
    clockElement.textContent = timeString;

    // Check if the alarm time has been reached
    if (alarmTime && now.getHours() === alarmTime.getHours() && now.getMinutes() === alarmTime.getMinutes()) {
        alert('Alarm!');
    }
}

let alarmTime = null;

function setAlarm() {
    // Get the alarm time from the form
    const alarmTimeString = document.getElementById('alarm-time').value;
    alarmTime = new Date();
    alarmTime.setHours(alarmTimeString.split(':')[0]);
    alarmTime.setMinutes(alarmTimeString.split(':')[1]);
    alarmTime.setSeconds(0);
    alert(`Alarm set for ${alarmTime.toLocaleTimeString('en-US', { hour12: false })}`);
}
