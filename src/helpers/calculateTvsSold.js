import {inventory} from "../constants/inventory";

function calculateTvsSold (inventory){
    let totalSold = 0;

    for (let i = 0; i < inventory.length; i++) {
        totalSold += inventory[i].sold;
    }
    return totalSold;
}

console.log(calculateTvsSold(inventory))

export default calculateTvsSold;