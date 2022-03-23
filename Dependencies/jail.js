import { dataUpdate } from "./dataUpdate.js";


export function Jail(player,moves,playerMoney,playerAsset,bankMoney,asset) {

    if(playerMoney[player-1] - 150 < 0){
        alert("Insufficient funds");
        moves[player-1] -= 1;
        document.getElementById("moves-data-" + player).innerHTML = moves[player-1];
    } else {
        playerMoney[player-1] -= 150;
        bankMoney += 150;
        alert("Opps, You are fined with 150 Rupees.");
        dataUpdate(player,moves,playerMoney,playerAsset,bankMoney,asset);
    }
    
    return bankMoney;

}