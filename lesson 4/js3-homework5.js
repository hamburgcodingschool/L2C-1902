// WHAT DEFINES A LEAP YEAR
// Multiple of 4. Except if also a multiple of 100, unless a multiple of 400

function isLeapYear(testYear) {
    if (testYear % 4 == 0) {
        if (testYear % 100 == 0) {
            if (testYear % 400 == 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
} 

var year = 2019;

var leapCounter = 0;
while (leapCounter < 200) {
    if (isLeapYear(year)) {
        leapCounter ++;
        console.log(leapCounter + ":" + year);
    }
    year++;
}
