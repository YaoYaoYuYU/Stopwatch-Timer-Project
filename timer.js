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

let clockIntervalueId;
let milliseconds = 0;

function ClockStartTime(){
    clockIntervalueId = setInterval(() => {
        milliseconds++;
        document.querySelector("#clock").textContent = milliseconds;
    }, 10);
}

function ClockStopTime(){
    clearInterval(clockIntervalueId);
}

function ClockResetTime(){
    milliseconds = 0;
    document.querySelector("#clock").textContent = milliseconds;
    clearInterval(clockIntervalueId);
}

function ClockIncreaseTime(){
    milliseconds++;
    document.querySelector("#clock").textContent = milliseconds;
}

function ClockDecreaseTime(){
    if (milliseconds > 0) {
        milliseconds--;
        document.querySelector("#clock").textContent = milliseconds;
    }
}
