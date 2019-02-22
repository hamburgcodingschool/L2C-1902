let solutionText = "Gotham City";
let secretText;
let lives = 6;

function createSecretText() {
    secretText = '';
    for (letter of solutionText) {
        if (letter == ' ') {
            secretText += ' ';
        } else {
            secretText += '-';
        }
    }
}

createSecretText();
console.log(secretText);

function checkAndUpdateLetter(checkLetter) {
    let foundLetter = false;
    for (let i = 0; i < solutionText.length; i++) {
        //if (solutionText[i] == checkLetter) {
        if (solutionText[i].localeCompare(checkLetter, 'en', {sensitivity: 'base'}) == 0) {
            secretText = replaceAt(secretText, i, solutionText[i]);
            foundLetter = true;
        }
    } 
    if (!foundLetter) {
        lives--;
    }
}

function hasWon() {
    return secretText == solutionText;
}

function isPlaying() {
    return !hasWon() && lives > 0;
}

function replaceAt(text, pos, newLetter) {
    
    let s = text.substr(0, pos);
    let e = text.substr(pos + 1, text.length);
    
    return s + newLetter + e;
}



