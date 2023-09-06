// creating an array including "Apple, Banana, Strawberry, pear"
let fruits = ["Apple", "Banana", "Strawberry", "Pear"];

// length of array
let arrLen = fruits.length;

// first and last element of array
console.log(fruits[0]);
console.log(fruits[arrLen - 1]);

// is apple an element of array
console.log(fruits.includes("Apple") ? "Yes, Apple is an element of fruits array" : "No, Apple is not an element of fruits array");

// add cherry at the end of the array
fruits.push("Cherry");
console.log(fruits);

// delete last two elements
fruits.pop();
fruits.pop();
console.log(fruits);

// marks of students and avg marks.
    /* 
        student 1: John Newman 2010 (70, 60, 80)
        student 2: Michael Townley 2012 (80, 80, 90)
        student 3: Trevor Philips 2009 (60, 60, 70)
    */

let students = [["John Newman", 2010, [70, 60, 80]],
                ["Michael Townley", 2012, [80, 80, 90]],
                ["Trevor Philips", 2009, [60, 60, 70]]];

let age_1 = new Date().getFullYear() - students[0][1];
let age_2 = new Date().getFullYear() - students[1][1];
let age_3 = new Date().getFullYear() - students[2][1];
console.log(age_1, age_2, age_3);

let avg_1 = (students[0][2][0] + students[0][2][1] + students[0][2][2]) / 3;

let avg_2 = (students[1][2][0] + students[1][2][1] + students[1][2][2]) / 3;

let avg_3 = (students[2][2][0] + students[2][2][1] + students[2][2][2]) / 3;

console.log(avg_1.toFixed(1), avg_2.toFixed(1), avg_3.toFixed(1));