// var allQuestions = [{
// 	question: "What is Casu Marzu?",
// 	choices: ["a wine varietal", "a type of cheese", "a Dutch beer", "a brand of Brazilian cereal"],
// 	correctAnswer: 1
// },
// {
// 	question: "What is a bain marie and why is it used?",
// 	choices: [" a baking method", "a type of apple pie", "Turkish Rosewater", "a type of pear"],
// 	correctAnswer: 0
// },
// {
// 	question: "What is the traditional flavoring used in creme brulee?",
// 	choices: ["chocolate", "pistachio", "strawberry", "vanilla"],
// 	correctAnswer: 3
// },
// {	
// 	question: "What is a boule?",
// 	choices: ["a type of French bread", "Italian Cheese", "a Mauritian seafood delicacy", "another name for Roasted Duck"],
// 	correctAnswer: 0
// }];



function Question(question, correctAnswer, answers){
  
  this.question = question;
  this.correctAnswer = correctAnswer;
  this.answers = answers;
}

var questionOne = new Question("What is Casu Marzu?", "a type of cheese", ["a wine varietal", "a type of cheese", "a Dutch beer", "a brand of Brazilian cereal"])

$("#startButton").on('click', function(){
$("#questionDiv").text(questionOne.question)
$("#anwer1").text(questionOne.answers[0])
$("answer2").text(questionOne.answers[1])
$("answer3").text(questionOne.answers[2])
$("answer4").text(questionOne.answers[3])
})


$("#answer1").on('click', function(){
 // console.log($(this), ' <----- this is $(this)', this, "<--------")

  if($(this).html() === questionOne.correctAnswer){
    console.log('you got it right')
  }
  else {
    console.log('wrong')
  }

})

$("#answer1").on('click', function(){

  if($(this).html() === questionOne.correctAnswer){
    console.log('you got it right')
  }
  else{
    console.log('wrong')
  }

})


// stopping here because I need to clarify exactly how this is supposed to loop into the next batch of questions


$("answer2").on('click', function(){
  var answerOnTheButton = $(this).html()
  compareAnswer(answerOnTheButton, questionOne.correctAnswer)
})


function compareAnswer(answerOnTheButton, correctAnswer){
   if(answerOnTheButton === correctAnswer){
    console.log('you got it right')
  }
  else{
    console.log('wrong')
  }
}