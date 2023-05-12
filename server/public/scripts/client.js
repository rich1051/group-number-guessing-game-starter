// const gameOutcome = require('./public/scripts/randomNumber')

$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")

  $('#random-number-form').on('submit', submitFunction);
  $('#guess-history').on('submit' , renderToDom)

  getRandomNumber()

}

// function submitFunction

function getRandomNumber() {
  $.ajax({
    type: 'GET',
    url: '/number'
  }).then(function (response) {
      console.log('Success!', response);
      renderToDom(response);
  }).catch(function(error) {
      alert('Request failed! :(');
      console.log('Request failed: ', error);
  });

};

function submitFunction() {

  
  const firstNumber = $('#first-number-text').val();
  const secondNumber = $('#second-number-text').val();
  let playerOne;
  let playerTwo;
  
  function getRandomNumber() {
    min = Math.ceil(1);
    max = Math.floor(25);
    return Math.floor(Math.random() * (25 - 1 + 1) + 1);
  };
  const randomNumber = getRandomNumber();

  if (firstNumber == randomNumber) {
    playerOne = 'Player One Wins!';
    }
  else if (secondNumber == randomNumber) {
    playerTwo = 'Player Two Wins!';
    } 
  else if (firstNumber == randomNumber && secondNumber == randomNumber){
    playerOne = 'None of the players win!';
    playerTwo = 'None of the players win!';
    };

  if (firstNumber > randomNumber) {
    playerOne = 'Player One Guess Is Too High!';
    }
  else if (firstNumber < randomNumber) {
    playerOne = 'Player One Guess Is Too Low!';
    };

  if (secondNumber > randomNumber) {
    playerTwo ='Player Two Guess Is Too High!';
    }
  else if (secondNumber < randomNumber) {
    playerTwo = 'Player Two Guess Is Too Low!';
    };

  $('#first-number-text').val('');
  $('#second-number-text').val('');

  $.ajax({
    method: 'POST',
    url: '/number',
    data: {
        firstNumber,
        secondNumber,
        randomNumber,
        playerOne,
        playerTwo
    }
    }).then(function(response) {
      console.log('Success!')
      
    }).catch(function(error) {
      alert('Error with random number post!');
      console.log('Error with post: ', error);
    });


};

function renderToDom(numbers) {
  $('#guess-history').empty();
  // use jQuery to append quotes to DOM
      for (let number of numbers) {
        $('#random-number-text').text(`
        ${number.randomNumber}
        `);
        $('#guess-history').append(`
        <li>Player One guessed number ${number.firstNumber} and Player Two guessed number ${number.secondNumber}</li>
        `);
        $('#outcome-text').text(`
        ${number.playerOne} 
        ${number.playerTwo}
        `);
      };
};
