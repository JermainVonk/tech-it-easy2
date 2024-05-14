import {bestSellingTv} from "../constants/inventory.js";


function generatingString (){
    return (
        `${bestSellingTv.type} ${bestSellingTv.name} - ${bestSellingTv.brand}`
    );
}
export default generatingString;