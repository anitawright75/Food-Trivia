


//Created a question element with the question, four choices, and the correct answer


function Question(question, choice0, choice1, choice2, choice3, correct) {
  this.question = question;
  this.choice0 = choice0;
  this.choice1 = choice1;
  this.choice2 = choice2;
  this.choice3 = choice3;
  // this.choice4 = choice4;
  // this.choice5 = choice5;
  // this.choice6 = choice6;
  // this.choice7 = choice7;
  // this.choice8 = choice8;
  // this.choice9 = choice9;
  this.correct = correct;
}

// Define some initial questions
var casu = new Question("What is Casu Marzu?", "1. a type of cheese", "2. a British apple variety", "3. a baked dish from Lichtenstein", "4. a Dutch beer", "1. a type of cheese");
var bain = new Question("What is a bain-marie?", "1. a baking method using water", "2. a flavour of Turkish Delight", "3. a variety of pear", "4. a Russian cabbage dish", "2. a baking method using water");
var boule = new Question("What is a boule?", "1. the correct name for brown eggs", "2. the hens who lay brown eggs", "3. a kind of sushi roll", "4. a type of bread", "4. a type of bread");
var maris = new Question("What is a Maris Piper?", "1. a Japanese lychee flavoured candy", "2. a British potato", "3. an Irish potato", "4. a kind of chocolate biscuit", "4. a British potato");
var balut = new Question("What is balut?", "1. an African rice dish", "2. a type of Indian curry made with okra", "3. a developing bird embryo that is boiled and eaten from the shell", "4. a type of Danish blue cheese", "3. a developing bird embryo that is boiled and eaten from the shell");
var noodles = new Question("Where do Singapore noodles come from?", "1. Singapore", "2. America", "3. Hong Kong", "4. Iceland", "3. Hong Kong");
var coffee = new Question("What makes kopi luwak coffee so unique?", "1. It takes 45 years for the plant to mature", "2. It only grows in Antarctica during the summer", "3. It is pooped out by the civet cat", "It has 55 times the normal caffeine content", "3. It is pooped out by the civet cat");
var conch = new Question("Where does conch meat come from?", "1. large sea snails", "2. birds native to the Saharan desert", "3. Japanese cows", "4. the bargin meat bin at Moo & Oinks", "1. large sea snails");

var colcannon = new Question("What is colcannon?", "1. an Irish dish of cabbage and potato", "2. a Scottish dish of oats and offal", "3. a type of Vietnamese breakfast sausage","4. a breed of rabbit bred especially for it's sweet dark meat", "1. an Irish dish of cabbage and potato");

var creme = new Question("From which fruit is creme de cassis liqueur made?", "1. blueberries", "2. green apples", "3. black currents", "4. gooseberries", "3. black currents");



// Turn choices into an array
// Check isCorrectAnswer