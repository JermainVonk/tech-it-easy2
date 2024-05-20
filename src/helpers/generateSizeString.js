export function generateSizeString(tv) {
    const screenSizes = tv.availableSizes.map(size => `${size} inch (${Math.round(size * 2.54)} cm)`);

    if (screenSizes.length === 1) {
        return screenSizes[0];
    } else {
        return screenSizes.join(' | ');
    }
}

