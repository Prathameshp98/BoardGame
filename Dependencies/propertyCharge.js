
import { dataUpdate } from "./dataUpdate.js";

export function propertyCharge (player,index,moves,playerMoney,bankMoney,asset,asset_type) {
    console.log(asset);
    console.log(asset_type);

    if(asset_type[index] === 1){

        if(playerMoney[player-1] - 50 < 0){
            alert("Insufficient funds");
            moves[player-1] -= 1;
            document.getElementById("moves-data-" + player).innerHTML = moves[player-1];
        } else {
            playerMoney[player-1] -= 50;
            playerMoney[asset[index] - 1] += 50;
            document.getElementById("money-data-" + asset[index]).innerHTML = playerMoney[asset[index] - 1];
            dataUpdate(player,moves,playerMoney,bankMoney,asset,asset_type);
            alert("You are in someone else property, you are charged with 50 rupees");
        }

    } else if(asset_type[index] === 2){

        if(playerMoney[player-1] - 150 < 0){
            alert("Insufficient funds");
            moves[player-1] -= 1;
            document.getElementById("moves-data-" + player).innerHTML = moves[player-1];
        } else {
            playerMoney[player-1] -= 150;
            playerMoney[asset[index] - 1] += 150;
            document.getElementById("money-data-" + asset[index]).innerHTML = playerMoney[asset[index] - 1];
            dataUpdate(player,moves,playerMoney,bankMoney,asset,asset_type);
            alert("You are in someone else property, you are charged with 150 rupees");
        }

    } else if(asset_type[index] === 3){

        if(playerMoney[player-1] - 300 < 0){
            alert("Insufficient funds");
            moves[player-1] -= 1;
            document.getElementById("moves-data-" + player).innerHTML = moves[player-1];
        } else {
            playerMoney[player-1] -= 300;
            playerMoney[asset[index] - 1] += 300;
            document.getElementById("money-data-" + asset[index]).innerHTML = playerMoney[asset[index] - 1];
            dataUpdate(player,moves,playerMoney,bankMoney,asset,asset_type);
            alert("You are in someone else property, you are charged with 300 rupees");
        }

    }

    return bankMoney;

}
