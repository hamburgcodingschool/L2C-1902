// var a = 0;
// var b = 1;

// for (var i = 0; i < 20; i++) {
//     var newFibo = a + b;
//     a = b;
//     b = newFibo;
//     console.log(newFibo);
// }



// var number1 = 6;
// var number2 = 12;
// var temp;

// temp = number1;
// number1 = number2;
// number2 = temp;


var fibo = [0, 1];

console.log(0);
console.log(1);

for (var i = 2; i < 20; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
    console.log(fibo[i]);
}

