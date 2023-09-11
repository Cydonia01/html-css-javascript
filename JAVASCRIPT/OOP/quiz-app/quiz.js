function Quiz(questions) {
    this.questions = questions;
    this.questionIndex = 0;
    this.correctAnswerNumber = 0;
}

Quiz.prototype.takeQuestion = function() {
    return this.questions[this.questionIndex];
}