function Question(text, options, answer) {
    this.text = text;
    this.options = options;
    this.answer = answer;
}

Question.prototype.checkAnswer = function(answer) {
    return answer == this.answer;
}

let questions = [
    new Question("Which one is a Javascript package management application?", {a: "Node.js", b:"Typescript", c: "Npm", d: "Nuget"}, "c"),
    new Question("Which one doesn't use javascript?", {a: "react", b:"angular", c: "vue.js", d: "asp.net"}, "d"),
    new Question("Which one is not considered within frontend?", {a: "css", b:"html", c: "javascript", d: "sql"}, "d"),
    new Question("Which one is considered within backend?", {a: "Node.js", b:"typescript", c: "angular", d: "react"}, "a")
];