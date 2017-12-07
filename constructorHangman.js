var inquirer = require ("inquirer");
var Letter = require("./letterConstructor.js");
var Word = require("./wordConstructor.js");

var guesses = 10;

var randomWord = new Word("");

var input = new Letter("");

var input = [
	{
		type: "input",
		name: "letter",
		message: "What's your letter guess?"
	}
]

var startOver = function() {
	if (err) throw err;
	inquirer.prompt([
		{
			type: "list",
			name: "restart",
			message: "Would you like to play again?",
			choices: [
				"Yes",
				"No"
			]
		}
	]).then(restart("huh"))
}
  
var restart = function() {
	if (this.restart === "Yes") {
		restart();
	} else {
		console.log("Thanks for playing!");
	}
}

var answers = function() {
	if (input === "randomWord")	{
		console.log("Yay! You win!");
	} else {
		console.log("ehhh. you lose.");
	}
}

inquirer.prompt(input).then(answers);

var answers = function() {
	console.log(JSON.stringify(answers, null, 2));
}

Word.prototype.getSpelling = function() {
	return this.getGuesses() + startOver();
}

// prompt inquirer.prompt per letter?

// Word: Used to create an object representing the current word the user is attempting to guess.
// This should contain word specific logic and data.

// Letter: Used for each letter in the current word.
// Each letter object should either display an underlying character, or a blank placeholder
// (such as an underscore), depending on whether or not the user has guessed the letter.
// This should contain letter specific logic and data.

// how to keep track of the user's remaining guesses (maybe in the input thing add var guesses?)
// how to prompt the user if they would like to end the game if no guesses remain (if guesses === 0)
// how to get a decreasing timer on the var guesses

// Math.random() for "new word constructor[i]"

// if input !=== new letter then guesses--



// how to code


