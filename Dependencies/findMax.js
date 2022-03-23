


export function findMax(playerMoney,countOfPlayers) {

    var max = 0;
    for(var i=0;i<countOfPlayers;i++){
        if(playerMoney[i] > max){
            max = playerMoney[i];
        }
    }

    return max;
}