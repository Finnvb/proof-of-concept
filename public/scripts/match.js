
const buttonTeam1 = document.getElementById('button-team1')
const buttonTeam2 = document.getElementById('button-team2')
const minusButtonTeam1 = document.getElementById('minus-button-team1')
const minusButtonTeam2 = document.getElementById('minus-button-team2')
const scoreTeam1 = document.getElementById('score-team1')
const scoreTeam2 = document.getElementById('score-team2')



buttonTeam1.addEventListener('click', () => {
   scoreTeam1.innerHTML++;
  });

  buttonTeam2.addEventListener('click', () => {
    scoreTeam2.innerHTML++;
   });

   minusButtonTeam1.addEventListener('click', () => {
   if(scoreTeam1.innerHTML > 0)
     scoreTeam1.innerHTML--;
   
   });

   minusButtonTeam2.addEventListener('click', () => {
    if(scoreTeam2.innerHTML > 0)
    scoreTeam2.innerHTML--;
   });


//    function startTimer(duration, display) {
//     let timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }

// window.onload = function () {
//     var fiveMinutes = 60 * 1,
//         display = document.querySelector('#timer');
//     startTimer(fiveMinutes, display);
// };