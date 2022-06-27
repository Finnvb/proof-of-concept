let timer = document.querySelector('#timer')



function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        // minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        // minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ?  + seconds : seconds;

        display.textContent =  seconds;

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


function timerComplete(){
  // Check wie de winnaar is en haal de ID op
  // Voeg dat id hieronder in de url in..
  // document.location.href = "victory/"+id;
  document.location.href = "activeMatch";
}