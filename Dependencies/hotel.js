import { propertyCharge } from "./propertyCharge.js";
import { propertyUpgrade } from "./propertyUpgrade.js";
import { propertyPurchase } from "./propertyPurchase.js";


export function Hotel(player,index,moves,playerMoney,playerAsset,bankMoney,asset,asset_type) {

    if(asset[index] != 0 && asset[index] != player){
        propertyCharge(player,index,moves,playerMoney,playerAsset,bankMoney,asset,asset_type);
        
    } else if(asset[index] != 0 && asset[index] === player){
        propertyUpgrade(player,index,moves,playerMoney,playerAsset,bankMoney,asset,asset_type);

    } else {
        propertyPurchase(player,index,moves,playerMoney,playerAsset,bankMoney,asset,asset_type);
    }

    return bankMoney;
}