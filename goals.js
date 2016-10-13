// Multiple choice quiz 
// 10 questions per round - each question has 4 choices and 1 correct answer.
// The questions appear on the screen one at a time.  The first queston appears after clicking "Start Quiz" button
//  and subsequent questions appear after the previous one is answered.




var msg = "1"
function startQuiz() {
	var el = document.getElementById('startButton');
	el.textContent = msg;
}
// startQuiz();  


//this will show immediately if we stop at Start Quiz(); because those words will immediately call the function. Using the function below will have the user click on the button before the msg changes from Start Quiz to 1

window.onload = function() {
	document.getElementById('startButton').onclick = function fun() {
		startQuiz("1")
	}
}


var questionArray = ["What is Casu Marzu?", "What is a bain marie?", "What is the traditional flavoring used in creme brulee?", "What is a boule?"];

var answerArray = [ ["a type of cheese", "a brand of Dutch beer", "a Brazilian breakfast cereal", "a wine varietal"],[" a baking method using water", "a type of apple pie", "Turkish Rosewater", "a type of pear"],["chocolate", "pistachio", "strawberry", "vanilla"],["a type of French bread", "Italian Cheese", "a Mauritian seafood delicacy", "another name for Roasted Duck"]];

var answerKey = ["a type of cheese", "a baking method using water", "vanilla", "a type of French bread"]

function startQuiz() {
	$( "#startButton" ).click(function() {
  		questionAnswerDisplay(question,answers,key);
  	})};
startQuiz();



// everything below is commented out.  trying out various functions before deciding on which one





// function questionAnswerDisplay(text,correct) {
// 	//var answerX = text.answer1;
// 	$("#questionsDiv").text(text.question);
// 	$("#answer1").text(text.answer1);
// 	$("#answer2").text(text.answer2);
// 	$("#answer3").text(text.answer3);
// 	$("#answer4").text(text.answer4);
// 	}

// 	function moveToNext(text,correct) {
// 	$( "#startButton" ).click(function() {
//   		questionAnswerDisplay(questionAndAnswer2,"#answer1");
//   	})};


// 	moveToNext(questionAndAnswer3,"#answer1");

// 	// HELP FROM:  https://stackoverflow.com/questions/7917831/jquery-change-color-on-click
// 	// INDICATING CORRECT/INCORRECT ON THE BLACKBOARD
// 	$(function() {  
// 		$("#answer1").click(function(){
// 		    $("#questions").append("<p>Correct!</p>");
// 		  });
// 		$("#answer2").click(function(){
// 		    $("#questions").append("<p>Sorry, that is incorrect.</p>");
// 		  });
// 		$("#answer3").click(function(){
// 		    $("#questions").append("<p>Sorry, that is incorrect.</p>");
// 		  });
// 		});









// here I will try to create a function that will put the answers onto the button and then change them as the correct answer is clicked

// function Question(question, correctAnswer, answers){
// 	this.question = question;
// 	this.correctAnswer = correctAnswer;
// 	this.answers = answers;
// }
// var questionOne = new Question("What is Casu Marzu?", "a type of cheese", ["a wine varietal", "a type of cheese", "a Dutch beer", "a brand of Brazilian cereal"])

// $("startButton").on("click", function(){
// 	$("questionsDiv").text(questionOne.question)

// 	$("answer1").text(questionOne.answers[0])
// 	$("answer2").text(questionOne.answers[1])
// 	$("answer3").text(questionOne.answers[2])
// 	$("answer4").text(questionOne.answers[3])

// })
// $("answer1").on("click", function(){
// 	if($(this).html() === questionOne.correctAnswer){
// 		console.log("Yes! You are correct!")
// 	}
// 	else {
// 		console.log("wrong")
// 	}
// })

// $('#b').on('click', function(){
//   var answerOnTheButton = $(this).html()
//   compareAnswer(answerOnTheButton, questionOne.correctAnswer)
// })


// function compareAnswer(answerOnTheButton, correctAnswer){
//    if(answerOnTheButton === correctAnswer){
//     console.log('you got it right')
//   }
//   else{
//     console.log('wrong')
//   }
// }

