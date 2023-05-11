const getRandomNumber = require('./randomNumber')

function gameOutcome() {
if (firstNumber === getRandomNumber) {
    console.log('Player One Wins!');
    }
else if (secondNumber === getRandomNumber) {
    console.log('Player Two Wins!')
    } 
else {
    console.log('None of the players win!')
    };

if (firstNumber > getRandomNumber) {
    console.log('Player One Guess Is Too High!')
    }
else if (secondNumber > getRandomNumber) {
    console.log('Player Two Guess Is Too High!')
    };

if (firstNumber < getRandomNumber) {
    console.log('Player One Guess Is Too Low!')
    }
else if (secondNumber < getRandomNumber) {
    console.log('Player Two Guess Is Too Low!')
    };
};

module.exports = gameOutcome;