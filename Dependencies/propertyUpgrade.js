import { dataUpdate } from "./dataUpdate.js";
import { Hotel } from "./hotel.js";



export function propertyUpgrade(player,index,moves,playerMoney,bankMoney,asset,asset_type) {

    if(asset_type[index] != 3){

        var choice = window.prompt("Welcome Back, Do you wish to upgrade your property? (Press Y for yes and N for no)");
        if(choice === "Y" || choice === "y"){

            if(asset_type[index] === 1){
                var type = window.prompt("Great, you own Silver, what will you go for? (2 => Gold(100), 3 => Platinum(300)");

                if(type == 2){
                    if(playerMoney[player-1] >= 100){
                        playerMoney[player-1] -= 100;
                        bankMoney += 100
                        alert("Congrats, you have upgraded the hotel to Gold Type with 100 rupees");
                        asset_type[index] = 2;
                        dataUpdate(player,moves,playerMoney,bankMoney,asset,asset_type);
    
                    } else {
                        alert("Insufficient funds, may be another time");
                        moves[player-1] -= 1;
                        document.getElementById("moves-data-" + player).innerHTML = moves[player-1];
                    }
    
    
                } else if(type == 3){
                    if(playerMoney[player-1] >= 300){
                        playerMoney[player-1] -= 300;
                        bankMoney += 500
                        alert("Congrats, you have upgraded the hotel to Platinum Type with 300 rupees");
                        asset_type[index] = 3;
                        dataUpdate(player,moves,playerMoney,bankMoney,asset,asset_type);
    
                    } else {
                        alert("Insufficient funds, may be another time");
                        moves[player-1] -= 1;
                        document.getElementById("moves-data-" + player).innerHTML = moves[player-1];
                    }
    
                } else {
                    alert("Invalid Input");
                    propertyUpgrade(player,index,moves,playerMoney,bankMoney,asset,asset_type);
                }

            } else if(asset_type[index] === 2){
                var type = window.prompt("Great, you own Gold, what to go for Platinum(200) (Press Y for yes and N for no)");

                if(type === "Y" || type === "y"){
                    if(playerMoney[player-1] >= 200){
                        playerMoney[player-1] -= 200;
                        bankMoney += 200
                        alert("Congrats, you have upgraded the hotel to Platinum Type with 200 rupees");
                        asset_type[index] = 3;
                        dataUpdate(player,moves,playerMoney,bankMoney,asset,asset_type);
    
                    } else {
                        alert("Insufficient funds, may be another time");
                        moves[player-1] -= 1;
                        document.getElementById("moves-data-" + player).innerHTML = moves[player-1];
                    }
    
                } else if(type === "N" || type === "n") {
                    alert("Please visit again");
                    moves[player-1] -= 1;
                    document.getElementById("moves-data-" + player).innerHTML = moves[player-1];
                } else {
                    alert("Invalid Input");
                    propertyUpgrade(player,index,moves,playerMoney,bankMoney,asset,asset_type);
                }

            }  

        } else if(choice === "N" || choice === "n") {
            alert("Please visit again");
            moves[player-1] -= 1;
            document.getElementById("moves-data-" + player).innerHTML = moves[player-1];

        } else {
            alert("Invalid Input");
            propertyUpgrade(player,index,moves,playerMoney,bankMoney,asset,asset_type);
        }
    } else {
        alert("Welcome Back, seems that your hotel is upgraded to its Maximum.");
        moves[player-1] -= 1;
        document.getElementById("moves-data-" + player).innerHTML = moves[player-1];
    }

    return bankMoney;

}
