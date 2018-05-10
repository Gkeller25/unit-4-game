$(document).ready(function() {
var luke = {name:"Luke Skywalker", side:"light", HP:130, atkPwr:10, counterPwr:12,};
var yoda = {name:"Yoda", side:"light", HP:180, atkPwr:10, counterPwr:16,};
var emperor = {name:"Emperor Palpatine", side:"dark", HP:180, atkPwr:10, counterPwr:16,};
var vader = {name:"Darth Vader", side:"dark", HP:170, atkPwr:10, counterPwr:12,};
var dooku = {name:"Count Dooku", side:"dark", HP:150, atkPwr:10, counterPwr:8,};
var chewie = {name:"Chewbacca", side:"light", HP:120, atkPwr:10, counterPwr:8,};
var chosenCharacter = "";
var playerReady = false;
var opponentReady = false;
var chosenOpponent = ""; 
var opponentsLeft = 3;
var gameOver = false;

//set player stats
$("#chewieFnSel").text(chewie.name);
$("#chewieHpSel").html(chewie.HP);

$("#lukeFnSel").text(luke.name);
$("#lukeHpSel").html(luke.HP);

$("#yodaFnSel").text(yoda.name);
$("#yodaHpSel").html(yoda.HP);

$("#dookuFnSel").text(dooku.name);
$("#dookuHpSel").html(dooku.HP);

$("#vaderFnSel").text(vader.name);
$("#vaderHpSel").html(vader.HP);

$("#emperorFnSel").text(emperor.name);
$("#emperorHpSel").html(emperor.HP);


//Pick players which determines Opponents....Keep opponents from changing during fight
//Player Selection Chewbacca.....filter light characters out
$("#chewie-select").on("click", function(){
    chosenCharacter = chewie;
    $("#playerLuke, #playerYoda, #playerDooku, #playerVader, #playerEmperor").css("display", "none");
    $("#defenderDooku, #defenderVader, #defenderEmperor").css("display", "block");
    $("#chewie-select").attr("disabled", "true");
    $("#dookuFnOp").text(dooku.name);
    $("#dookuHpOp").html(dooku.HP);
    $("#vaderFnOp").text(vader.name);
    $("#vaderHpOp").html(vader.HP);
    $("#emperorFnOp").text(emperor.name);
    $("#emperorHpOp").html(emperor.HP);
 console.log(on("click"));
 playerReady = true;
});
 
//Player Selection Luke Skywalker.....filter light characters out
$("#luke-select").on("click", function(){
    chosenCharacter = luke;
    $("#playerChewie, #playerYoda, #playerDooku, #playerVader, #playerEmperor").css("display", "none");
    $("#defenderDooku, #defenderVader, #defenderEmperor").css("display", "block");
    $("#chewie-select").attr("disabled", "true");
    $("#dookuFnOp").text(dooku.name);
    $("#dookuHpOp").html(dooku.HP);
    $("#vaderFnOp").text(vader.name);
    $("#vaderHpOp").html(vader.HP);
    $("#emperorFnOp").text(emperor.name);
    $("#emperorHpOp").html(emperor.HP);
    playerReady = true;
    });

//Player Selection Yoda.....filter light characters out
$("#yoda-select").on("click", function(){
    chosenCharacter = yoda;
    $("#playerChewie, #playerLuke, #playerDooku, #playerVader, #playerEmperor").css("display", "none");
    $("#defenderDooku, #defenderVader, #defenderEmperor").css("display", "block");
    $("#yoda-select").attr("disabled", "true");
    $("#dookuFnOp").text(dooku.name);
    $("#dookuHpOp").html(dooku.HP);
    $("#vaderFnOp").text(vader.name);
    $("#vaderHpOp").html(vader.HP);
    $("#emperorFnOp").text(emperor.name);
    $("#emperorHpOp").html(emperor.HP);
    playerReady = true;
    });

//Player Selection Count Dooku.....filter dark characters out
$("#dooku-select").on("click", function(){
    chosenCharacter = dooku;
    $("#playerChewie, #playerYoda, #playerLuke, #playerVader, #playerEmperor").css("display", "none");
    $("#defenderChewie, #defenderYoda, #defenderLuke").css("display", "block");
    $("#dooku-select").attr("disabled", "true");
    $("#chewieFnOp").text(chewie.name);
    $("#chewieHpOp").html(chewie.HP);
    $("#lukeFnOp").text(luke.name);
    $("#lukeHpOp").html(luke.HP);
    $("#yodaFnOp").text(yoda.name);
    $("#yodaHpOp").html(yoda.HP);
    playerReady = true;
    });

//Player Selection Darth Vader.....filter dark characters out
$("#vader-select").on("click", function(){
    chosenCharacter = vader;
    $("#playerChewie, #playerYoda, #playerDooku, #playerLuke, #playerEmperor").css("display", "none");
    $("#defenderChewie, #defenderYoda, #defenderLuke").css("display", "block");
    $("#vader-select").attr("disabled", "true");
    $("#chewieFnOp").text(chewie.name);
    $("#chewieHpOp").html(chewie.HP);
    $("#lukeFnOp").text(luke.name);
    $("#lukeHpOp").html(luke.HP);
    $("#yodaFnOp").text(yoda.name);
    $("#yodaHpOp").html(yoda.HP);
    playerReady = true;
    });

//Player Selection Emperor Palpatine.....filter dark characters out
$("#emperor-select").on("click", function(){
    chosenCharacter = emperor;
    
    $("#playerChewie, #playerYoda, #playerDooku, #playerVader, #playerLuke").css("display", "none");
    $("#defenderChewie, #defenderYoda, #defenderLuke").css("display", "block");
    $("#emperor-select").attr("disabled", "true");
    $("#chewieFnOp").text(chewie.name);
    $("#chewieHpOp").html(chewie.HP);
    $("#lukeFnOp").text(luke.name);
    $("#lukeHpOp").html(luke.HP);
    $("#yodaFnOp").text(yoda.name);
    $("#yodaHpOp").html(yoda.HP);
    playerReady = true;
    });


//if character-select then 
//choose first opponent....then next...
$("#chewie-opponent").on("click", function(){
    $("#defenderChewie").css("display", "none");
    $("#defenderArea").append($("<div id=defender>" + "</div>"));
    $("#defender").attr("class", "card text-center");
    $("#defender").append($("<div id=chewieFnDe>" + "</div>"));
    $("#chewieFnDe").attr("class", "card-header");
    $("#defender").append($("<img id=character>"));
    $("#character").attr("class", "card-img").attr("src", "assets/images/Chewie2.jpg");
    $("#defender").append($("<div id=chewieHpDe>" + "</div>"));
    $("#chewieHpDe").attr("class", "card-footer defense");
    $("#chewieFnDe").text(chewie.name);
    $("#chewieHpDe").html(chewie.HP);
    chosenOpponent = chewie;
    $(".opponent").attr("disabled", "true");
   opponentReady = true;
});

$("#luke-opponent").on("click", function(){
    $("#defenderLuke").css("display", "none");
    $("#defenderArea").append($("<div id=defender>" + "</div>"));
    $("#defender").attr("class", "card text-center");
    $("#defender").append($("<div id=lukeFnDe>" + "</div>"));
    $("#lukeFnDe").attr("class", "card-header");
    $("#defender").append($("<img id=character>"));
    $("#character").attr("class", "card-img").attr("src", "assets/images/Luke-Skywalker2.jpg");
    $("#defender").append($("<div id=lukeHpDe>" + "</div>"));
    $("#lukeHpDe").attr("class", "card-footer defense");
    $("#lukeFnDe").text(luke.name);
    $("#lukeHpDe").html(luke.HP);
    chosenOpponent = luke;
    $(".opponent").attr("disabled", "true");
    opponentReady = true;
});

$("#yoda-opponent").on("click", function(){
    $("#defenderYoda").css("display", "none");
    $("#defenderArea").append($("<div id=defender>" + "</div>"));
    $("#defender").attr("class", "card text-center");
    $("#defender").append($("<div id=yodaFnDe>" + "</div>"));
    $("#yodaFnDe").attr("class", "card-header");
    $("#defender").append($("<img id=character>"));
    $("#character").attr("class", "card-img").attr("src", "assets/images/Yoda2.jpg");
    $("#defender").append($("<div id=yodaHpDe>" + "</div>"));
    $("#yodaHpDe").attr("class", "card-footer defense");
    $("#yodaFnDe").text(yoda.name);
    $("#yodaHpDe").html(yoda.HP);
chosenOpponent = yoda;
$(".opponent").attr("disabled", "true");
    opponentReady = true;
});

$("#dooku-opponent").on("click", function(){
    $("#defenderDooku").css("display", "none");
    $("#defenderArea").append($("<div id=defender>" + "</div>"));
    $("#defender").attr("class", "card text-center");
    $("#defender").append($("<div id=dookuFnDe>" + "</div>"));
    $("#dookuFnDe").attr("class", "card-header");
    $("#defender").append($("<img id=character>"));
    $("#character").attr("class", "card-img").attr("src", "assets/images/Dooku2.jpg");
    $("#defender").append($("<div id=dookuHpDe>" + "</div>"));
    $("#dookuHpDe").attr("class", "card-footer defense");
    $("#dookuFnDe").text(dooku.name);
    $("#dookuHpDe").html(dooku.HP);
    chosenOpponent = dooku;
    $(".opponent").attr("disabled", "true");
    opponentReady = true;
});

$("#vader-opponent").on("click", function(){
    $("#defenderVader").css("display", "none");
    $("#defenderArea").append($("<div id=defender>" + "</div>"));
    $("#defender").attr("class", "card text-center");
    $("#defender").append($("<div id=vaderFnDe>" + "</div>"));
    $("#vaderFnDe").attr("class", "card-header");
    $("#defender").append($("<img id=character>"));
    $("#character").attr("class", "card-img").attr("src", "assets/images/Vader2.jpg");
    $("#defender").append($("<div id=vaderHpDe>" + "</div>"));
    $("#vaderHpDe").attr("class", "card-footer defense");
    $("#vaderFnDe").text(vader.name);
    $("#vaderHpDe").html(vader.HP);
    chosenOpponent = vader;
    $(".opponent").attr("disabled", "true");
    opponentReady = true;
});

$("#emperor-opponent").on("click", function(){
    $("#defenderEmperor").css("display", "none");
    $("#defenderArea").append($("<div id=defender>" + "</div>"));
    $("#defender").attr("class", "card text-center");
    $("#defender").append($("<div id=emperorFnDe>" + "</div>"));
    $("#emperorFnDe").attr("class", "card-header");
    $("#defender").append($("<img id=character>"));
    $("#character").attr("class", "card-img").attr("src", "assets/images/Palpatine2.jpg");
    $("#defender").append($("<div id=emperorHpDe>" + "</div>"));
    $("#emperorHpDe").attr("class", "card-footer defense");
    $("#emperorFnDe").html(emperor.name);
    $("#emperorHpDe").html(emperor.HP);
    chosenOpponent = emperor;
    $(".opponent").attr("disabled", "true");
    opponentReady = true;
    console.log(opponentReady);
    console.log($(".opponent").css("display"));
});
console.log($(".opponent").css("display"));
//fight
console.log(chosenCharacter);
console.log(chosenOpponent);
//maybe do a switch?
$("#attack").on("click", function() {
    if(opponentReady === true){
    chosenOpponent.HP -= chosenCharacter.atkPwr;

console.log(chosenOpponent);
console.log(chosenCharacter);
console.log(chosenOpponent.HP);
$("div.defense").html(chosenOpponent.HP);
console.log(chosenOpponent.HP);
chosenCharacter.HP -= chosenOpponent.counterPwr;
$("div.player").html(chosenCharacter.HP);
$(".message").text("You hit  " + chosenOpponent.name + " for " + chosenCharacter.atkPwr + " damage and " + chosenOpponent.name + " hit you for " + chosenOpponent.counterPwr + " damage! ");
chosenCharacter.atkPwr +=6;
console.log(chosenCharacter.atkPwr);
}
else {
    $("#attack").on("click", function(){
        $(".message").text("No Opponent here!");
})};
console.log(chosenOpponent);
if(chosenOpponent.HP <= 0) {
    $(".message").text("Choose next Opponent!");
    $("#defenderArea").empty(); //, 10000);  
    $(".opponent").removeAttr("disabled", "false");
    opponentReady = false;
    chosenOpponent = "";
    opponentsLeft -= 1;
    console.log(opponentsLeft);
}
//temporary way to end game for win until rest of code is cleaned up and a new way presents itself.
if(opponentsLeft <= 0){
   
    $(".message").text(
        "You Win! \n Press Reset Button to play again!");
    $("#attack").attr("disabled", "true");
    gameOver = true;
}
if(chosenCharacter.HP <= 0) {
    $(".message").text(
        "You Lose! \n Press Reset Button to play again!");
    $("#attack").attr("disabled", "true");
    $(".player").text("0");
    gameOver = true;
}
});
$("#reset").on("click", function(){
restart();
});
function restart(){
 $(".available").css("display", "block");
 playerReady = false;
 opponentReady = false;
 chosenOpponent = ""; 
 opponentsLeft = 3;
 gameOver = false;
 console.log(gameOver);
}
//ResetopponentReady = false;

});