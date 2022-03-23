

export function countMoves(countOfPlayers,moves) {

    var sum = 0;
    for(var i=0;i<countOfPlayers;i++){
        sum += moves[i];
    }

    return sum;
}