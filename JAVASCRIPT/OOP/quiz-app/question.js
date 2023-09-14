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
    new Question("Which one is not a Javascript framework ?", {a: "React", b:"Angular", c: "Vue.js", d: "Asp.net"}, "d"),
    new Question("Which one is not considered within frontend?", {a: "CSS", b:"HTML", c: "Javascript", d: "SQL"}, "d"),
    new Question("Which one is considered within backend?", {a: "Node.js", b:"Typescript", c: "Angular", d: "React"}, "a")
];