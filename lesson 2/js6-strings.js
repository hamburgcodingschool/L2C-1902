var name = "otito";

// console.log(name.length);

var isPal = true;
for (var i = 0; i < name.length * 0.5; i++) {
    var mirrorPos = name.length - 1 - i;
    if (name[i] != name[mirrorPos]) {
        isPal = false;
    }
}

console.log(isPal);



var originalText = "otto";
var reversedText = "";

for (var i = 0; i < originalText.length; i++) {
    var mirrorPos = originalText.length - 1 - i;
    // console.log(originalText[mirrorPos]);
    reversedText += originalText[mirrorPos];
}

// for (var i = originalText.length - 1; i >= 0; i--) {
//     reversedText += originalText[i];
// }

if (originalText == reversedText) {
    console.log("COOL IT'S A PALINDROME!");
} else  {
    console.log("nope");
}

