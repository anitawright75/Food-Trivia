// Create question element with question, choices, and correct answer
function Question(question, choice0, choice1, choice2, choice3, correct) {
  this.question = question;
  this.choice0 = choice0;
  this.choice1 = choice1;
  this.choice2 = choice2;
  this.choice3 = choice3;
  this.correct = correct;
}

// Define some initial questions
var casu = new Question("What is Casu Marzu?", "1. a type of cheese", "2. a British apple variety", "3. a baked dish from Lichtenstein", "4. a Dutch beer", "a type of cheese");
var bain = new Question("What is a bain-marie?", "1. a baking method using water", "2. a flavour of Turkish Delight", "3. a variety of pear", "4. a Russian cabbage dish", "a baking method using water");
var boule = new Question("What is a boule?", "1. the correct name for brown eggs", "2. the hens who lay brown eggs", "3. a kind of sushi roll", "4. a type of bread", "a type of bread");


// Turn choices into an array
// Check isCorrectAnswer