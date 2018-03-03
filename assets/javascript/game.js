

var letters = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guesses = [];
var playerGuess = document.getElementById("game");


document.onkeyup = function(event) {
    var userGuess = event.key;

    if (letters.includes(userGuess)) {

        var computerGuess = letters[Math.floor(Math.random() * letters.length + 1)];

        console.log("Player guess" + playerGuess);

        console.log("Computer guess:" + computerGuess);

        if (playerGuess === computerGuess) {
            wins++;
        }
        else if (playerGuess !== computerGuess) {
            guessesLeft--;
            guesses.push(userGuess);
            if (guessesLeft === 0) {
                losses++;
                guessesLeft = 10;
                guesses =0;
                if (guesses===0){
                    guesses = [];
                };
             };

        };


        playerGuess.innerHTML = `
        <h1>~ THE PSYCHIC GAME ~</h1>
        <h2>Guess what letter I'm thinking of?</h2>
        <p>Wins:${wins}</p>
        <p>Loses:${losses}</p>
        <p>Guesses Left:${guessesLeft}</p>
        <p>Your Guesses So Far:${guesses}</p>
        `;
    };

};