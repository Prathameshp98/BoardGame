
export function dataUpdate(player,moves,playerMoney,playerAsset){

    moves[player-1] -= 1;
    document.getElementById("moves-data-" + player).innerHTML = moves[player-1];
    document.getElementById("money-data-" + player).innerHTML = playerMoney[player-1];
    document.getElementById("asset-data-" + player).innerHTML = playerAsset[player-1];
    document.getElementById("bank-data").innerHTML = bankMoney;

}