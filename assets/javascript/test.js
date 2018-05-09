$(document).ready(function() {
    var lukeSkywalker = {name:"Luke Skywalker", side:"light", HP:130, atkPwr:10, counterPwr:6,};
    var yoda = {name:"Yoda", side:"light", HP:180, atkPwr:10, counterPwr:6,};
    var palpatine = {name:"Emperor Palpatine", side:"dark", HP:180, atkPwr:10, counterPwr:6,};
    var vader = {name:"Darth Vader", side:"dark", HP:170, atkPwr:10, counterPwr:6,};
    var dooku = {name:"Count Dooku", side:"dark", HP:150, atkPwr:10, counterPwr:6,};
    var chewie = {name:"Chewbacca", side:"light", HP:120, atkPwr:10, counterPwr:6,};
    
    //chewie-select
    //chewie-opponent
    //luke-select
    //luke-opponent
    //yoda-select
    //yoda-opponent
    //dooku-select
    //dooku-opponent
    //vader-select
    //vader-opponent
    //emperor-select
    //emperor-opponent
    
    
    //Player Selection Chewbacca.....filter light characters out
    $("#chewie-select").on("click", function(){
    $("#playerLuke, #playerYoda, #playerDooku, #playerVader, #playerEmperor").css("display", "none");
     $("#defenderDooku, #defenderVader, #defenderEmperor").css("display", "block")
    });
     
    //Player Selection Luke Skywalker.....filter light characters out
    $("#luke-select").on("click", function(){
        $("#playerChewie, #playerYoda, #playerDooku, #playerVader, #playerEmperor").css("display", "none");
         $("#defenderDooku, #defenderVader, #defenderEmperor").css("display", "block")
        });
    
    //Player Selection Yoda.....filter light characters out
    $("#yoda-select").on("click", function(){
        $("#playerChewie, #playerLuke, #playerDooku, #playerVader, #playerEmperor").css("display", "none");
         $("#defenderDooku, #defenderVader, #defenderEmperor").css("display", "block")
        });
    
    //Player Selection Count Dooku.....filter dark characters out
    $("#dooku-select").on("click", function(){
        $("#playerChewie, #playerYoda, #playerLuke, #playerVader, #playerEmperor").css("display", "none");
         $("#defenderChewie, #defenderYoda, #defenderLuke").css("display", "block")
        });
    
    //Player Selection Darth Vader.....filter dark characters out
    $("#vader-select").on("click", function(){
        $("#playerChewie, #playerYoda, #playerDooku, #playerLuke, #playerEmperor").css("display", "none");
         $("#defenderChewie, #defenderYoda, #defenderLuke").css("display", "block")
        });
    
    //Player Selection Emperor Palpatine.....filter dark characters out
    $("#emperor-select").on("click", function(){
        $("#playerChewie, #playerYoda, #playerDooku, #playerVader, #playerLuke").css("display", "none");
         $("#defenderChewie, #defenderYoda, #defenderLuke").css("display", "block")
        });
    
    //choose first opponent
    $("#")
    
    
    
    //reveal defender
    
    
    
    //fight
    
    
    });