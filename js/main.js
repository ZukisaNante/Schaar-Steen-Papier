var choices = ["paper", "rock", "scissors"];
var i = Math.floor(Math.random() * 3);
var ComputerChoice = choices[i];
var UserPoints = 0;
var ComputerPoints = 0;
function score(){
    var score_div = document.getElementById("score").innerHTML = UserPoints + " - " + ComputerPoints;
}
setInterval(score, 50);
function convert(word){
    if(word === "paper") return <i class="far fa-hand-paper"></i>;
    if(word === "rock") return <i class="far fa-hand-rock"></i>;
     return <i class="far fa-hand-scissors"></i>;
}
function game(UserChoice){
    var box = document.getElementById("challenge");
    box.style.display = "inline-flex";
    var userDiv = document.getElementById("YourObject");
    userDiv.innerHTML = convert(UserChoice);
    var comDiv = document.getElementById("ComObject");
    comDiv.innerHTML = convert(ComChoice);
}
