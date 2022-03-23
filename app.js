var countOfPlayers = window.prompt("Enter the number of players: ");

//importing modules
import { Jail } from "./Dependencies/jail.js";
import { Lottery } from "./Dependencies/lottery.js";
import { Hotel } from "./Dependencies/hotel.js";


//variable data
var moves = [10,10,10,10];
var bankMoney = 5000;
var playerMoney = [1000,1000,1000,1000];
var playerAsset = [0,0,0,0];
var turn = 1;

//constant data
var fine = 150;
var prize = 200;
var silverValue = 200;
var goldValue = 300;
var platinum = 500;
var silverRent = 50;
var goldRent = 150;
var platinumRent = 300;

//player positions
var player1pos = 1;
var player2pos = 1;
var player3pos = 1;
var player4pos = 1;

//special positons
var jail = [5,12,20,31];
var lottery = [7,15,24,34];
var hotel = [8,13,18,28];

//assets owned
var asset = [0,0,0,0]; //player number who owns the asset, if zero that means asset is not owned.
var asset_type = [0,0,0,0]; //type of asset owned by certain player, if zero that means asset is not owned.


document.getElementById("bank-data").innerHTML = bankMoney;

if(countOfPlayers < 2){
    alert("Minimum number of players should be 2")
} else if (countOfPlayers > 4){
    alert("Maximum number of players should be 4")
} else {

    for(var i=1; i<=countOfPlayers; i++){
        document.getElementById("moves-data-" + i).innerHTML = moves[0];
        document.getElementById("money-data-" + i).innerHTML = playerMoney[0];
        document.getElementById("asset-data-"+ i).innerHTML = playerAsset[0];
    }
}

// roll dice button clicked
$(".btn").click(function() {

    if(turn === (parseInt(countOfPlayers) + 1)){
        turn = 1;
    }

    var sum = countMoves(countOfPlayers);
    console.log(sum);
    if(sum == 0){
        var winner = playerMoney.indexOf(findMax()) + 1
        alert("PLAYER " + winner + " IS THE WINNER!!");
        alert("Refresh the page for a new game")
    }

    var number = window.prompt("Player "+ turn +", Enter any number from 1 to 12: ");
    if(number < 1 || number > 12){
        alert("Enter number from 1 to 12");
    } else {
        switch(turn){
            case 1:

                $("#" + player1pos).removeClass("player1"); 

                if((parseInt(player1pos) + parseInt(number)) <= 34){
                    player1pos = parseInt(player1pos) + parseInt(number);
                } else {
                    player1pos = parseInt(player1pos) + parseInt(number) - 34;
                }
                
                $("#" + player1pos).addClass("player1");
                turn += 1;

                if(jail.includes(player1pos)){
                    Jail(1,moves,playerMoney,playerAsset,bankMoney);
                } else if(lottery.includes(player1pos)){
                    Lottery(1,moves,playerMoney,playerAsset,bankMoney);
                } else if(hotel.includes(player1pos)){
                    Hotel(1,hotel.indexOf(player1pos),playerMoney,playerAsset,bankMoney,asset,asset_type);
                } else {
                    dataUpdate(1,moves,playerMoney,playerAsset);
                }

                break;
            case 2:
                $("#" + player2pos).removeClass("player2"); 
                
                if((parseInt(player2pos) + parseInt(number)) <= 34){
                    player2pos = parseInt(player2pos) + parseInt(number);
                } else {
                    player2pos = parseInt(player2pos) + parseInt(number) - 34;
                }

                $("#" + player2pos).addClass("player2");
                turn += 1;

                if(jail.includes(player2pos)){
                    Jail(2,moves,playerMoney,playerAsset,bankMoney);
                } else if(lottery.includes(player2pos)){
                    Lottery(2,moves,playerMoney,playerAsset,bankMoney);
                } else if(hotel.includes(player2pos)){
                    Hotel(2,hotel.indexOf(player2pos),playerMoney,playerAsset,bankMoney,asset,asset_type);
                } else {
                    dataUpdate(2,moves,playerMoney,playerAsset);
                }

                break;
            case 3:
                $("#" + player3pos).removeClass("player3"); 
                
                if((parseInt(player3pos) + parseInt(number)) <= 34){
                    player3pos = parseInt(player3pos) + parseInt(number);
                } else {
                    player3pos = parseInt(player3pos) + parseInt(number) - 34;
                }

                $("#" + player3pos).addClass("player3");
                turn += 1;

                if(jail.includes(player3pos)){
                    Jail(3,moves,playerMoney,playerAsset,bankMoney);
                } else if(lottery.includes(player3pos)){
                    Lottery(3,moves,playerMoney,playerAsset,bankMoney);
                } else if(hotel.includes(player3pos)){
                    Hotel(3,hotel.indexOf(player3pos),playerMoney,playerAsset,bankMoney,asset,asset_type);
                } else {
                    dataUpdate(3,moves,playerMoney,playerAsset);
                }

                break;
            case 4:
                $("#" + player4pos).removeClass("player4"); 
                player4pos = parseInt(player4pos) + parseInt(number);
                $("#" + player4pos).addClass("player4");
                turn += 1;

                if(jail.includes(player4pos)){
                    Jail(4,moves,playerMoney,playerAsset,bankMoney);
                } else if(lottery.includes(player4pos)){
                    Lottery(4,moves,playerMoney,playerAsset,bankMoney);
                } else if(hotel.includes(player4pos)){
                    Hotel(4,hotel.indexOf(player4pos),playerMoney,playerAsset,bankMoney,asset,asset_type);
                } else {
                    dataUpdate(4,moves,playerMoney,playerAsset);
                }

                break;
            default:
                alert("error occured");
            
        }
    }

});



function countMoves(countOfPlayers) {

    var sum = 0;
    for(var i=0;i<countOfPlayers;i++){
        sum += moves[i];
    }

    return sum;
}

function findMax() {

    var max = 0;
    for(var i=0;i<4;i++){
        if(playerMoney[i] > max){
            max = playerMoney[i];
        }
    }

    return max;
}