const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const timerSelect = document.getElementById('timer-select');
const startPauseButton = document.getElementById('start-pause');
const resetButton = document.getElementById('reset');

let timerInterval;
let timerValue = 20; // Initial timer value

function updateTimerDisplay() {
    const minutes = Math.floor(timerValue / 60);
    const seconds = timerValue % 60;
    minutesDisplay.textContent = minutes.toString().padStart(2, '0');
    secondsDisplay.textContent = seconds.toString().padStart(2, '0');
}

function startTimer() {
    timerInterval = setInterval(() => {
        if (timerValue > 0) {
            timerValue--;
            updateTimerDisplay();
        } else {
            clearInterval(timerInterval);
            // Add logic for when the timer reaches 0 (e.g., play a sound, show a notification)
            startPauseButton.textContent = 'Start';
        }
    }, 1000);
    startPauseButton.textContent = 'Pause';
}

function pauseTimer() {
    clearInterval(timerInterval);
    startPauseButton.textContent = 'Start';
}

function resetTimer() {
    clearInterval(timerInterval);
    timerValue = parseInt(timerSelect.value);
    updateTimerDisplay();
    startPauseButton.textContent = 'Start';
}

// Initial display
updateTimerDisplay();

// Event listeners
timerSelect.addEventListener('change', () => {
    timerValue = parseInt(timerSelect.value);
    updateTimerDisplay();
    if (timerInterval) {
        pauseTimer();
    }
});

startPauseButton.addEventListener('click', () => {
    if (timerInterval) {
        pauseTimer();
    } else {
        startTimer();
    }
});

resetButton.addEventListener('click', resetTimer);



    function goToLeaderboard() {
        window.location.href = 'leaderboard.html';
    }

