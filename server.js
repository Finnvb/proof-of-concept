const express = require('express')
// const fs = require('fs')
const app = express()

const fetch = (...args) => import('node-fetch').then(({
  default: fetch
}) => fetch(...args))
const URL = 'https://score.api.fdnd.nl/v1/match'

console.log(URL)
//parses user data
const bodyParser = require('body-parser')
const { response } = require('express')

const urlencodedParser = bodyParser.urlencoded({
  extended: true
})

app.use(express.urlencoded({extended: true}))  

// Serve public files
app.use(express.static('public'))

// Hook up a template engine
app.set('view engine', 'ejs')
app.set('views', './views')


app.get('/', async (req, res) => {
  scoreData = await fetchJson(URL).then(json => json.data)
  // console.log(scoreData)
  res.render('index'),{
    scoreData
  }
})



app.get('/createMatch', async (req, res) => {
  scoreData = await fetchJson(URL).then(json => json.data)
  res.render('createMatch'),{
    scoreData
  }
})

app.get('/readyUp', async (req, res) => {
  scoreData = await fetchJson(URL).then(json => json.data)
  res.render('readyUp'),{
    scoreData
  }
})


app.get('/matchResults', async (req, res) => {
  scoreData = await fetchJson(URL).then(json => json.data)
  res.render('matchResults'),{
    scoreData 
  }
})

app.get('/victory', async (req, res) => {
  scoreData = await fetchJson(URL).then(json => json.data)
  res.render('victory'),{
    scoreData 
  }
})


app.get('/activeMatch', async (req, res) => {
  
  scoreData = await fetchJson(URL).then(json => json.data)
  res.render('activeMatch'),{
    scoreData
  }
})


// Sends a post request to the API
app.post('/activeMatch', urlencodedParser, async (req, res) => {

  const postData = {
    method: 'POST',
    body: JSON.stringify(req.body),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  await fetchJson(URL, postData).then(function (data) {

    res.render('readyUp', {

    })
  })
})



// sends a delete request with specific matchId to the API
app.post('/matchResults/:id', urlencodedParser, async (request,response) =>{
const id = request.params.id
  const deleteData = {
    method: 'delete',
    body: JSON.stringify(request.body.id),
    headers: {'Content-Type': 'application/json'}
  }
  console.log(`Body: ${id}`)
  await fetchJson(`${URL}/${id}`, deleteData).then(function (scoreData) {
    console.log(scoreData);
    response.render('matchResults', {

    })
  })
})











app.post('/match', urlencodedParser,  (request,response) =>{
  // const id = request.params.id

  console.log(request.body)


    const patchData = {
      method: 'PATCH',
      body: JSON.stringify(request.body),
      headers: {'Content-Type': 'application/json'}
    }

    // console.log(fetchJson())
     fetchJson(URL, patchData).then(scoreData) 
      // console.log(scoreData);
      response.render('activeMatch', {
 
        scoreData
  
      })
    })


    app.post('/match1', urlencodedParser,  (request,response) =>{
      // const id = request.params.id
    
      console.log(request.body)
    
    
        const patchData = {
          method: 'PATCH',
          body: JSON.stringify(request.body),
          headers: {'Content-Type': 'application/json'}
        }
    
        // console.log(fetchJson())
         fetchJson(URL, patchData).then(scoreData) 
          // console.log(scoreData);
          response.render('activeMatch', {
     
            scoreData
      
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

