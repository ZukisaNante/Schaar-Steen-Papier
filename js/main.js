var choices = ["paper", "rock", "scissors"];
var i = Math.floor(Math.random() * 3);
var ComputerChoice = choices[i];
var UserPoints = 0;
var ComputerPoints = 0;
function score(){
    var score_div = document.getElementById("score").innerHTML = UserPoints + " - " + ComputerPoints;
}
setInterval(score, 50);
function game(UserChoice){
    var box = document.getElementById("challenge");
    box.style.display = "inline-flex";
}
