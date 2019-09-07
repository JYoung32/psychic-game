//create a variable for the computer choice
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//make variable for wins and losses
var wins = 0;
var losses = 0;
//make variable for number of guesses
var numberGuess = 9;
//make variable string for guess choices
var guessChoices = [];
//have computer choose a random letter from the computerChoice variable
var compGuess ;
function computerGuess () {compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(compGuess);
return compGuess}
//when window loads, fires computerGuess function
window.onload = computerGuess();
//add onkeyup function to record key pressed
document.onkeyup = function(event) {
    //make a variable to store user's guess
    var userGuess = event.key;
    
    //console.log(`${computerGuess} ; shows guess works`);
    //make a variable with users possible choices
    var userChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    //create if conditions for the game
    //if the user makes a guess run code, if false do nothing
    if (userChoices.indexOf(userGuess) > -1) {
        //if the users guess is the computers guess, user wins
        if (userGuess === compGuess) {
            wins++;
            numberGuess = 9;
            guessChoices = [];
            computerGuess();
        }
        //if the user guess is not the computers guess, add user guess to guess choices array
        if (userGuess != compGuess) {
            numberGuess --;
            guessChoices.push(userGuess);
        }
        //if the user uses up the guesses, reset the game
        if (numberGuess === 0) {
            numberGuess = 9;
            losses ++;
            guessChoices = [];
            computerGuess();
        }
    //change variables on the html document  
    document.getElementById("wins").innerHTML = "Wins: " + wins + "";
    document.getElementById("losses").innerHTML = "Losses: " + losses + "";
    document.getElementById("guessesLeft").innerHTML = "Guesses left: " + numberGuess + "";
    document.getElementById("guessesSoFar").innerHTML = "Your guesses so far: " +guessChoices.join (", ") + "";
    }
};