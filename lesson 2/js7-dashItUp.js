var originalText = "banana";
var dashedText = "";

for (var i = 0; i < originalText.length; i++) {
    
    if (i > 0) {
        dashedText += "-";
    }
    dashedText += originalText[i];
}

console.log(dashedText);