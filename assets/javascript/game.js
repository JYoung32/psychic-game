//create a variable for the computer choice
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//make variable for wins and losses
var wins = 0;
var losses = 0;
//make variable for number of guesses
var numberGuess = 9;
//make variable string for guess choices
var guessChoices = [];
//add onkeyup function to record key pressed
document.onkeyup = function(event) {
    //make a variable to store user's guess
    var userGuess = event.key;
    //have computer choose a random letter from the computerChoice variable
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(`${computerGuess} ; shows guess works`);
    //make a variable with users possible choices
    var userChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    //create if conditions for the game
    //if the user makes a guess run code, if false do nothing
    if (userChoices.indexOf(userGuess) > -1) {
        //if the users guess is the computers guess, user wins
        if (userGuess === computerGuess) {
            wins++;
            numberGuess = 9;
            guessChoices = [];
        }
        //if the user guess is not the computers guess, add user guess to guess choices array
        if (userGuess != computerGuess) {
            numberGuess --;
            guessChoices.push(userGuess);
        }
        //if the user uses up the guesses, reset the game
        if (numberGuess === 0) {
            numberGuess = 9;
            losses ++;
            guessChoices = [];
        }
    //change variables on the html document    
    var html = 
        "<h1> The Psychic Game </h1>" +
        "<p>Guess what letter I'm thinking of!</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + numberGuess + "</p>" +
        "<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";

    document.querySelector("#game").innerHTML = html;

    }
};