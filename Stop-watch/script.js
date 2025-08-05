const display = document.getElementById("stopwatch");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime; // totally 0;
        console.log(startTime);
        timer = setInterval(update, 10);
        
        isRunning = true;
    }

}
function stop() {
    clearInterval(timer);
    isRunning = false;
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  elapsedTime = 0;
  display.textContent = "00:00:00:00";
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    console.log(elapsedTime);
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let min = Math.floor(elapsedTime / (1000 * 60) % 60);
    let sec = Math.floor(elapsedTime / 1000 % 60);
    let milliSeconds = Math.floor(elapsedTime % 1000 / 10);

    display.textContent = (
        `${String(hours).padStart(2, '0')}:` +
        `${String(min).padStart(2, '0')}:` +
        `${String(sec).padStart(2, '0')}:` +
        `${String(milliSeconds).padStart(2, '0')}`
    );

}
