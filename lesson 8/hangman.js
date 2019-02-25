class Hangman {
    constructor(solutionText) {
        this.solutionText = solutionText;
        this.secretText = '';
        this.lives = 6;

        this.createSecretText();
    }

    createSecretText() {
        this.secretText = '';
        for (let i = 0; i < this.solutionText.length; i++) {
            const letter = this.solutionText[i];
            if (letter == ' ') {
                this.secretText += ' ';
            } else {
                this.secretText += '-';
            }
        }
    }

    checkAndUpdateLetter(checkLetter) {
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
    }

    hasWon() {
        return this.secretText == this.solutionText;
    }

    isPlaying() {
        return !this.hasWon() && this.lives > 0;  
    }
}

// HELPER FUNCTION

function replaceAt(text, pos, newLetter) {
    
    let s = text.substr(0, pos);
    let e = text.substr(pos + 1, text.length);
    
    return s + newLetter + e;
}

const words = [
    "Gotham city",
    "Star city",
    "Coast city",
    "Metropolis"
];


let h1 = new Hangman(words[1]); // MAYBE PICK THE POS AT RANDOM!

console.log(h1.secretText)
