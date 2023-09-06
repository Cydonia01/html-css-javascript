let now = new Date(); // current time

// Get Methods
result = now;
result = now.getDate(); // day
result = now.getDay(); // 0: friday 6: saturday
result = now.getFullYear(); // year
result = now.getHours(); // hour
result = now.getTime();

// Set Methods
// now.setFullYear(2025);
now.setMonth(7); // 0: january
now.setDate(15);

result = now;

let birthDay = new Date(1990, 5, 15);

result = now.getFullYear() - birthDay.getFullYear();

let milisecond = now - birthDay;
let second = milisecond / 1000;
let minute = second / 60;
let hours = minute / 60; 
let days = hours / 24;

console.log(days);
console.log(typeof days);