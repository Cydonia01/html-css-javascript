let url = "https://www.udemy.com/";
let courseName = "Full Stack Web Development";

// length of url
let len = url.length;
console.log("length of url is " + len);

// number of words in courseName
let wordsLen = courseName.split(" ").length;
console.log("number of words is courseName is " + wordsLen)

// is url starts with https.
console.log(url.startsWith("https") ? "url starts with https": "url doesn't start with https");

// is courseName includes Stack word.
console.log(url.indexOf("Stack") ? "yes it includes":"no it does not include");

// creating below url with url and courseName variables.
// https://www.udemy.com/full-stack-web-development

courseName = courseName.toLowerCase();
courseName = courseName.replaceAll(" ", "-");
console.log(url + courseName);