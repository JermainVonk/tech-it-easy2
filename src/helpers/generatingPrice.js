import {bestSellingTv} from "../constants/inventory.js";


function generatingPrice (){
    return `€${bestSellingTv.price},-`;

}

export default generatingPrice;