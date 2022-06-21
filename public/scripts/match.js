const buttonTeam1 = document.getElementById('button-team1')
const buttonTeam2 = document.getElementById('button-team2')
const minusButtonTeam1 = document.getElementById('minus-button-team1')
const minusButtonTeam2 = document.getElementById('minus-button-team2')
const scoreTeam1 = document.getElementById('score-team1')
const scoreTeam2 = document.getElementById('score-team2')



buttonTeam1.addEventListener('click', () => {
   scoreTeam1.innerHTML++;
  });

  buttonTeam2.addEventListener('dblclick', () => {
    scoreTeam2.innerHTML++;
   });

   minusButtonTeam1.addEventListener('dblclick', () => {
   if(scoreTeam1.innerHTML > 0)
     scoreTeam1.innerHTML--;
   
   });

   minusButtonTeam2.addEventListener('dblclick', () => {
    if(scoreTeam2.innerHTML > 0)
    scoreTeam2.innerHTML--;
   });