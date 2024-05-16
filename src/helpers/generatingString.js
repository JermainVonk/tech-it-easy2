// import {bestSellingTv} from "../constants/inventory.js";



function generatingString (tv){
    return (
        `${tv.type} ${tv.name} - ${tv.brand}`
    );
}
export default generatingString;