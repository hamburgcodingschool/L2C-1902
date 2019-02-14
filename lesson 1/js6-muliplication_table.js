// TIMES TABLE

// 7 x 1 = 7
// 7 x 2 = 14
// ...
// 7 x 10 = 70


var number = 7;

var counter = 0;
while (counter < 10) {
  counter ++;

  var result = number * counter;
  console.log(number + " x " + counter + " = " + result);
}