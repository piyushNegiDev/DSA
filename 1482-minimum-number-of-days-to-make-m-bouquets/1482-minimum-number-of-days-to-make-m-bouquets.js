/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var isPossible = function(bloomDay, day, m, k) {
    let n = bloomDay.length;
    let count = 0;
    let bouquetsMade = 0;

    for(let i = 0; i < n; i++) {
        if(bloomDay[i] <= day) {
            count++;
        } else if(i <= n) {
            bouquetsMade += Math.floor(count / k);
            count = 0;
        }
    }
    bouquetsMade += Math.floor(count / k);

    return bouquetsMade >= m;
}

var minDays = function(bloomDay, m, k) {
    let n = bloomDay.length;
    if(n < m * k) return -1;

    let low = bloomDay[0];
    let high = bloomDay[0];

    for(let i = 0; i < n; i++) {
        low = Math.min(bloomDay[i], low);
        high = Math.max(bloomDay[i], high);
    }

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);

        if(isPossible(bloomDay, mid, m, k)) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }

    return low;
};