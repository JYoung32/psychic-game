//create variables
const choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let wins = 0;
let losses = 0;
let numberGuess = 9;
let guessChoices = [];
let compGuess ;

computerGuess = () => {
    compGuess = choices[Math.floor(Math.random() * choices.length)];
    return compGuess;
};

//when window loads, fires computerGuess function
window.onload = computerGuess();

//add onkeyup function to record key pressed
document.onkeyup = (event) => {
    //make a variable to store user's guess
    var userGuess = event.key;
    
    //create if conditions for the game
    //if the user makes a guess run code, if false do nothing
    if (choices.indexOf(userGuess) != -1) {

        //if the users guess is the computers guess, user wins
        (userGuess === compGuess) ? 
        (
            wins++,
            numberGuess = 9,
            guessChoices = [],
            computerGuess()
        ) :
        //if the user guess is not the computers guess, add user guess to guess choices array
        ( 
            numberGuess --,
            guessChoices.push(userGuess)
        );

        //if the user uses up the guesses, reset the game
        if (numberGuess === 0) {
            numberGuess = 9;
            losses ++;
            guessChoices = [];
            computerGuess();
        }

        //change variables on the html document  
        document.getElementById('wins').innerHTML = `Wins: ${wins}`;
        document.getElementById('losses').innerHTML = `Losses: ${losses}`;
        document.getElementById('guessesLeft').innerHTML = `Guesses left: ${numberGuess}`;
        document.getElementById('guessesSoFar').innerHTML = `Your guesses so far: ${guessChoices.join (', ')}`;
    }
};
