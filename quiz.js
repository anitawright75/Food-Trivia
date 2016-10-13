var totalCorrect = 0;
var currentQuestion = 0;
var totalQuestions = quiz.questions.length; // I set it to an open lenght so that more questions can be added later if desired. 
var guess0 = document.getElementById("guess0");
var guess1 = document.getElementById("guess1");
var guess2 = document.getElementById("guess2");
var guess3 = document.getElementById("guess3");

// Track progress through quiz
var progress = function () {
var progress = document.getElementById("progress");
  progress.innerHTML = "Question " + (currentQuestion+1) + " of " + totalQuestions;
};

// Set question and choices 
var setQuestion = function (currentQuestion) {
  question.innerHTML = quiz.questions[currentQuestion].question;
  choice0.innerHTML = quiz.questions[currentQuestion].choice0;
  choice1.innerHTML = quiz.questions[currentQuestion].choice1;
  choice2.innerHTML = quiz.questions[currentQuestion].choice2;
  choice3.innerHTML = quiz.questions[currentQuestion].choice3;
};

// variable used to score and add up correct answers
// stored here to be added to the onclick function later

var addOne = function() {
  totalCorrect = totalCorrect + 1;
};

// function used to replace the word "quiz" with results when finished
var finish = function () {
  var quizElement = document.getElementById('quiz');
  quizElement.innerHTML = '<h1>Game Over</h1>';
  quizElement.innerHTML += '<h2>You got ' + totalCorrect +  ' questions correct.</h2>';  
};

// Check to see if this is the last question
var checkDone = function (currentQuestion) {
  if (currentQuestion == totalQuestions) {
    finish();
  } else {
    setQuestion(currentQuestion);
    progress();
  }
};

// Track results on clicking the first choice
guess0.onclick = function () {
  if (quiz.questions[currentQuestion].correct == choice0.innerHTML) {  
    currentQuestion = currentQuestion + 1;
    console.log('if statement is happening');
    addOne();
    checkDone(currentQuestion);
  } else {
    currentQuestion = currentQuestion + 1;
    checkDone(currentQuestion);
  }
};

// Track results on clicking the second choice
guess1.onclick = function () {
  if (quiz.questions[currentQuestion].correct == choice1.innerHTML) {  
    currentQuestion = currentQuestion + 1;
    addOne();
    checkDone(currentQuestion);
  } else {
    currentQuestion = currentQuestion + 1;
    checkDone(currentQuestion);
  }
};
// results for clicking third choice
guess2.onclick = function () {
  if (quiz.questions[currentQuestion].correct == choice2.innerHTML) {  
    currentQuestion = currentQuestion + 1;
    addOne();
    checkDone(currentQuestion);
  } else {
    currentQuestion = currentQuestion + 1;
    checkDone(currentQuestion);
  }
};

// results for clickng on the 4th choice

guess3.onclick = function () {
  if (quiz.questions[currentQuestion].correct == choice3.innerHTML) {  
    currentQuestion = currentQuestion + 1;
    addOne();
    checkDone(currentQuestion);
  } else {
    currentQuestion = currentQuestion + 1;
    checkDone(currentQuestion);
  }
};


guess4.onclick = function () {
  if (quiz.questions[currentQuestion].correct == choice4.innerHTML) {  
    currentQuestion = currentQuestion + 1;
    addOne();
    checkDone(currentQuestion);
  } else {
    currentQuestion = currentQuestion + 1;
    checkDone(currentQuestion);
  }
};

guess5.onclick = function () {
  if (quiz.questions[currentQuestion].correct == choice5.innerHTML) {  
    currentQuestion = currentQuestion + 1;
    addOne();
    checkDone(currentQuestion);
  } else {
    currentQuestion = currentQuestion + 1;
    checkDone(currentQuestion);
  }
};

guess6.onclick = function () {
  if (quiz.questions[currentQuestion].correct == choice6.innerHTML) {  
    currentQuestion = currentQuestion + 1;
    addOne();
    checkDone(currentQuestion);
  } else {
    currentQuestion = currentQuestion + 1;
    checkDone(currentQuestion);
  }
};

guess7.onclick = function () {
  if (quiz.questions[currentQuestion].correct == choice7.innerHTML) {  
    currentQuestion = currentQuestion + 1;
    addOne();
    checkDone(currentQuestion);
  } else {
    currentQuestion = currentQuestion + 1;
    checkDone(currentQuestion);
  }
};

guess8.onclick = function () {
  if (quiz.questions[currentQuestion].correct == choice8.innerHTML) {  
    currentQuestion = currentQuestion + 1;
    addOne();
    checkDone(currentQuestion);
  } else {
    currentQuestion = currentQuestion + 1;
    checkDone(currentQuestion);
  }
};

guess9.onclick = function () {
  if (quiz.questions[currentQuestion].correct == choice9.innerHTML) {  
    currentQuestion = currentQuestion + 1;
    addOne();
    checkDone(currentQuestion);
  } else {
    currentQuestion = currentQuestion + 1;
    checkDone(currentQuestion);
  }
};

// Set initial progress 0 of total questions
progress();