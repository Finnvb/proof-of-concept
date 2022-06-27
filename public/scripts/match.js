
let  buttonTeam1 = document.getElementById('button-team1')
let buttonTeam2 = document.getElementById('button-team2')
let minusButtonTeam1 = document.getElementById('minus-button-team1')
let minusButtonTeam2 = document.getElementById('minus-button-team2')
let scoreTeam1 = document.getElementById('score-team1')
let scoreTeam2 = document.getElementById('score-team2')
let timer = document.querySelector('#timer')

let score1 = 0;
// sessionStorage.setItem("score1", score1)
let score2 = 0
// sessionStorage.setItem("score2", score2)

// console.log(buttonTeam1)


buttonTeam1.addEventListener('click', () => {
   scoreTeam1.innerHTML++;
   score1++;
   console.log(`Score t1: ${score1}`)
   sessionStorage.setItem("score1", score1);
  });

  buttonTeam2.addEventListener('click', () => {
    scoreTeam2.innerHTML++;
    score2++;
    console.log(`Score t2: ${score2}`)
    sessionStorage.setItem("score2", score2);
   });

   minusButtonTeam1.addEventListener('click', () => {
   if(scoreTeam1.innerHTML > 0)
     scoreTeam1.innerHTML--;
     score1--;
     console.log(`Score t1: ${score1}`)
     sessionStorage.setItem("score1", score1);
   
   });

   minusButtonTeam2.addEventListener('click', () => {
    if(scoreTeam2.innerHTML > 0)
    scoreTeam2.innerHTML--;
    score2--
    console.log(`Score t2: ${score2}`)
    sessionStorage.setItem("score2", score2);
   });

   function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer <= 0) {
          
            timerComplete();
            timer = 0
           
        }
    }, 1000);
}

window.onload = function () {
    let totalTime = 10 * timer.innerHTML,
        display = document.querySelector('#timer');
    startTimer(totalTime, display);
};


function timerComplete(){
  // Check wie de winnaar is en haal de ID op
  // Voeg dat id hieronder in de url in..
  // document.location.href = "victory/"+id;
  document.location.href = "victory";

// Doe een fetch PATCH op een nieuwe route waarbij je in JSON de betreffende data meestuurt

  // matchSection.classList.add('hide')
  // victorySection.classList.add('show')
}



