var a = 12;
var b = 6;
var c = 5;

if (a > b) {
  // B IS OUT
  if (a > c) {
    console.log(a);
  } else {
    console.log(c);
  }
} else {
  // A IS OUT
  if (b > c) {
    console.log(b);
  } else {
    console.log(c);
  }
}