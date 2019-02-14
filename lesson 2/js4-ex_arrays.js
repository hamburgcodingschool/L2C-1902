var numbers = [23, 1, 34, 45, 12, 15, 9];

var highest = numbers[0];
var lowest = numbers[0];
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > highest) {
        highest = numbers[i];
    }
    if (numbers[i] < lowest) {
        lowest = numbers[i];
    }

    sum += numbers[i]; // sum = sum + numbers[i];
}

var avg = sum / numbers.length;

console.log(highest);
console.log(lowest);
console.log(sum);
console.log(avg);