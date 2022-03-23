
import { dataUpdate } from "./dataUpdate.js";

export function propertyCharge (player,index) {

    if(asset_type[index] === 1){
        playerMoney[player-1] -= 50;
        playerMoney[asset[index] - 1] += 50;
        document.getElementById("money-data-" + asset[index]).innerHTML = playerMoney[asset[index] - 1];
        dataUpdate(player);
        alert("You are in someone else property, you are charged with 50 rupees");
    } else if(asset_type[index] === 2){
        playerMoney[player-1] -= 150;
        playerMoney[asset[index] - 1] += 150;
        document.getElementById("money-data-" + asset[index]).innerHTML = playerMoney[asset[index] - 1];
        dataUpdate(player);
        alert("You are in someone else property, you are charged with 150 rupees");
    } else if(asset_type[index] === 3){
        playerMoney[player-1] -= 300;
        playerMoney[asset[index] - 1] += 300;
        document.getElementById("money-data-" + asset[index]).innerHTML = playerMoney[asset[index] - 1];
        dataUpdate(player);
        alert("You are in someone else property, you are charged with 300 rupees");
    }

}
