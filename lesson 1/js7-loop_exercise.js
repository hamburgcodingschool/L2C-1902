// var counter = 0;
// while (counter < 100) {
//   counter++;
//   if (counter % 8 == 0) {
//     console.log(counter + "!!!");
//   } else if (counter % 4 == 0) {
//     console.log(counter + "!!");
//   } else if (counter % 2 == 0) {
//     console.log(counter + "!");
//   } else {
//     console.log(counter);
//   }
// }

var counter = 0;
while (counter < 100) {
  counter++;
  var finalText = counter;
  if (counter % 2 == 0) {
    finalText += "!";
  }
  if (counter % 4 == 0) {
    finalText += "!";
  }
  if (counter % 8 == 0) {
    finalText += "!";
  }

  console.log(finalText);
}


for (var i = 0; i < 10; i++) {

}