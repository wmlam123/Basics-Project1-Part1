var main = function (input) {  
  var randomSPS = returnArraySPS ();
  console.log (randomSPS);
  var myOutputValue = 'Please enter "scissors", "paper" or "stone".';

  if (input == randomSPS) {
    myOutputValue = `The computer chose ${randomSPS}, you chose ${input}, it is a draw!`
  }
 
  else if (input == "scissors" && randomSPS != "stone") {
    myOutputValue = `The computer chose ${randomSPS}.<br><br>
    You chose ${input}.<br><br>You lose! Bummer.<br><br>
    Now you can type "scissors" "paper" or "stone" to play another round!`
  }

  else if (input == "scissors" && randomSPS != "paper") {
    myOutputValue = `The computer chose ${randomSPS}, you chose ${input}, you win!`
  }

  else if (input == "stone" && randomSPS != "paper") {
    myOutputValue = `The computer chose ${randomSPS}.<br><br>
    You chose ${input}.<br><br>You lose! Bummer.<br><br>
    Now you can type "scissors" "paper" or "stone" to play another round!`
  }

  else if (input == "stone" && randomSPS != "scissors") {
    myOutputValue = `The computer chose ${randomSPS}, you chose ${input}, you win!`    
  }

  else if (input == "paper" && randomSPS != "scissors") {
    myOutputValue = `The computer chose ${randomSPS}.<br><br>
    You chose ${input}.<br><br>You lose! Bummer.<br><br>
    Now you can type "scissors" "paper" or "stone" to play another round!`
  }

  else if (input == "paper" && randomSPS != "stone") {
    myOutputValue = `The computer chose ${randomSPS}, you chose ${input}, you win!`
  }

  return myOutputValue;
};

var returnArraySPS = function () {
  var elementsOfSPS = ["scissors", "paper", "stone"];
  var randomSPS = elementsOfSPS[Math.floor(Math.random()*elementsOfSPS.length)];

  return randomSPS;
}
