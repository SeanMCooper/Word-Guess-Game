//** medieval fantasy theme *//

//** DOM elements */
document.getElementById("activeWord").textContent = blankSpaces;
document.getElementById("trysLeft").textContent = guessesLeft
document.getElementById("wrongGuesses").textContent = badGuesses
document.getElementById("victoryCount").textContent = wins
document.getElementById("failureCount").textContent = losses



//** variables *//

var wins = 0;
var losses = 0;

var guessesLeft = 10;
var badGuesses = [];

var currentWord = [];
var currentGuess = "";

var blankSpaces = [];

var wordList = ["squire", "trebuchet", "castle", "knights", 
                "emporer", "blacksmith", "dragon", "templar", 
                "paladin", "magician", "forge", "warlord"];

var runningMessage = "Game started!"

//** RULES **//
//** clears game data **//


function beginGame(){
    console.log(runningMessage);
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var badguesses = [];
    var currentWord = [];
    var currentGuess = "";
    var blankSpaces = [];

//** grabs random word **//
    currentWord = Math.floor(Math.random() * wordList.length);
    currentWord = wordList[currentWord];
    console.log(currentWord);

//** creates underscores for new word visual hint **//
        for(var i = 0; i < currentWord.length; i++) {
            blankSpaces.push(" _ ");


        document.addEventListener("keypress", function(event){
            currentGuess = event.key; 
            console.log(currentGuess);
        }
        )}


//** game start


document.addEventListener("keypress", function(event){
    beginGame()
  
})
}



/*
var currentWord = ()=>{
     for(var i = 0; i < wordList.length; i++) {
        currentWord.push("_");
        return(currentWord);

         console.log(currentWord);
 
var lettersToGuess = currentWord.length;



document.addEventListener("keypress", function(event){ */