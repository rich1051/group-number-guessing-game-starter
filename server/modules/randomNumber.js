console.log('hello from randomNumber.js');

    function getRandomNumber() {
        min = Math.ceil(1);
        max = Math.floor(25);
        return Math.floor(Math.random() * (25 - 1 + 1) + 1);
    };

module.exports = getRandomNumber;
