let scoreTeam1 = document.querySelector(".scoreTeam1")
let scoreTeam2 = document.querySelector(".scoreTeam2")
let draw = document.querySelector("#confettiBG p")

console.log(scoreTeam1)

console.log(scoreTeam2)

let score1 = sessionStorage.getItem("score1");
console.log(`Score 1: ${score1}`);

let score2 = sessionStorage.getItem("score2");
console.log(`Score 2: ${score2}`);

if(score1 > score2){
    scoreTeam2.classList.toggle("hide")

}

if(score2 > score1){
    scoreTeam1.classList.toggle("hide")
}

if(score1 == score2){
    scoreTeam1.classList.toggle("hide")
    scoreTeam2.classList.toggle("hide")
    draw.innerHTML = "It's a draw!"
}

