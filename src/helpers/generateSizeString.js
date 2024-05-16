// import {bestSellingTv} from "../constants/inventory.js";
//
// let tvSizenew = bestSellingTv.availableSizes.map(
//     (availableSize) =>
//     {
//         return ( availableSize+ ' inch ' + '('+
//         Math.round(availableSize * 2.54) + 'cm)');
//     }
// )
// export let generateSizeString = tvSizenew.join(' | ');

export function generateSizeString(tv) {
    const screenSizes = tv.availableSizes.map(size => `${size} inch (${Math.round(size * 2.54)} cm)`);

    if (screenSizes.length === 1) {
        return screenSizes[0];
    } else {
        return screenSizes.join(' | ');
    }
}

