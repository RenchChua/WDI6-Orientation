var Quiz = function(questionBank){
  this.questionBank = questionBank;
  this.questionsAsked = [];
  this.playerTurn = "Player 1";
  this.playerScore = [0, 0];
  this.outcome = "";
};

Quiz.prototype.play = function(){
  var questionNumChosen
  for(i=1; i <= 10; i ++){
    questionBankforRandom = this.questionBank;
    questionsAskedArr = this.questionsAsked;
    questionNumChosen = chooseRandomQuestion(questionBankforRandom, questionsAskedArr);
    // get response from player
    // check response
    // show correct or not
    // display explanation
    // update score
    // change player
    this.questionsAsked.push(questionNumChosen);
    console.log(this.questionsAsked);
  };
};

function chooseRandomQuestion(questionBankforRandom, questionsAskedArr){
  var questionNumChosen = Math.floor(20 * Math.random() + 1);
  if(questionsAskedArr.indexOf(questionNumChosen) > -1){
    questionNumChosen = chooseRandomQuestion(questionBankforRandom, questionsAskedArr);
  }else{
    console.log(questionBankforRandom[questionNumChosen].question); // change to display question on html
  }
  return questionNumChosen;
}



var trueFalseQuiz = new Quiz({
  1: {question: "Newton's First Law is also known as the Law of Inertia",
      answer:"True",
      explanation: "Newton's First Law states that an object at rest will stay at rest and an object in motion will continue moving with the same velocity unless an unbalanced force acts on it"},
  2: {question: "Momentum depends on speed and weight",
      answer: "False",
      explanation: "Momentum is the product of velocity and mass"},
  3: {question: "An object that has larger mass will always have more thermal energy than an object with smaller mass of same temperature.",
      answer:"False",
      explanation: "The amount of thermal energy an object has depends on its mass, temperature and specific heat capacity"},
  4: {question: "The Zeroth Law of Thermodynamics is also known as the Law of Entropy",
      answer:"False",
      explanation: "The Zeroth Law of Thermodynamics is about thermal equilibria. The Second Law of Thermodynamics is the one that is known as the Law of Entropy"},
  5: {question: "Current is the measure of the rate of flow of charges",
      answer:"True",
      explanation: "Current is a base quantity. Its SI unit is the Ampere"},
  6: {question: "Energy is a scalar quantity",
      answer:"True",
      explanation: "Energy is the dot product of two vectors - force and displacement"},
  7: {question: "In 1905, Albert Einstein wrote four scientific papers, each of which could have won a Nobel Prize",
      answer:"True",
      explanation: "The four papers were on the photoelectric effect, special relativity, Brownian motion, and mass-energy equivalence respectively. Einstein eventually won the Nobel Prize for the paper on the photoelectric effect"},
  8: {question: "The amount of energy a beam of light has depends only on its intensity",
      answer:"False",
      explanation: "The amount of energy a beam of light has also depends on its frequency."},
  9: {question: "Energy can never be created nor destroyed, only transformed from one form to another",
      answer:"False",
      explanation: "Mass can be destroyed to create energy. This is the basis of nuclear reactions"},
  10: {question: "On 4 July 2012, the teams working at the Large Hadron Collider made the massive declaration that they had discovered the Higgs boson.",
      answer:"True",
      explanation: "On 14 March 2013 the teams had done much more testing, and announced that they now think the new particle was indeed a Higgs boson."},
  11: {question: "It is widely regarded that Ida Livelace was the first computer programmer",
      answer:"False",
      explanation: "Ada Lovelace was widely regarded to be the world's first computer programmer. In 1842, she wrote an algorithm for Babbage's Analytical Engine to calculate Bernoulli numbers"},
  12: {question: "In 1936, Alan Turing published a paper that included the notion of a machine that could perform the tasks of all other computational machines",
      answer:"True",
      explanation: "The central concept of modern computers is based upon the Turing's concept of a universal machine"},
  13: {question: "Moore's Law is an observation that the memory density of hard disks doubles approximately every two years",
      answer:"False",
      explanation: "Moore's Law is an observation that the number of transistors on an integrated circuit doubles approximately every 18 to 24 months"},
  14: {question: "The P vs NP problem hasn't been solved yet",
      answer:"True",
      explanation: "The P vs NP problem asks whether every problem whose solution can be quickly verified by a computer can also be quickly solved by a computer. The first person/team to solve it will get a cool US$1,000,000"},
  15: {question: "Werner Jacobi demonstrated the first working integrated circuit in 1949",
      answer:"False",
      explanation: "Jack Kilby successfully demonstrating the first working integrated circuit on 12 September 1958. He won a Nobel Prize for it in 2000"},
  16: {question: "Plato wrote about the allegory of the cave",
      answer:"True",
      explanation: "It is part of Plato's Republic and compares the effect of education and the lack of it on our nature"},
  17: {question: "Leviathan by Thomas Hobbes established the social contract theory",
      answer:"True",
      explanation: "It was the foundation of most western political theory. It also contains the quote: 'the life of man, solitary, poor, nasty, brutish, and short'"},
  18: {question: "Lao Tzu's Tao Te Ching is about religion",
      answer:"False",
      explanation: "It is more about political and moral philosophy than about religion"},
  19: {question: "Confucius believed that a good ruler would be self-disciplined, would govern his subjects through education and by his own example, and would seek to correct his subjects with love and concern rather than punishment and coercion.",
      answer:"True",
      explanation: "This, and other ideas, can be found in the Analects, which is a collection of sayings and ideas attributed to Confucius"},
  20: {question: "'Cogito ergo sum' means 'Mathematics allows us to think'",
      answer:"False",
      explanation: "It means 'I think therefore I am' and is the best philosophical statement by Rene Descartes"}
});

trueFalseQuiz.play()
// .bind(trueFalseQuiz);

// for(i = 1; i < 2; i ++){
//   console.log(trueFalseQuiz.questionBank[i].question);
// }
