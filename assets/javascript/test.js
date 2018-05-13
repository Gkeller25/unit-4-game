$(document).ready(function() {

   var chewie = {name:"Chewbacca", side:"light", HP:130, atkPwr:10, counterPwr:8, reHP:$(".chewieHP").text("130"), image:"assets/images/Chewie2.jpg", sound: new Audio("assets/sounds/chewy_roar.mp3"), time:1000};
   var luke = {name:"Luke Skywalker", side:"light", HP:160, atkPwr:10, counterPwr:12, reHP:$(".lukeHP").text("160"), image:"assets/images/Luke-Skywalker2.jpg", sound: new Audio("assets/sounds/wontfail.mp3"), time:1000};
   var yoda = {name:"Yoda", side:"light", HP:180, atkPwr:10, counterPwr:16, reHP:$(".yodaHP").text("180"), image:"assets/images/Yoda2.jpg", sound: new Audio("assets/sounds/yoda-help.mp3"), time:3000};
   var dooku = {name:"Count Dooku", side:"dark", HP:130, atkPwr:10, counterPwr:8, reHP:$(".dookuHP").text("130"), image:"assets/images/Dooku2.jpg", sound: new Audio("assets/sounds/Count Dooku Powerful.mp3"), time:3000};
   var vader = {name:"Darth vader", side:"dark", HP:160, atkPwr:10, counterPwr:12, reHP:$(".vaderHP").text("160"), image:"assets/images/Vader2.jpg", sound: new Audio("assets/sounds/vader2.mp3"), time:3000};
   var sidious = {name:"Darth Sidious", side:"dark", HP:180, atkPwr:10, counterPwr:16, reHP:$(".sidiousHP").text("180"), image:"assets/images/Palpatine2.jpg", sound: new Audio("assets/sounds/wipeout.mp3"), time:3000};

    var chosenCharacter = "";
    var playerReady = false;
    var opponentReady = false;
    var chosenOpponent = ""; 
    var opponentsLeft = 3;
    var gameOver = false;
    var opening = new Audio("assets/sounds/Throne.mp3");
    var bgm = new Audio("assets/sounds/Duelfates.mp3");
    var fight = new Audio("assets/sounds/light-saber-on.mp3");
    var lost = new Audio("assets/sounds/WilhelmScream.mp3");
    var won = new Audio("assets/sounds/augie.mp3");
    var attack = new Audio("assets/sounds/blaster-firing.mp3");
    //set player stats
    
    
     
    function statsSet() {  
        chewie = {name:"Chewbacca", side:"light", HP:130, atkPwr:10, counterPwr:8, reHP:$(".chewieHP").text("130"), image:"assets/images/Chewie2.jpg", sound: new Audio("assets/sounds/chewy_roar.mp3"), time:1200};
        luke = {name:"Luke Skywalker", side:"light", HP:160, atkPwr:10, counterPwr:12, reHP:$(".lukeHP").text("160"), image:"assets/images/Luke-Skywalker2.jpg", sound: new Audio("assets/sounds/wontfail.mp3"), time:1000};
        yoda = {name:"Yoda", side:"light", HP:180, atkPwr:10, counterPwr:16, reHP:$(".yodaHP").text("180"), image:"assets/images/Yoda2.jpg", sound: new Audio("assets/sounds/yoda-help.mp3"), time:3000};
        dooku = {name:"Count Dooku", side:"dark", HP:130, atkPwr:10, counterPwr:8, reHP:$(".dookuHP").text("130"), image:"assets/images/Dooku2.jpg", sound: new Audio("assets/sounds/Count Dooku Powerful.mp3"), time:3000};
        vader = {name:"Darth vader", side:"dark", HP:160, atkPwr:10, counterPwr:12, reHP:$(".vaderHP").text("160"), image:"assets/images/Vader2.jpg", sound: new Audio("assets/sounds/vader2.mp3"), time:3000};
        sidious = {name:"Darth Sidious", side:"dark", HP:180, atkPwr:10, counterPwr:16, reHP:$(".sidiousHP").text("180"), image:"assets/images/Palpatine2.jpg", sound: new Audio("assets/sounds/wipeout.mp3"), time:3000};
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
        
        console.log($(".opponent").filter(":hidden"));
        console.log(chosenCharacter);
        console.log(chosenOpponent);
        console.log(chewie);
        console.log(luke);
        console.log(yoda);
        console.log(dooku);
        console.log(vader);
        console.log(sidious);
    }

//Player is Selected and chosenCharacter is declared

    $(".character").on("click", function(){
        won.pause();
        var pressedCharacter = $(this).attr("id")

        $(".character").attr("disabled", "true");

        var narrow = $(this).parentsUntil("#activePlayer");
        $(narrow).removeClass("available");
        $(".available").css("display", "none");
        
        console.log(playerReady);
        //$("#reset").removeAttr("disabled", "false");

//sets clicked image card to the character object variables
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
  
case "sidious-select":
chosenCharacter = sidious;

    }
    if(chosenCharacter.side === "light") {
        $(".enemiesDark").css("display", "");
        console.log("dark");
    }
    else{
        $(".enemiesLight").css("display", "");
        console.log("light")
    }
    chosenCharacter.sound.play();
   setTimeout(function(){playerReady = true}, chosenCharacter.time);
   
});
    
    //choose first opponent....then next...
    $(".opponent").on("click", function(){
        if(playerReady === true){
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
          
        case "sidious-opponent":
        chosenOpponent = sidious;
              
        }
    
    $("#defenderArea").append($("<div id=defender>" + "</div>"));
    $("#defender").append($("<div class=card-header id=fullName>" + "</div>"));
    $("#fullName").append($("<p id=name>" + "</p>")).addClass("p-0");
    $("#defender").append($("<img class=card-img id=defenderPic>"));
    $("#defender").append($("<div id=defenderHP>" + "</div>"));
    $("#defender").attr("class", "card bg-success text-center")
    $("#name").attr("class", "m-0 p-0 text-center").text(chosenOpponent.name);
    $("#defenderPic").attr("src", chosenOpponent.image);
    $("fullName").attr("class", "p-0");
    $("#defenderHP").attr("class", "card-footer p-0").text(chosenOpponent.HP);
    $("#attack").removeAttr("disabled", "false");
    fight.play();
    opponentReady = true;
    bgm.play();
}});


    
    
    $("#attack").on("click", function() {
      
        if(opponentReady === true){
            attack.play();
            chosenOpponent.HP -= chosenCharacter.atkPwr;
     
    $("#defenderHP").html(chosenOpponent.HP);
    chosenCharacter.HP -= chosenOpponent.counterPwr;
    $("div.player").html(chosenCharacter.HP);
    $(".message").text("You hit  " + chosenOpponent.name + " for " + chosenCharacter.atkPwr + " damage and " + chosenOpponent.name + " hit you for " + chosenOpponent.counterPwr + " damage! ");
    chosenCharacter.atkPwr +=10;
   
    }
    else {
        $("#attack").attr("disabled", "true");
            $(".message").text("Choose Enemy!");
        };
    console.log(chosenOpponent);
    if(chosenOpponent.HP <= 0) {
        $(".message").text("Choose next Enemy!");
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
        won.play();
        bgm.pause();
        gameOver = true;
    }
    if(chosenCharacter.HP < 0) {
        $(".message").text(
            "You Lose! \n Press Reset Button to play again!");
            bgm.pause();
            lost.play();
        $("#attack").attr("disabled", "true");
        $(".player").text("0");
        gameOver = true;
    }   
     
}); 
$("#reset").on("click", function(){
    restart();
    bgm.pause();
  }); 
  function restart(){
      won.pause();
    $(".available").css("display", "");
    console.log(gameOver);
    console.log(chosenCharacter);
    console.log(chosenOpponent);
    $(".opponent").removeAttr("disabled", "false");
    $(".character").removeAttr("disabled", "false");
    $(".enemiesLight").css("display", "none");
    $(".enemiesDark").css("display", "none");
    $("#defenderArea").empty();
    statsSet();
   }
});