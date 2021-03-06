// init project
const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', function (request, response) {
  response.sendFile(__dirname + '/views/index.html')
})

app.get('/add', function (request, response) {
  response.sendFile(__dirname + '/views/add-forms.html')
})

const json = require('./src/controller/json')

app.get('/data/orgs.json', json.orgs)

app.get('/data/projects.json', json.projects)

app.get('/data/tools.json', json.tools)

app.get('/data/resources.json', json.resources)

app.get('/data/data-sources.json', json.dataSources)

// listen for requests :)
const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port)
})