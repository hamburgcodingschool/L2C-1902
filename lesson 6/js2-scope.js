// WHAT IS SCOPE!

var abc = "some text as content";

function someFunction () {
    // var abc = "whatever";
    abc = "whatever";
    console.log(abc);
}

someFunction();

console.log(abc);