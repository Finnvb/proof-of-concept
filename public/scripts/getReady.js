let timer = document.querySelector('#timer')


function startTimer(duration, display) {
    let timer = duration,
        minutes, seconds;
    setInterval(function () {

        seconds = parseInt(timer % 60, 10);

        seconds = seconds < 10 ? +seconds : seconds;

        display.textContent = seconds;

        if (--timer <= 0) {

            timerComplete();
            timer = 0

        }
    }, 1000);
}

window.onload = function () {
    let totalTime = 3,
        display = document.querySelector('#timer');
    startTimer(totalTime, display);
};


function timerComplete() {
    document.location.href = "activeMatch";
}