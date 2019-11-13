// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

var PAPER = "paper"
var ROCK = "rock"
var SCISSORS = "scissors"

var COMPUTER_WINS = "You lose"
var USER_WINS = "You win"
var TIE = "It's a tie"
 
// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function(){
    var input= $("#input").val().toLowerCase();
    var computerInput = chooseComputer();
    $("#userChoice").html(input);
    $("#computerChoice").html(computerInput);
    a= ["rock" , "paper" , "scissors"]
    var result = choice(computerInput, input);
    $("#result").html(result);
});

alert(computer)
function chooseComputer(){
    let num= Math.random();
if(num <= 0.33){
    return ROCK
}else if(num > 0.33 && num <=0.66){
    return SCISSORS
}else{
    return PAPER
}
}
function choice(computer , input){
if(computer == input){
    return TIE
}
if(computer == ROCK){
    if(input == PAPER){
        return USER_WINS
    }
    if(input == SCISSORS){
        return COMPUTER_WINS
    }
}
if (computer == PAPER){
    if(input == ROCK){
        return COMPUTER_WINS
    }
    if(input == SCISSORS){
        return USER_WINS
    }
}
if(computer == SCISSORS){
    if(input == ROCK){
        return USER_WINS
    }
    if(input == PAPER){
        return COMPUTER_WINS
    }
    }
}


    