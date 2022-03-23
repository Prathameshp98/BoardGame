import { propertyCharge } from "./propertyCharge.js";
import { propertyUpgrade } from "./propertyUpgrade.js";
import { propertyPurchase } from "./propertyPurchase.js";


export function Hotel(player,index,playerMoney,playerAsset,bankMoney,asset,asset_type) {

    if(asset[index] != 0 && asset[index] != player){
        propertyCharge(player,index);
        
    } else if(asset[index] != 0 && asset[index] === player){
        propertyUpgrade(player,index);

    } else {
        propertyPurchase(player,index,playerMoney,playerAsset,bankMoney,asset,asset_type);
    }

}