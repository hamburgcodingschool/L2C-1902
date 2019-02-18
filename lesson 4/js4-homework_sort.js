// BUBBLE SORT

var myCoolNumbers = [5, 7, 10, 12, 6, 1];

for (var i = 0; i < myCoolNumbers.length - 1; i++) {
    for (var j = 0; j < myCoolNumbers.length -i; j++) {
        if (myCoolNumbers[j] > myCoolNumbers[j + 1]) {
            var temp = myCoolNumbers[j];
            myCoolNumbers[j] = myCoolNumbers[j + 1];
            myCoolNumbers[j + 1] = temp;
        }
    } 
    console.log(myCoolNumbers);
}
