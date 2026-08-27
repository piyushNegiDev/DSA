/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let ans = duration;

    for(let i = 1; i < timeSeries.length; i++) {
        if(timeSeries[i] - timeSeries[i - 1] >= duration) {
            ans += duration;
        } else {
            ans += timeSeries[i] - timeSeries[i - 1];
        }
    }

    return ans;
};