import { dataUpdate } from "./dataUpdate.js";

const prize = 200;

export function Lottery(player,moves,playerMoney,playerAsset,bankMoney) {

    playerMoney[player-1] += prize;
    bankMoney -= prize;
    alert("Congrats, You have won a lottery of 200 Rupees.");
    dataUpdate(player,moves,playerMoney,playerAsset);

}
