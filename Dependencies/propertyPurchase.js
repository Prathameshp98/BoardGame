import { dataUpdate } from "./dataUpdate.js";


export function propertyPurchase(player,index,playerMoney,playerAsset,bankMoney,asset,asset_type) {

    var choice = window.prompt("Welcome to the hotel, do you wish to purchase? (Press Y for yes and N for no)");
    if(choice === "Y" || choice === "y"){
        var type = window.prompt("Great, which type would you like? (Press 1 => Silver, 2 => Gold, 3 => Platinum");
        if(type == 1){

            if(playerMoney[player-1] >= 200){
                playerMoney[player-1] -= 200;
                bankMoney += 200
                alert("Congrats, you have purchased the hotel with Silver Type");
                playerAsset[player-1] += 200;
                asset[index] = player;
                asset_type[index] = 1;
                dataUpdate(player,moves,playerMoney,playerAsset);

            } else {
                alert("Insufficient funds, may be another time")
            }
            

        } else if(type == 2){
            if(playerMoney[player-1] >= 300){
                playerMoney[player-1] -= 300;
                bankMoney += 300
                alert("Congrats, you have purchased the hotel with Gold Type");
                playerAsset[player-1] += 300;
                asset[index] = player;
                asset_type[index] = 2;
                dataUpdate(player,moves,playerMoney,playerAsset);

            } else {
                alert("Insufficient funds, may be another time")
            }


        } else if(type == 3){
            if(playerMoney[player-1] >= 500){
                playerMoney[player-1] -= 500;
                bankMoney += 500
                alert("Congrats, you have purchased the hotel with Platinum Type");
                playerAsset[player-1] += 500;
                asset[index] = player;
                asset_type[index] = 3;
                dataUpdate(player,moves,playerMoney,playerAsset);

            } else {
                alert("Insufficient funds, may be another time")
            }

        } else {
            alert("Invalid Input");
            Hotel(player,index);
        }

    } else if(choice === "N" || choice === "n") {
        alert("Please visit again");

    } else {
        alert("Invalid Input");
        Hotel(player,index);
    }

}