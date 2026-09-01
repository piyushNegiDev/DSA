/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let maxInArr = piles[0];
    let n = piles.length;

    for(let i = 1; i < n; i++) {
        maxInArr = Math.max(piles[i], maxInArr);
    }

    let low = 1;
    let high = maxInArr;

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        let hours = 0;

        for(let i = 0; i < n; i++) {
            hours += Math.ceil(piles[i] / mid);
        }

        if(hours <= h) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return low;
};