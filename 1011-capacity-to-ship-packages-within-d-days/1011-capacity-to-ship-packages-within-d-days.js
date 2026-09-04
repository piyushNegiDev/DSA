/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var canBeShip = function(weights, capacity, allowedDays) {
    let days = 1;
    let currentWeight  = 0;

    for(let i = 0; i < weights.length; i++) {
        if(currentWeight  + weights[i] > capacity) {
            days++;
            currentWeight  = 0;
        }
        currentWeight  += weights[i]
    }
    

    return days <= allowedDays;
}
 
var shipWithinDays = function(weights, days) {
    let low = 0;
    let high = 0;

    for(let i = 0; i < weights.length; i++) {
        low = Math.max(low, weights[i]);
        high += weights[i];
    }

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if(canBeShip(weights, mid, days)) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }  

    return low;
};