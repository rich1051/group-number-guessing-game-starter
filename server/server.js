const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

function getRandomNumber() {
  min = Math.ceil(1);
  max = Math.floor(25);
  return Math.floor(Math.random() * (25 - 1 + 1) + 1);
};

let randomNumber = getRandomNumber();
let randomNumberList = [];
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
  // if / else to determine player guess
  const firstNumber = Number(req.body.firstNumber);
  const secondNumber = Number(req.body.secondNumber);

  if (firstNumber === randomNumber) {
    console.log('Player One Wins!');
    }
  else if (secondNumber === randomNumber) {
    console.log('Player Two Wins!')
    } 
  else {
    console.log('None of the players win!')
    };

  if (firstNumber > randomNumber) {
    console.log('Player One Guess Is Too High!')
    }
  else if (firstNumber < randomNumber) {
    console.log('Player One Guess Is Too Low!')
    };

  if (secondNumber > randomNumber) {
    console.log('Player One Guess Is Too High!')
    }
  else if (secondNumber < randomNumber) {
    console.log('Player Two Guess Is Too Low!')
    };
  
    console.log(randomNumber);
  randomNumberList.push(req.body);
  res.sendStatus(201);
// GET & POST Routes go here
});

app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
