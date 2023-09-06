var student1 = "John Newman";
var birth1 = 2012;
var mathMarks1_1 = 70;
var mathMarks1_2 = 70;
var mathMarks1_3 = 80;
var mathAvg1 = (mathMarks1_1 + mathMarks1_2 + mathMarks1_3) / 3;
console.log(mathAvg1);
console.log(mathAvg1 >= 50);

var student2 = "Johnny Cage";
var birth2 = 2010;
var mathMarks2_1 = 40;
var mathMarks2_2 = 40;
var mathMarks2_3 = 50;
var mathAvg2 = (mathMarks2_1 + mathMarks2_2 + mathMarks2_3) / 3;
console.log(mathAvg2);
console.log(mathAvg2 >= 50);

let currentYear = new Date().getFullYear();

var age1 = currentYear - birth1;
var age2 = currentYear - birth2;