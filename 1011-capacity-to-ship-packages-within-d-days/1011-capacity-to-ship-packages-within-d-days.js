/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var canBeShip = function(weights, capacity, days) {
    let sum = 0;
    let i = 0;

    while(i < weights.length && days > 0) {
        sum += weights[i];

        if(sum <= capacity) i++;
        else {
            days--;
            sum = 0;
        }
    }
    days--;

    return days >= 0;
}
 
var shipWithinDays = function(weights, days) {
    let low = 1;
    let high = 0;
    // let ans = Infinity;

    for(let i = 0; i < weights.length; i++) {
        high += weights[i];
    }

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if(canBeShip(weights, mid, days)) {
            // ans = Math.min(ans, mid);
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }  

    return low;
};