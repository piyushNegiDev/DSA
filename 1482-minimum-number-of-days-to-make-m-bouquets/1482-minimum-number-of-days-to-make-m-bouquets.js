/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    let n = bloomDay.length;
    if(n < m * k) return -1;

    let minDay = bloomDay[0];
    let maxDay = bloomDay[0];

    for(let i = 0; i < n; i++) {
        minDay = Math.min(bloomDay[i], minDay);
        maxDay = Math.max(bloomDay[i], maxDay);
    }

    let low = minDay;
    let high = maxDay;
    let ans = maxDay;

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);

        let count = 0;
        let b = m;

        for(let i = 0; i <= n; i++) {
            if(bloomDay[i] <= mid) {
                count++;
            } else if(i <= n) {
                b = b - Math.floor(count / k);
                count = 0;
            }
        }

        if(b <= 0) {
            ans = Math.min(mid, ans);
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }

    return ans;
};