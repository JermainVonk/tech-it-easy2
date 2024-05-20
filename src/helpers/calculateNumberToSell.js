import {inventory} from "../constants/inventory";
import calculateTvsPurchased from "./calculateTvsPurchased.js";
import calculateTvsSold from "./calculateTvsSold.js";

export function calculateNumberToSell(){
    return(
        calculateTvsPurchased(inventory) - calculateTvsSold(inventory)
    );
}

console.log(calculateNumberToSell(inventory))