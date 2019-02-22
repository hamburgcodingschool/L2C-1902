let hangman = {
    solutionText: 'Gotham City',
    secretText: '',
    lives: 6,
    createSecretText: function() {
        this.secretText = '';
        for (letter of this.solutionText) {
            if (letter == ' ') {
                this.secretText += ' ';
            } else {
                this.secretText += '-';
            }
        }
    },
    checkAndUpdateLetter: function(checkLetter) {
        let foundLetter = false;
        for (let i = 0; i < this.solutionText.length; i++) {
            //if (this.solutionText[i] == checkLetter) {
            if (this.solutionText[i].localeCompare(checkLetter, 'en', {sensitivity: 'base'}) == 0) {
                this.secretText = replaceAt(this.secretText, i, this.solutionText[i]);
                foundLetter = true;
            }
        } 
        if (!foundLetter) {
            this.lives--;
        }
        return foundLetter;
    },
    hasWon: function() {
        return this.secretText == this.solutionText;
    },
    isPlaying: function() {
        return !this.hasWon() && this.lives > 0;  
    }
}

// HELPER FUNCTION

function replaceAt(text, pos, newLetter) {
    
    let s = text.substr(0, pos);
    let e = text.substr(pos + 1, text.length);
    
    return s + newLetter + e;
}