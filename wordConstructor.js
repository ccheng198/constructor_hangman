function Word(n) {
    this.spelling = spelling;
    this.answer = function() {
    	if (guesses === 0) {
    		console.log("game over?");
    	}
    }
}

Word.prototype.getGuesses = function() {
	return this.guesses + " guesses remain.";
}

module.exports = Word();

// prototype functions for getting guesses