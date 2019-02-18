
// function myTest(a) {

//     a = 10;

// }

// var testVar = 5;

// myTest(testVar);

// console.log(testVar)

function equalArrays(array1, array2) {
    if (array1 == array2) {
        return true;
    }

    if (array1.length != array2.length) {
        return false;
    }

    for (var i = 0; i < array1.length; i++) {
        if (array1[i] != array2[i]) {
            return false;
        }
    }

    return true;
}

function myOtherTest(array1) {
    array1[2] = "Joe";
}

var names = ["Kat", "Patrick", "Aneesh", "Helder"];

console.log(names);

myOtherTest(names);

console.log(names);

var otherNames = ["Katherina", "Patrick", "Joe", "Helder"];

console.log(otherNames);

console.log(names == otherNames);
console.log(equalArrays(names, otherNames));

