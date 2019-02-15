function itExists(needle, haystack) {
    for (var i = 0; i < haystack.length; i++) {
        if (needle == haystack[i]) {
            return true;
        }
    }
    return false;
}

var ages = [27, 32, 31, 38];
var someAge = 18;

console.log(itExists(someAge, ages));

function randomizeIt(min, max) {
    // max = max - min + 1;

    // var result = Math.random() * max;

    // result = Math.floor(result);

    // result = result + min;

    // return result;

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

// WITH REPETITION

// var numbers = [];

// for (var i = 0; i < 6; i++) {
//     numbers[i] = randomizeIt(1, 10);
// }

// console.log(numbers);

// NO REPITITION

function generateNumbers(min, max, amount) {
    var numbers = [];

    for (var i = 0; i < amount; i++) {
        var newNumber;
        do {
            newNumber = randomizeIt(min, max); 
        } while (itExists(newNumber, numbers));
        numbers[i] = newNumber;
    }
    
    return numbers;
}

var luckyNumbers = generateNumbers(1, 50, 5);
var luckyStars = generateNumbers(1, 12, 2);

console.log("The lucky sequence:");
console.log(luckyNumbers);
console.log(luckyStars);