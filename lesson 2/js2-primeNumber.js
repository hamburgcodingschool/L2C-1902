// 

// var number = 9;

// var remainderCounter = 0;
// for (var i = 2; i < number; i++) {
//     if (number % i == 0) {
//         remainderCounter++;
//     }
// }

// if (remainderCounter > 0) {
//     console.log("NOT A PRIME!");
// } else {
//     console.log("IS A PRIME!");
// }

var number = 7;

var isPrime = true;
for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log("IS A PRIME!");
} else {
    console.log("NOT A PRIME!");
}