import { dataUpdate } from "./dataUpdate.js";

const fine = 150;

export function Jail(player,moves,playerMoney,playerAsset,bankMoney) {

    playerMoney[player-1] -= fine;
    bankMoney += fine;
    alert("Opps, You are fined with 150 Rupees.");
    dataUpdate(player,moves,playerMoney,playerAsset);

}