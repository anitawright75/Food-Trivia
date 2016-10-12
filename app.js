var allQuestions = [{
	question: "What is Casu Marzu?",
	choices: ["a wine varietal", "a type of cheese", "a Dutch beer", "a brand of Brazilian cereal"],
	correctAnswer: 1
},
{
	question: "What is a bain marie and why is it used?",
	choices: [" a baking method", "a type of apple pie", "Turkish Rosewater", "a type of pear"],
	correctAnswer: 0
},
{
	question: "What is the traditional flavoring used in creme brulee?",
	choices: ["chocolate", "pistachio", "strawberry", "vanilla"],
	correctAnswer: 3
},
{	
	question: "What is a boule?",
	choices: ["a type of French bread", "Italian Cheese", "a Mauritian seafood delicacy", "another name for Roasted Duck"],
	correctAnswer: 0
}];

var myQuestion = new Question();


function Question(question, correctAnswer, answers){
  
  this.question = question;
  this.correctAnswer = correctAnswer;
  this.answers = answers;
}

$("#startQuestion").on("click", function() {


});

question.addEventListener('click', function(event){

})
//$('#startQuestion').on('click', function(){
  console.log('click works ')

  $('#questionDiv').text(questionOne.question)

  $('#a').text(questionOne.answers[0])
  $('#b').text(questionOne.answers[1])
  $('#c').text(questionOne.answers[2])
  $('#d').text(questionOne.answers[3])
})

$('#a').on('click', function(){
  console.log($(this), ' <----- this is $(this)', this, "<--------")

  if($(this).html() === questionOne.correctAnswer){
    console.log('you got it right')
  }
  else {
    console.log('wrong')
  }

})

$('#b').on('click', function(){

  if($(this).html() === questionOne.correctAnswer){
    console.log('you got it right')
  }
  else{
    console.log('wrong')
  }

})