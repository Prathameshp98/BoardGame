import { dataUpdate } from "./dataUpdate.js";


export function Lottery(player,moves,playerMoney,bankMoney,asset) {

    playerMoney[player-1] += 200;
    bankMoney -= 200;
    alert("Congrats, You have won a lottery of 200 Rupees.");
    dataUpdate(player,moves,playerMoney,bankMoney,asset);

    return bankMoney;
}
