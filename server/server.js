const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

const gameOutcome = require('./modules/gameOutcome')
const randomNumberList = require('./public/scripts/history')
// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))
debugger; 
// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// app.get('/history', function(req, res) {
//   console.log('Request for /number was made');

//   res.send(randomNumberList);
// });

app.get('/number', function(req, res) {
  console.log('Request for /number was made');

  res.send(randomNumberList);
});


app.post('/number', function(req, res) {
  console.log('POST some data:', req.body);
  randomNumberList.push(req.body);
  res.sendStatus(201);
// GET & POST Routes go here
});

app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
