let intervalId;
let seconds = 0;

function startTimer() {
    intervalId = setInterval(() => {
        seconds++;
        document.querySelector("#timer").textContent = seconds;
    }, 1000);
}

function stopTimer() {
    clearInterval(intervalId);
}

function resetTimer() {
    seconds = 0;
    document.querySelector("#timer").textContent = seconds;
    clearInterval(intervalId);
}

function increaseTimer() {
    seconds++;
    document.querySelector("#timer").textContent = seconds;
}

function decreaseTimer() {
    if (seconds > 0) {
        seconds--;
        document.querySelector("#timer").textContent = seconds;
    }
}
