// Create Quiz and set it to an empty array
function Quiz () {
  this.questions = [];
}

// Define add function for Quiz
Quiz.prototype.add = function(questions) {
  this.questions.push(questions);
};

var quiz = new Quiz();
var question = document.getElementById("question");
var choice0 = document.getElementById("choice0");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");

// Add the questions from question.js to the quiz
quiz.add(casu);
quiz.add(bain);
quiz.add(boule);

// Set initial values for when the page loads
question.innerHTML = quiz.questions[0].question;
choice0.innerHTML = quiz.questions[0].choice0;
choice1.innerHTML = quiz.questions[0].choice1;
choice2.innerHTML = quiz.questions[0].choice2;
choice3.innerHTML = quiz.questions[0].choice3;