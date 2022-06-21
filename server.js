const express = require('express')
const fs = require('fs')
const app = express()

//parses user data
const bodyParser = require('body-parser')
const req = require('express/lib/request')
const urlencodedParser = bodyParser.urlencoded({
  extended: false
})


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

app.set('port', process.env.PORT || 1337)

const server = app.listen(app.get('port'), () => {
  console.log(`Application started on port: ${app.get('port')}`)
  console.log('http://localhost:1337');
})





