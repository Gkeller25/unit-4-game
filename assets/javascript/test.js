$(document).ready(function() {

   var chewie = {name:"Chewbacca", side:"light", HP:130, atkPwr:10, counterPwr:8, image:"assets/images/Chewie2.jpg",};
   var luke = {name:"Luke Skywalker", side:"light", HP:160, atkPwr:10, counterPwr:12, image:"assets/images/Luke-Skywalker2.jpg" };
   var yoda = {name:"Yoda", side:"light", HP:180, atkPwr:10, counterPwr:16, image:"assets/images/Yoda2.jpg"};
   var dooku = {name:"Count Dooku", side:"dark", HP:130, atkPwr:10, counterPwr:8, image:"assets/images/Dooku2.jpg",};
   var vader = {name:"Darth Vader", side:"dark", HP:160, atkPwr:10, counterPwr:12, image:"assets/images/Vader2.jpg",};
   var emperor = {name:"Emperor Palpatine", side:"dark", HP:180, atkPwr:10, counterPwr:16, image:"assets/images/Palpatine2.jpg",};

    var chosenCharacter = "";
    var playerReady = false;
    var opponentReady = false;
    var chosenOpponent = ""; 
    var opponentsLeft = 3;
    var gameOver = false;
    
    //set player stats

    function statsSet() {  
        chewie = {name:"Chewbacca", side:"light", HP:130, atkPwr:10, counterPwr:8, image:"assets/images/Chewie2.jpg",};
        luke = {name:"Luke Skywalker", side:"light", HP:160, atkPwr:10, counterPwr:12, image:"assets/images/Luke-Skywalker2.jpg" };
        yoda = {name:"Yoda", side:"light", HP:180, atkPwr:10, counterPwr:16, image:"assets/images/Yoda2.jpg"};
        dooku = {name:"Count Dooku", side:"dark", HP:130, atkPwr:10, counterPwr:8, image:"assets/images/Dooku2.jpg",};
        vader = {name:"Darth Vader", side:"dark", HP:160, atkPwr:10, counterPwr:12, image:"assets/images/Vader2.jpg",};
        emperor = {name:"Emperor Palpatine", side:"dark", HP:180, atkPwr:10, counterPwr:16, image:"assets/images/Palpatine2.jpg",};
        chosenCharacter = "";
        playerReady = false;
        opponentReady = false;
        chosenOpponent = ""; 
        opponentsLeft = 3;
        gameOver = false;
        var clean = $(".character").parentsUntil("#activePlayer");
        $(clean).removeClass("available");
        $(clean).addClass("available");
        var unprep = $(".opponent").parentsUntil("#opponents");
        $(unprep).removeClass("chosen");
        $(".defender").css("display", "");
        $(".message").text("");
        
        console.log("work");
        console.log(chosenCharacter);
        console.log(chosenOpponent);
        console.log(chewie);
        console.log(luke);
        console.log(yoda);
        console.log(dooku);
        console.log(vader);
        console.log(emperor);
    }

//Player is Selected and chosenCharacter is declared

    $(".character").on("click", function(){
        var pressedCharacter = $(this).attr("id")
        $(".character").attr("disabled", "true");
        var narrow = $(this).parentsUntil("#activePlayer");
        $(narrow).removeClass("available");
        $(".available").css("display", "none");
        playerReady = true;
console.log(playerReady);
$("#reset").removeAttr("disabled", "false");

    switch(pressedCharacter){
case "chewie-select":
chosenCharacter = chewie;

break;
  
case "luke-select":
chosenCharacter = luke;

break;
  
case "yoda-select":
chosenCharacter = yoda;

break;
  
case "dooku-select":
chosenCharacter = dooku;

break;
  
case "vader-select":
chosenCharacter = vader;

break;
  
case "emperor-select":
chosenCharacter = emperor;

    }
    if(chosenCharacter.side === "light") {
        $(".enemiesDark").css("display", "");
        console.log("dark");
    }
    else{
        $(".enemiesLight").css("display", "");
        console.log("light")
    }
});
    
    //choose first opponent....then next...
    $(".opponent").on("click", function(){
    var pressedOpponent =  $(this).attr("id");
    $(".opponent").attr("disabled", "true");
    
    var prep = $(this).parentsUntil("#opponents");
    $(prep).addClass("chosen");
    $(".chosen").css("display", "none");
    
    
    opponentReady = true;
    console.log(pressedOpponent);

    switch(pressedOpponent){
        case "chewie-opponent":
        chosenOpponent = chewie;
        
        break;
          
        case "luke-opponent":
        chosenOpponent = luke;
        
        break;
          
        case "yoda-opponent":
        chosenOpponent = yoda;

        break;
          
        case "dooku-opponent":
        chosenOpponent = dooku;

        break;
          
        case "vader-opponent":
        chosenOpponent = vader;

        break;
          
        case "emperor-opponent":
        chosenOpponent = emperor;
              
        }
    //$("#" + pressedOpponent).css("display", "none")
    $("#defenderArea").append($("<div class=card id=defender>" + "</div>"));
    $("#defender").append($("<div class=card-header id=fullName>" + "</div>"));
    $("#fullName").append($("<p id=name>" + "</p>"));
    $("#defender").append($("<img class=card-img id=defenderPic>"));
    $("#defender").append($("<div id=defenderHP>" + "</div>"));
    $("#defender").attr("class", "text-center")
    $("#name").attr("class", "m-0 p-0 text-center").text(chosenOpponent.name);
    $("#defenderPic").attr("src", chosenOpponent.image);
    $("#defenderHP").attr("class", "card-footer text-muted").text(chosenOpponent.HP);
    opponentReady = true;
    $("#attack").removeAttr("disabled", "false");
});


    
    //maybe do a switch?
    $("#attack").on("click", function() {
      
        if(opponentReady === true){
            chosenOpponent.HP -= chosenCharacter.atkPwr;
        console.log(chosenOpponent.HP);
    console.log(chosenOpponent);
    console.log(chosenCharacter);
    console.log(chosenOpponent.HP);
    $("#defenderHP").html(chosenOpponent.HP);
    chosenCharacter.HP -= chosenOpponent.counterPwr;
    $("div.player").html(chosenCharacter.HP);
    $(".message").text("You hit  " + chosenOpponent.name + " for " + chosenCharacter.atkPwr + " damage and " + chosenOpponent.name + " hit you for " + chosenOpponent.counterPwr + " damage! ");
    chosenCharacter.atkPwr +=10;
    console.log(chosenCharacter.atkPwr);
    }
    else {
        $("#attack").attr("disabled", "true");
            $(".message").text("Choose Opponent!");
        };
    console.log(chosenOpponent);
    if(chosenOpponent.HP <= 0) {
        $(".message").text("Choose next Opponent!");
        $("#defenderArea").empty(); //, 10000);
        $("#attack").attr("disabled", "true");  
        $(".opponent").removeAttr("disabled", "false");
        opponentReady = false;
        chosenOpponent = "";
        opponentsLeft -= 1;
        console.log(opponentsLeft);
    }
    //temporary way to end game for win until rest of code is cleaned up and a new way presents itself.
    if(opponentsLeft === 0){
       
        $(".message").text(
            "You Win! \n Press Reset Button to play again!");
        $("#attack").attr("disabled", "true");
        gameOver = true;
    }
    if(chosenCharacter.HP < 0) {
        $(".message").text(
            "You Lose! \n Press Reset Button to play again!");
        $("#attack").attr("disabled", "true");
        $(".player").text("0");
        gameOver = true;
    }
    
    if(gameOver === true){
    $("#reset").on("click", function(){
      restart();
    });}
    function restart(){
     $(".available").css("display", "");
     $("#reset").attr("disabled", "true");
     console.log(gameOver);
     console.log(chosenCharacter);
     console.log(chosenOpponent);
     $(".character").removeAttr("disabled", "false");
     $(".enemiesLight").css("display", "none");
     $(".enemiesDark").css("display", "none");
     $("#defenderArea").empty();
     statsSet();
    }
});  
});