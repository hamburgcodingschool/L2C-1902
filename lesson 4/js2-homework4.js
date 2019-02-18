function multTable(number) {
    var tableText = "";
    for (var i = 1; i <= 10; i++) {
        var result = number * i;
        tableText += number + " x " + i + " = " + result + "\n";
    }
    return tableText;
}

for (var i = 1; i <= 12; i++) {
    console.log(multTable(i));
    console.log("---------------");
}