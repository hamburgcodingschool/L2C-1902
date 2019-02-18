var matrix1 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

for (var i = 0; i < matrix1.length; i++) {
    var line = "";
    for (var j = 0; j < matrix1[i].length; j++) {
        line += matrix1[i][j] + " ";
    }
    console.log(line);
}