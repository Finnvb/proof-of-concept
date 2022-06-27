// let team1Name = document.querySelector("#team1")

// console.log(team1Name.innerHTML)
 
// console.log(score1)
// console.log("test")
// let p = score1
// console.log(scoore2)
// console.log(p)

// console.log(score2)


let scoreTeam1 = document.querySelector(".scoreTeam1")
let scoreTeam2 = document.querySelector(".scoreTeam2")

console.log(scoreTeam1)

console.log(scoreTeam2)

var score1 = sessionStorage.getItem("score1");
console.log(`Score 1: ${score1}`);

var score2 = sessionStorage.getItem("score2");
console.log(`Score 2: ${score2}`);

if(score1 > score2){
    scoreTeam2.classList.toggle("hide")

}

if(score2 > score1){
    scoreTeam1.classList.toggle("hide")
}