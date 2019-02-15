function isPrime(number) {

    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}


// print all prime numbers between 1 and 100

// for (var i = 1; i <= 100; i++) {
//     if (isPrime(i)) {
//         console.log(i);
//     }
// }

// print the first 100 prime numbers

var number = 1;
var primeCounter = 0;

while (primeCounter < 100) {
    if (isPrime(number)) {
        primeCounter ++;
        console.log(primeCounter + ": " + number);
    }
    number++;
}

