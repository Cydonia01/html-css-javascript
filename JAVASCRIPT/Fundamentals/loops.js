let numbers = [1,5,7,15,3,25];

// square
for (let num of numbers) {
    console.log(num*num);
}

// multiply of 5
for (let num of numbers) {
    if (num % 5 == 0) {
        console.log(num);
    }
}

// sum of even
let total = 0;
for (let num of numbers) {
    if (num % 2 == 0) {
        total += num;
    }
}
console.log("sum of even is " + total);

let products = ["Iphone 12", "Samsung S22", "Iphone 13", "Samsung S23"];

// print all uppercase in products.
for (let i = 0; i < products.length; i++) {
    console.log(products[i].toUpperCase());
}

// how many of them includes samsung
total = 0
for (let i = 0; i < products.length; i++) {
    if (products[i].includes("Samsung")) {
        total++;
    }
}
console.log(total + " of them includes samsung.")

let students = [
    {"name": "John", "surname": "Freely", "marks": [60, 70, 60]},
    {"name": "Trevor", "surname": "Philips", "marks": [80, 70, 60]},
    {"name": "Michael", "surname": "Townley", "marks": [70, 70, 60]}
];

// average marks and if they passed
let totalAvg = 0;
let avg;
for (let i = 0; i < students.length; i++) {
    avg = 0;

    for (let j = 0; j < students[i].marks.length; j++) {
        avg += students[i].marks[j];
    }

    avg = avg / students[i].marks.length;
    totalAvg += avg;

    console.log(`Average of ${students[i].name} is ${avg.toFixed(1)}`);
    
    if (avg >= 50) {
        console.log(`${students[i].name}passed.`);
    }
    else {
        console.log(`${students[i].name} cannot passed.`);
    }
}

totalAvg = totalAvg / students.length;
console.log(`Total average of students ${totalAvg.toFixed(1)}`);