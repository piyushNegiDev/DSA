/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(a) {
    let min = a[0];
    let profit = 0;
    for(let i = 1; i < a.length; i++) {
        profit = Math.max(profit, a[i] - min);
        min = Math.min(min,a[i])
    }
    return profit;
};