import { dataUpdate } from "./dataUpdate.js";


export function propertyPurchase(player,index,moves,playerMoney,playerAsset,bankMoney,asset,asset_type) {

    var choice = window.prompt("Welcome to the hotel, do you wish to purchase? (Press Y for yes and N for no)");
    if(choice === "Y" || choice === "y"){
        var type = window.prompt("Great, which type would you like? (Press 1 => Silver(200), 2 => Gold(300), 3 => Platinum(500)");
        if(type == 1){

            if(playerMoney[player-1] >= 200){
                playerMoney[player-1] -= 200;
                bankMoney += 200
                alert("Congrats, you have purchased the hotel with Silver Type");
                playerAsset[player-1] += 200;
                asset[index] = player;
                asset_type[index] = 1;
                dataUpdate(player,moves,playerMoney,playerAsset,bankMoney,asset);

            } else {
                alert("Insufficient funds, may be another time");
                moves[player-1] -= 1;
                document.getElementById("moves-data-" + player).innerHTML = moves[player-1];
            }
            

        } else if(type == 2){
            if(playerMoney[player-1] >= 300){
                playerMoney[player-1] -= 300;
                bankMoney += 300
                alert("Congrats, you have purchased the hotel with Gold Type");
                playerAsset[player-1] += 300;
                asset[index] = player;
                asset_type[index] = 2;
                dataUpdate(player,moves,playerMoney,playerAsset,bankMoney,asset);

            } else {
                alert("Insufficient funds, may be another time");
                moves[player-1] -= 1;
                document.getElementById("moves-data-" + player).innerHTML = moves[player-1];
            }


        } else if(type == 3){
            if(playerMoney[player-1] >= 500){
                playerMoney[player-1] -= 500;
                bankMoney += 500
                alert("Congrats, you have purchased the hotel with Platinum Type");
                playerAsset[player-1] += 500;
                asset[index] = player;
                asset_type[index] = 3;
                dataUpdate(player,moves,playerMoney,playerAsset,bankMoney,asset);

            } else {
                alert("Insufficient funds, may be another time");
                moves[player-1] -= 1;
                document.getElementById("moves-data-" + player).innerHTML = moves[player-1];
            }

        } else {
            alert("Invalid Input");
            propertyPurchase(player,index,moves,playerMoney,playerAsset,bankMoney,asset,asset_type);
        }

    } else if(choice === "N" || choice === "n") {
        alert("Please visit again");
        moves[player-1] -= 1;
        document.getElementById("moves-data-" + player).innerHTML = moves[player-1];

    } else {
        alert("Invalid Input");
        propertyPurchase(player,index,moves,playerMoney,playerAsset,bankMoney,asset,asset_type);
    }

    return bankMoney;

}