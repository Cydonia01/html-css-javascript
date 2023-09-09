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
    new Question("Which one is a .net package management application?", {a: "Node.js", b:"Nuget", c: "Npm"}, "b")
]

function Quiz(questions) {
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.takeQuestion = function() {
    return this.questions[this.questionIndex];
}

const quiz = new Quiz(questions);

document.querySelector(".btn_start").addEventListener("click", function() {
    document.querySelector(".quiz_box").classList.add("active");

    displayQuestion(quiz.takeQuestion());
    document.querySelector(".next_btn").classList.remove("show");
});

document.querySelector(".next_btn").addEventListener("click", function() {
    if (quiz.questions.length != quiz.questionIndex + 1) {
        quiz.questionIndex++;
        displayQuestion(quiz.takeQuestion());
        document.querySelector(".next_btn").classList.remove("show");
    } else {
        console.log("quiz is over");
    }
})

const option_list = document.querySelector(".option_list");
const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
const incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>'

function displayQuestion(question) {
    let tempQuestion = `<span>${question.text}</span>`;
    let options = "";
    for (let answer in question.options) {
        options += `
            <div class="option">
                <span><b>${answer}</b>: ${question.options[answer]}</span>
            </div>
        `;
    }

    document.querySelector(".question_text").innerHTML = tempQuestion;
    
    option_list.innerHTML = options;

    const option = option_list.querySelectorAll(".option");

    for (let opt of option) {
        opt.setAttribute("onclick","optionSelected(this)");
    }
}

function optionSelected(option) {
    let answer = option.querySelector("span b").textContent;
    let question = quiz.takeQuestion();

    if (question.checkAnswer(answer)) {
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", correctIcon);
    } else  {
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", incorrectIcon);
    }

    for (let i = 0; i < option_list.children.length; i++) {
        option_list.children[i].classList.add("disabled");
    }
    document.querySelector(".next_btn").classList.add("show");
}