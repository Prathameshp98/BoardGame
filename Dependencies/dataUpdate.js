
export function dataUpdate(player,moves,playerMoney,playerAsset,bankMoney,asset){

    var colors = ["yellow","green","red","yellow"];
    var arr = [];
    for(var i=0;i<4;i++){
        if(asset[i] === player){
            arr.push(colors[i]);
        }
    }

    moves[player-1] -= 1;
    document.getElementById("moves-data-" + player).innerHTML = moves[player-1];
    document.getElementById("money-data-" + player).innerHTML = playerMoney[player-1];
    document.getElementById("asset-data-" + player).innerHTML = playerAsset[player-1];
    document.getElementById("hotel-data-" + player).innerHTML = arr;
    document.getElementById("bank-data").innerHTML = bankMoney;

    return bankMoney;

}