import {bestSellingTv} from "../constants/inventory.js";

let tvSizenew = bestSellingTv.availableSizes.map(
    (availableSize) =>
    {
        return ( availableSize+ ' inch ' + '('+
        Math.round(availableSize * 2.54) + 'cm)');
    }
)
export let generateSizeString = tvSizenew.join(' | ');