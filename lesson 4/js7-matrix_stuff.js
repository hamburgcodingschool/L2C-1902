function randomizeIt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createArray(size) {
    var newArray = [];
    for (var i = 0; i < size; i++) {
        newArray[i] = randomizeIt(0, 9);
    }
    return newArray;
}

function createMatrix() {
    var size = 4;

    var newMatrix = [];
    for (var i = 0; i < size; i++) {
        newMatrix[i] = createArray(size);
    }

    return newMatrix;

    // JUST FOR TEST
    // return [
    //     [2, 5, 1, 5],
    //     [0, 9, 2, 3],
    //     [2, 6, 7, 4],
    //     [8, 3, 2, 1]
    // ];
}

function printMatrix(matrix) {
    for (var i = 0; i < matrix.length; i++) {
        var line = "";
        for (var j = 0; j < matrix[i].length; j++) {
            line += matrix[i][j] + " ";
        }
        console.log(line);
    }
}

var newMatrix = createMatrix();
printMatrix(newMatrix);
