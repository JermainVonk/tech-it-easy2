function calculateTvsPurchased (inventory){

    let totalPurchased = 0;

    for (let i = 0; i < inventory.length; i++) {
        totalPurchased += inventory[i].originalStock;
    }
    return totalPurchased;
}

export default calculateTvsPurchased;