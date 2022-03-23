import { dataUpdate } from "./dataUpdate.js";



export function propertyUpgrade(player,index) {

    if(asset_type[index] != 3){

        var choice = window.prompt("Welcome Back, Do you wish to upgrade your property? (Press Y for yes and N for no)");
        if(choice === "Y" || choice === "y"){

            if(asset_type[index] === 1){
                var type = window.prompt("Great, you own Silver, what will you go for? (2 => Gold, 3 => Platinum");

                if(type == 2){
                    if(playerMoney[player-1] >= 100){
                        playerMoney[player-1] -= 100;
                        bankMoney += 100
                        alert("Congrats, you have upgraded the hotel to Gold Type with 100 rupees");
                        playerAsset[player-1] += 100;
                        asset_type[index] = 2;
                        dataUpdate(player);
    
                    } else {
                        alert("Insufficient funds, may be another time")
                    }
    
    
                } else if(type == 3){
                    if(playerMoney[player-1] >= 300){
                        playerMoney[player-1] -= 300;
                        bankMoney += 500
                        alert("Congrats, you have upgraded the hotel to Platinum Type with 300 rupees");
                        playerAsset[player-1] += 300;
                        asset_type[index] = 3;
                        dataUpdate(player);
    
                    } else {
                        alert("Insufficient funds, may be another time")
                    }
    
                } else {
                    alert("Invalid Input");
                    Hotel(player,index);
                }

            } else if(asset_type[index] === 2){
                var type = window.prompt("Great, you own Gold, what to go for Platinum (Press Y for yes and N for no)");

                if(type === "Y" || type === "y"){
                    if(playerMoney[player-1] >= 200){
                        playerMoney[player-1] -= 200;
                        bankMoney += 200
                        alert("Congrats, you have upgraded the hotel to Platinum Type with 200 rupees");
                        playerAsset[player-1] += 200;
                        asset_type[index] = 3;
                        dataUpdate(player);
    
                    } else {
                        alert("Insufficient funds, may be another time")
                    }
    
                } else if(type === "N" || type === "n") {
                    alert("Please visit again")
                } else {
                    alert("Invalid Input");
                    Hotel(player,index);
                }

            }  

        } else if(choice === "N" || choice === "n") {
            alert("Please visit again");

        } else {
            alert("Invalid Input");
            Hotel(player,index);
        }
    } else {
        alert("Welcome Back, seems that your hotel is upgraded to its Maximum.")
    }


}
