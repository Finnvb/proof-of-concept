let buttonTeam1 = document.getElementById('button-team1')
let buttonTeam2 = document.getElementById('button-team2')
let minusButtonTeam1 = document.getElementById('minus-button-team1')
let minusButtonTeam2 = document.getElementById('minus-button-team2')
let scoreTeam1 = document.getElementById('score-team1')
let scoreTeam2 = document.getElementById('score-team2')
let timer = document.querySelector('#timer')

let scoreTeam1Input = document.querySelector('#scoreTeam1')
let scoreTeam2Input = document.querySelector('#scoreTeam2')
let matchId = document.querySelector('#matchId')

let score1 = 0;
// sessionStorage.setItem("score1", score1)
let score2 = 0
// sessionStorage.setItem("score2", score2)

console.log(buttonTeam1)


buttonTeam1.addEventListener('click', () => {
  scoreTeam1Input.value++;
  score1++;
  console.log(`Score t1: ${score1}`)
  sessionStorage.setItem("score1", score1);
});

buttonTeam2.addEventListener('click', () => {
  scoreTeam2Input.value++;
  score2++;
  console.log(`Score t2: ${score2}`)
  sessionStorage.setItem("score2", score2);
});

minusButtonTeam1.addEventListener('click', () => {
  if (scoreTeam1Input.value > 0){
  scoreTeam1Input.value--;
  score1--;
  }
  console.log(`Score t1: ${score1}`)
  sessionStorage.setItem("score1", score1);

});

minusButtonTeam2.addEventListener('click', () => {
  if (scoreTeam2Input.value > 0){
  scoreTeam2Input.value--;
  score2--
  }
  console.log(`Score t2: ${score2}`)
  sessionStorage.setItem("score2", score2);
});

function startTimer(duration, display) {
  let timer = duration,
    minutes, seconds;
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
  let totalTime = 60 * timer.innerHTML,
    display = document.querySelector('#timer');
  startTimer(totalTime, display);
};


function timerComplete() {

  document.location.href = "victory";
}


const URL = 'https://score.api.fdnd.nl/v1/match'

const form = document.getElementById('team1Plus');
form.addEventListener('submit', submitForm);
 

function submitForm(e) {
  e.preventDefault();

  let data = getFormData();

  const options = {
    method: "PATCH",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(URL, options).then((res) => {

    return console.log(res.json);
  });
}

function getFormData() {
  let data = {
    matchId: matchId.value,
    scoreTeam1: scoreTeam1Input.value,
    scoreTeam2: scoreTeam2Input.value

  };

  return JSON.stringify(data);
}