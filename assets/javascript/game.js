$(document).ready(function() {

var wins = 0;
var loses = 0;
var totalScore = 0;
var gameOver = false;
var randomized = false;
var crystals =[];

function initializeGame() {
    if(gameOver == true) {
    mainNumber = Math.floor((Math.random() * 120) + 19);
    $("#gameNumber").text(mainNumber);
    crystals = [];
    $("#btn1").attr("value", Math.floor((Math.random() * 12) + 1));
    $("#btn2").attr("value", Math.floor((Math.random() * 12) + 1));
    $("#btn3").attr("value", Math.floor((Math.random() * 12) + 1));
    $("#btn4").attr("value", Math.floor((Math.random() * 12) + 1));
    totalScore = 0;
    $("#playerScore").text(totalScore);
    gameOver = false;
}}
window.onload = function () {
     mainNumber = Math.floor((Math.random() * 120) + 19);
    $("#gameNumber").text(mainNumber);
    crystals = []; //extra
    $("#btn1").attr("value", Math.floor((Math.random() * 12) + 1));
    $("#btn2").attr("value", Math.floor((Math.random() * 12) + 1));
    $("#btn3").attr("value", Math.floor((Math.random() * 12) + 1));
    $("#btn4").attr("value", Math.floor((Math.random() * 12) + 1));
$("#wins").text("Wins: " + wins);
$("#loses").text("Loses: " + loses);






}

$("#crystals").on("click", ".btn", function() {
crystalValue = $(this).val();
crystals.push(crystalValue);
    console.log(crystalValue);
    console.log(crystals);


//does this function need to be inside the click function?
function crystalValues(total, num){
    return total + num;}  

crystalValue = parseInt(crystalValue);

score = crystals.reduce(crystalValues, 0);
totalScore += crystalValue;
$("#playerScore").text(totalScore);

if(mainNumber < totalScore){
    alert("You Lose!");
    loses += 1;   
    $("#loses").text("Loses: " + loses);
    gameOver = true;
}
else if(mainNumber === totalScore){
    alert("You Win!");
    wins += 1;
    $("#wins").text("Wins: " + wins);   
    gameOver = true;
}
if(gameOver == true) {
    initializeGame();
    
}
    
})





});


