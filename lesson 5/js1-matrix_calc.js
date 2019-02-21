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
}

function printMatrix(matrix) {

    var rowSums = [0, 0, 0, 0];
    var colSums = [0, 0, 0, 0];

    for (var i = 0; i < matrix.length; i++) {
        var line = "";
        for (var j = 0; j < matrix[i].length; j++) {
            line += " " + matrix[i][j] + " ";
            rowSums[i] += matrix[i][j];
            colSums[j] += matrix[i][j];
        }
        line += "= " + rowSums[i]; 
        console.log(line)
    }
    console.log(" =  =  =  =");
    var line = "";
    for (var i = 0; i < colSums.length; i++) {
        line += colSums[i] + " ";
    }
    console.log(line);
}

var newMatrix = createMatrix();
printMatrix(newMatrix);
