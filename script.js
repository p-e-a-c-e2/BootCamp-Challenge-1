const milestoneDate = new Date("January 15, 2025 10:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = milestoneDate - now;

  if (distance < 0) {
    document.getElementById("timer").innerHTML = "<p>The milestone is here!</p>";
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
