var inquirer = require ("inquirer");
var letterConstructor = require("./letterConstructor.js");
var wordConstructor = require("./wordConstructor");



var answers = new Word("c" + "a" + "t");
var input = [
	{
		type: "input",
		name: "letter",
		message: "What's your letter guess?"
	}
]


var asdf = new Word("");

inquirer.prompt(input).then(answers) => {
	console.log(JSON.stringify(answers, null, 2));
}

// prompt inquirer.prompt per letter?

// Word: Used to create an object representing the current word the user is attempting to guess.
// This should contain word specific logic and data.

// Letter: Used for each letter in the current word.
// Each letter object should either display an underlying character, or a blank placeholder
// (such as an underscore), depending on whether or not the user has guessed the letter.
// This should contain letter specific logic and data.

// how to keep track of the user's remaining guesses
// how to prompt the user if they would like to end the game if no guesses remain

// export/require each constructor when needed


