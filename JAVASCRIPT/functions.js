// print function

function print(msg) {
    console.log(msg);
}

print("Hello");

// perimeter and area of rectangular

function calc(short, long) {
    console.log("perimeter: " + (2 * long + 2 * short) + "\narea: " + (short*long));
}

calc(3,5);

// tail or head
function coin() {
    let randNum = Math.random();
    if (randNum < 0.5) {
        console.log("Tails");
    }
    else {
        console.log("Heads");
    }
}

coin();

// divisors

function divisors(num) {
    let div = []
    for (let i = 0; i <= num; i++) {
        if (num % i == 0) {
            div.push(i);
        }
    }
    return div;
}

let div = divisors(22);
for (let num of div) {
    console.log(num);
}

// sum with varying number of parameters

function sum() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

console.log(sum(2, 5));
console.log(sum(2, 5, 7));