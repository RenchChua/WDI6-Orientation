function gameInit(){
  var Quiz = function(questionBank, questionsAsked, playerTurn, currentQuestion, playerScore, outcome, endGame){
    this.questionBank = questionBank;
    this.questionsAsked = questionsAsked;
    this.playerTurn = playerTurn;
    this.currentQuestion = currentQuestion;
    this.playerScore = playerScore;
    this.outcome = outcome;
    this.endGame = "false";
  };

  Quiz.prototype.play = function(){
    // declaring all the variables for the game
    var questionNumChosen;
    var scoreChange = 0;

    var askQuestion = function(){
      questionNumChosen = chooseRandomQuestion(this.questionBank, this.questionsAsked); //keeping track of the question number chosen at random
      this.questionsAsked.push(questionNumChosen);
      if((this.currentQuestion - 1)% 2 === 0){
        playerTurn = 0;
      }else{
        playerTurn = 1;
      }

      $("#turn").text("PLAYER " + (playerTurn +1 ) + " TO ANSWER" );
      $(".question-number-container h2").text("QUESTION " + this.currentQuestion + "/10");

    }.bind(this); //closes askQuestion function

    function chooseRandomQuestion(questionBankforRandom, questionsAskedArr){
      var questionNumChosen = Math.floor(20 * Math.random() + 1);
      if(questionsAskedArr.indexOf(questionNumChosen) > -1){
        questionNumChosen = chooseRandomQuestion(questionBankforRandom, questionsAskedArr);
      }else{
        var questionChosenText = questionBankforRandom[questionNumChosen].question;
        $(".question-container h2").text(questionChosenText);
      }
      return questionNumChosen;
    }

    function displayAnswer(choice, questionAsked, turnNumber){
      if(turnNumber === 10){
        $(".close-btn-text h2").text("SHOW WINNER");
        $(".close-btn-text").css("left", "13px");
        $(".turn-container").css("display", "none");
      }else{
        $(".close-btn-text h2").text("NEXT QUESTION");
        $(".close-btn-text").css("left", "3px");
      }
      $(".answer-container").css("display","block");
      $(".answer-text-container h2").text(questionAsked.explanation);
      if(choice === questionAsked.answer){
        $(".outcome-container h2").text(choice + " IS CORRECT!");
        return 1;
      }else{
        $(".outcome-container h2").text(choice + " IS WRONG!");
        return 0;
      }
    }

    askQuestion();

    var restartGame = function(){
      $(".winner-container").css("display", "none");
      $(".answer-container").css("display","none");
      $(".turn-container").css("display", "block");
      $(".winner-text-container").css("left", "19%");
      $(".player-one-container h2").text("PLAYER 1: 0" );
      $(".player-two-container h2").text("PLAYER 2: 0");
      this.questionsAsked = [];
      this.playerTurn = 0;
      this.currentQuestion = 1;
      this.playerScore = [0, 0];
      this.outcome = "";
      this.endGame = "true";
      askQuestion();
    }.bind(this);

    // button listeners
    $(".true-container").click(function(){
      var questionAsked = this.questionBank[questionNumChosen];
      var turnNumber = this.currentQuestion;
      scoreChange = displayAnswer("TRUE", questionAsked, turnNumber);
      this.playerScore[playerTurn] += scoreChange;
      $(".player-one-container h2").text("PLAYER 1: " + this.playerScore[0]);
      $(".player-two-container h2").text("PLAYER 2: " + this.playerScore[1]);
    }.bind(this));

    $(".false-container").click(function(){
      var questionAsked = this.questionBank[questionNumChosen];
      var turnNumber = this.currentQuestion;
      scoreChange = displayAnswer("FALSE", questionAsked, turnNumber);
      this.playerScore[playerTurn] += scoreChange;
      $(".player-one-container h2").text("PLAYER 1: " + this.playerScore[0]);
      $(".player-two-container h2").text("PLAYER 2: " + this.playerScore[1]);
    }.bind(this));

    $(".close-btn").click(function(){
      this.currentQuestion += 1;
      if(this.currentQuestion < 11){
        $(".answer-container").css("display","none");
        askQuestion();
      }else{
        if(this.playerScore[0] > this.playerScore[1]){
          $(".winner-text-container h2").text("PLAYER 1 WON!");
        }else if(this.playerScore[1] > this.playerScore[0]){
          $(".winner-text-container h2").text("PLAYER 2 WON!");
        }else{
          $(".winner-text-container").css("left", "25%");
          $(".winner-text-container h2").text("IT'S A DRAW!");
        }
        $(".winner-container").css("display", "block");
      }
    }.bind(this));

    $(".win-close-btn").click(function(){
      restartGame();
    }.bind(this));

    $(".restart-container").click(function(){
      restartGame();
    }.bind(this));

    if(this.endGame === "true"){
      console.log("game ended");
    }else{
      console.log("game not ended");
    }
  }; //end of play function


  var quiz1Questions = {
    1: {question: "Newton's First Law is also known as the Law of Inertia",
        answer:"TRUE",
        explanation: "Newton's First Law states that an object at rest will stay at rest and an object in motion will continue moving with the same velocity unless an unbalanced force acts on it"},
    2: {question: "Momentum depends on speed and weight",
        answer:"FALSE",
        explanation: "Momentum is the product of velocity and mass"},
    3: {question: "An object that has larger mass will always have more thermal energy than an object with smaller mass of same temperature.",
        answer:"FALSE",
        explanation: "The amount of thermal energy an object has depends on its mass, temperature and specific heat capacity"},
    4: {question: "The Zeroth Law of Thermodynamics is also known as the Law of Entropy",
        answer:"FALSE",
        explanation: "The Zeroth Law of Thermodynamics is about thermal equilibria. The Second Law of Thermodynamics is the one that is known as the Law of Entropy"},
    5: {question: "Current is the measure of the rate of flow of charges",
        answer:"TRUE",
        explanation: "Current is a base quantity. Its SI unit is the Ampere"},
    6: {question: "Energy is a scalar quantity",
        answer:"TRUE",
        explanation: "Energy is the dot product of two vectors - force and displacement"},
    7: {question: "In 1905, Albert Einstein wrote four scientific papers, each of which could have won a Nobel Prize",
        answer:"TRUE",
        explanation: "The four papers were on the photoelectric effect, special relativity, Brownian motion, and mass-energy equivalence respectively. Einstein eventually won the Nobel Prize for the paper on the photoelectric effect"},
    8: {question: "The amount of energy a beam of light has depends only on its intensity",
        answer:"FALSE",
        explanation: "The amount of energy a beam of light has also depends on its frequency."},
    9: {question: "Energy can never be created nor destroyed, only transformed from one form to another",
        answer:"FALSE",
        explanation: "Mass can be destroyed to create energy. This is the basis of nuclear reactions"},
    10: {question: "On 4 July 2012, the teams working at the Large Hadron Collider made the massive declaration that they had discovered the Higgs boson.",
        answer:"TRUE",
        explanation: "On 14 March 2013 the teams had done much more testing, and announced that they now think the new particle was indeed a Higgs boson."},
    11: {question: "It is widely regarded that Ida Livelace was the first computer programmer",
        answer:"FALSE",
        explanation: "Ada Lovelace was widely regarded to be the world's first computer programmer. In 1842, she wrote an algorithm for Babbage's Analytical Engine to calculate Bernoulli numbers"},
    12: {question: "In 1936, Alan Turing published a paper that included the notion of a machine that could perform the tasks of all other computational machines",
        answer:"TRUE",
        explanation: "The central concept of modern computers is based upon the Turing's concept of a universal machine"},
    13: {question: "Moore's Law is an observation that the memory density of hard disks doubles approximately every two years",
        answer:"FALSE",
        explanation: "Moore's Law is an observation that the number of transistors on an integrated circuit doubles approximately every 18 to 24 months"},
    14: {question: "The P vs NP problem hasn't been solved yet",
        answer:"TRUE",
        explanation: "The P vs NP problem asks whether every problem whose solution can be quickly verified by a computer can also be quickly solved by a computer. The first person/team to solve it will get a cool US$1,000,000"},
    15: {question: "Werner Jacobi demonstrated the first working integrated circuit in 1949",
        answer:"FALSE",
        explanation: "Jack Kilby successfully demonstrating the first working integrated circuit on 12 September 1958. He won a Nobel Prize for it in 2000"},
    16: {question: "Plato wrote about the allegory of the cave",
        answer:"TRUE",
        explanation: "It is part of Plato's Republic and compares the effect of education and the lack of it on our nature"},
    17: {question: "Leviathan by Thomas Hobbes established the social contract theory",
        answer:"TRUE",
        explanation: "It was the foundation of most western political theory. It also contains the quote: 'the life of man, solitary, poor, nasty, brutish, and short'"},
    18: {question: "Lao Tzu's Tao Te Ching is about religion",
        answer:"FALSE",
        explanation: "It is more about political and moral philosophy than about religion"},
    19: {question: "Confucius believed that a good ruler would be self-disciplined, would govern his subjects through education and by his own example, and would seek to correct his subjects with love and concern rather than punishment and coercion.",
        answer:"TRUE",
        explanation: "This, and other ideas, can be found in the Analects, which is a collection of sayings and ideas attributed to Confucius"},
    20: {question: "'Cogito ergo sum' means 'Mathematics allows us to think'",
        answer:"FALSE",
        explanation: "It means 'I think therefore I am' and is the best-known philosophical statement by Rene Descartes"}
  };

  var randomQuestionsQuiz = new Quiz(quiz1Questions, [], 0, 1, [0, 0], "", "false");


  randomQuestionsQuiz.play();
}

gameInit();
