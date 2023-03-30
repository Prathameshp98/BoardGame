
export function dataUpdate(player,moves,playerMoney,bankMoney,asset,asset_type){

    var colors = ["yellow","green","red","blue"];
    var charge = 0
    var type = ''
    var hotel_data

    console.log(asset_type)

    document.getElementById("hotel-data-" + player).innerHTML = ''

    for(var i=0;i<4;i++){
        if(asset[i] === player){

            if(asset_type[i] === 1){ charge = 50; type = 'III' }
            if(asset_type[i] === 2){ charge = 150; type = 'II' }
            if(asset_type[i] === 3){ charge = 300; type = 'I' }
            hotel_data = `
                <img src="icons/hotel.png" height="30px" width="30px" style="background-color: ${colors[i]};" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tier-${type} (Rent: ${charge})"></td>
            `
        }
    }

    

    moves[player-1] -= 1;
    document.getElementById("moves-data-" + player).innerHTML = moves[player-1];
    document.getElementById("money-data-" + player).innerHTML = playerMoney[player-1];
    // document.getElementById("hotel-data-" + player).innerHTML = arr;
    // document.getElementById("hotel-data-" + player).appendChild(hotel_data)
    $('#hotel-data-' + player).append(hotel_data)
    document.getElementById("bank-data").innerHTML = bankMoney;

    return bankMoney;

}