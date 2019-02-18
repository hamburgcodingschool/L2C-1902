var userInputN = 5; // 1+2+3+4+5+6+7+8
var userInputSumOrProd = 'p'; // (s)um or (p)roduct

if (userInputSumOrProd == 's') {
    var total = 0;
    for (var i = 1; i <= userInputN; i++) {
        total += i;
    }
    
    console.log(total);
} else {
    var factorial = 1;
    for (var i = 1; i <= userInputN; i++) {
        factorial *= i;
    }
    
    console.log(factorial);
}