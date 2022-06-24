const express = require('express')
const fs = require('fs')
const app = express()

const fetch = (...args) => import('node-fetch').then(({
  default: fetch
}) => fetch(...args))
const URL = 'https://score.api.fdnd.nl/v1/match'

console.log(URL)
//parses user data
const bodyParser = require('body-parser')
const { response } = require('express')
// const req = require('express/lib/request')
const urlencodedParser = bodyParser.urlencoded({
  extended: false
})

// app.use(express.urlencoded({extended: true}))  

// Serve public files
app.use(express.static('public'))

// Hook up a template engine
app.set('view engine', 'ejs')
app.set('views', './views')


app.get('/', async (req, res) => {

  res.render('index')
})

app.get('/activity', async (req, res) => {

  res.render('activity')
})

app.get('/team', async (req, res) => {

  res.render('team')
})

app.get('/teamEdit', async (req, res) => {

  res.render('teamEdit')
})

app.get('/createMatch', async (req, res) => {

  res.render('createMatch')
})

app.get('/activeMatch', async (req, res) => {

  res.render('activeMatch')
})

app.get('/victory', async (req, res) => {

  res.render('victory')
})





app.post('/match', urlencodedParser, (req, res) => {
  console.log('body', req.body);
  // const fields = req.body

  // fields.
  const postData = {
    method: 'POST',
    body: JSON.stringify(req.body),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  fetchJson(URL, postData).then(function (data) {
    console.log(data);
    res.render('activeMatch', {
      // matchId: 3,
      // activity: data.activity,
      // team1: data.team1,
      // //playersTeam1: ,
      // //scoreTeam1:'3',
      // team2: data.team2,
      // //playersTeam2: 'dave', 
      // //scoreTeam2:'8',
      // speeltijd: data.speeltijd,
      // datum:'2022-05-12' 
    })
  })
})









app.set('port', process.env.PORT || 1337)

const server = app.listen(app.get('port'), () => {
  console.log(`Application started on port: ${app.get('port')}`)
  console.log('http://localhost:1337');
})





async function fetchJson(url, data = {}) {
  return await fetch(url, data)
    .then((response) =>  response.json())
    .catch((error) => error)
}