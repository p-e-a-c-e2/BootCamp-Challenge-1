

const milestoneDate = new Date("January 14, 2025 10:00:00").getTime();

let countdownInterval;
let countdownActive = false;

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

  // Pad numbers to 2 digits
  document.getElementById("days").innerText = String(days).padStart(2, "0");
  document.getElementById("hours").innerText = String(hours).padStart(2, "0");
  document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
  document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");
}

function startCountdown() {
  if (!countdownActive) {
    countdownActive = true;
    countdownInterval = setInterval(updateCountdown, 1000);
    document.querySelector('.start-btn').disabled = true;
    document.querySelector('.stop-btn').disabled = false;
  }
}

function stopCountdown() {
  if (countdownActive) {
    countdownActive = false;
    clearInterval(countdownInterval);
    document.querySelector('.start-btn').disabled = false;
    document.querySelector('.stop-btn').disabled = true;
  }
}

document.querySelector('.start-btn').addEventListener('click', startCountdown);
document.querySelector('.stop-btn').addEventListener('click', stopCountdown);
