"use strict";

var column = $(".column");
var curPlayer;
var steps = 0;

function whoFirst() {
    var flip =  Math.round(Math.random());
    if (flip === 0) {
        alert("Yellow goes first!");
        curPlayer = "yellow";
    } else {
        alert("Red goes first!");
        curPlayer = "red";
    }
}


column.on("click", function(e) {
    var spots = $(e.currentTarget).find(".spot");
    var victoryPoints = 0;
    var victoryPointsRow = 0;
    var curRow;
    // var columner = $(e.currentTarget);
    $(e.currentTarget).css("z-index", "6");
    for (var i = 5; i >= 0; i--) {
        if (!spots.eq(i).hasClass("red") && !spots.eq(i).hasClass("yellow")) {
            spots.eq(i).addClass(curPlayer);
            curRow = $(".column").children(".row" + i);
            console.log(curRow);
            steps++;
            checkVictory();
            break; 
        }
    }

    function checkVictory() {
        for (var j = 5; j >= 0; j--) {
            if (spots.eq(j).hasClass(curPlayer)) {
                victoryPoints++;
            } else {
                victoryPoints = 0;
            }
            if (victoryPoints >= 4) {
                setTimeout(function() {
                    alert(curPlayer.toUpperCase() + " win!");
                    curPlayer = null;
                    $(".column").children().removeClass("yellow red");
                }, 1100);
                if (curPlayer === "yellow") {
                    curPlayer = "red";
                } else if (curPlayer === "red") {
                    curPlayer = "yellow";
                } 
            }
        }
        for (var s = 0; s <= 6; s++) {
            if (curRow.eq(s).hasClass(curPlayer)) {
                victoryPointsRow++;
            } else {
                victoryPointsRow = 0;
            }
            if (victoryPointsRow >=4) {
                setTimeout(function() {
                    alert(curPlayer.toUpperCase() + " win!");
                    curPlayer = null;
                    $(".column").children().removeClass("yellow red");
                }, 1100);
                if (curPlayer === "yellow") {
                    curPlayer = "red";
                } else if (curPlayer === "red") {
                    curPlayer = "yellow";
                } 
            }
        }
        for (var z = 1; z <= 42; z++) {
            if ($("#" + z).hasClass(curPlayer) && $("#" + (z+7)).hasClass(curPlayer) && $("#" + (z+14)).hasClass(curPlayer) && $("#" + (z+21)).hasClass(curPlayer)) {
                setTimeout(function() {
                    alert(curPlayer.toUpperCase() + " win!");
                    curPlayer = null;
                    $(".column").children().removeClass("yellow red");
                }, 1100);
                if (curPlayer === "yellow") {
                    curPlayer = "red";
                } else if (curPlayer === "red") {
                    curPlayer = "yellow";
                } 
            } else if ($("#" + z).hasClass(curPlayer) && $("#" + (z+5)).hasClass(curPlayer) && $("#" + (z+10)).hasClass(curPlayer) && $("#" + (z+15)).hasClass(curPlayer)) {
                setTimeout(function() {
                    alert(curPlayer.toUpperCase() + " win!");
                    curPlayer = null;
                    $(".column").children().removeClass("yellow red");
                }, 1100);
                if (curPlayer === "yellow") {
                    curPlayer = "red";
                } else if (curPlayer === "red") {
                    curPlayer = "yellow";
                } 
            }
        }
    }


    
    if (curPlayer === "yellow") {
        curPlayer = "red";
    } else if (curPlayer === "red") {
        curPlayer = "yellow";
    } else {
        $(e.currentTarget).css("z-index", "14");
        return;
    }
    setTimeout(function(){
        $(e.currentTarget).css("z-index", "14");
    }, 1100);
});

