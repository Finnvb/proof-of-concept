const datum = document.querySelector('#datum')

datum.value = timeAndDate()


function timeAndDate() {
    let d = new Date()

    return (`${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}|${d.getHours()}:${d.getMinutes()}`)
}