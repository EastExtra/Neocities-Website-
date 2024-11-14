// clock.js

function updateClock() {
    const clockElement = document.getElementById("clock");
    const now = new Date();

    const options = {
        timeZone: "America/New_York",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true
    };

    const timeString = new Intl.DateTimeFormat("en-US", options).format(now);
    clockElement.textContent = `It is  ${timeString} in Quebec`;
}

setInterval(updateClock, 1000);
updateClock();