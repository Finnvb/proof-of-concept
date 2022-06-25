const datumLabel = document.querySelector('#datum-label')
const datum = document.querySelector('#datum')
const scoreTeam1 = document.querySelector('#scoreTeam1')
const scoreTeam2 = document.querySelector('#scoreTeam2')

datumLabel.style.display = 'none'
scoreTeam1.style.display = 'none'
scoreTeam2.style.display = 'none'
datum.style.display = 'none'



console.log(speeltijd.value)

datum.value = timeAndDate()


function timeAndDate() {
    let d = new Date()

    return (`${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}|${d.getHours()}:${d.getMinutes()}`)
}

