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

  $('#first-number-text').val('');
  $('#second-number-text').val('');

  $.ajax({
    method: 'POST',
    url: '/number',
    data: {
        firstNumber,
        secondNumber
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
          $('#guess-history').append(`
              <li>Player One guessed number ${number.firstNumber} and Player Two guessed number ${number.secondNumber}</li>
          `);
      };
};

// function renderToDom(numbers) {
//   $('#random-number-text').empty();
//   // use jQuery to append quotes to DOM
//       for (let number of numbers) {
//           $('#random-number-text').append(`
//               <li>Player One guessed number ${number.firstNumber} and Player Two guessed number ${number.secondNumber}</li>
//           `);
//       };
// };