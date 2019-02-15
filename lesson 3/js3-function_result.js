function sumItUp(a, b) {
    var sum = a + b;

    return sum;
}

var result1 = sumItUp(10, 20);
var result2 = sumItUp(5, 5);
var result3 = sumItUp(result1, result2);

console.log(result3);

