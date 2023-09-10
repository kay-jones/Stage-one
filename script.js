
const dayElement = document.getElementById("currentDayOfTheWeek");
const timeElement = document.getElementById("currentUTCTime");

function updateDayOfWeekAndTime() {
  const currentDate = new Date();

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDayOfWeek = daysOfWeek[currentDate.getDay()];

  const currentHours = currentDate.getHours().toString().padStart(2, "0");
  const currentMinutes = currentDate.getMinutes().toString().padStart(2, "0");
  const currentSeconds = currentDate.getSeconds().toString().padStart(2, "0");
  const currentTimeMilliseconds = currentDate.getUTCMilliseconds(); // Get milliseconds part

  const currentTime = `${currentHours}:${currentMinutes}:${currentSeconds}.${currentTimeMilliseconds}`; // Add milliseconds

  dayElement.textContent = currentDayOfWeek;
  timeElement.textContent = currentTime;
}

updateDayOfWeekAndTime();

setInterval(updateDayOfWeekAndTime, 1000);