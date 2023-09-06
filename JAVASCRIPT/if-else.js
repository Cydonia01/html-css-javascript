// check if a number is between 10 and 50.

var num = 25;

if (num < 50 && num > 10) {
    console.log("The Number is between 10 and 50.")
}
else {
    console.log("The number is not between 10 and 50.")
}

// check if the number is odd or even.

if (num % 2 == 0) {
    console.log("The number is even.")
}
else {
    console.log("The number is odd.")
}

// midterm and final. mtx is midterm weight fx is final weight.

var mt1 = 50, mt2 = 50, final = 40;
var mtx = 0.4, fx = 0.6;
let avg = (mt1 + mt2) / 2 * mtx + final * fx;

if (avg >= 50 && final >= 50) {
    console.log('passed');
}

else if (final >= 70) {
    console.log("passed");
}

else {
    console.log("failed.");
}