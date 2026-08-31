/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0) return x;
    
    let low = 1;
    let high = x;

    let ans = 1;

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);

        if(mid * mid > x) {
            high = mid - 1;
        }
        else {
            ans = mid;
            low = mid + 1;
        }
    }

    return ans;
};