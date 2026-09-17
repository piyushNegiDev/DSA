/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var minSumOfLengths = function(arr, target) {
    let n = arr.length; 
    let minLenEnding = Array(n).fill(Infinity);

    let i = 0;
    let sum = 0;
    let ans = Infinity;

    for(let j = 0; j < n; j++) {
        sum += arr[j];
        
        while(sum > target) {
            sum -= arr[i];
            i++;
        }

        if(sum === target) {
            let currentLen = j - i + 1;

            if(i > 0 && minLenEnding[i - 1] !== Infinity) {
                ans = Math.min(ans, minLenEnding[i - 1] + currentLen);
            }
            
            minLenEnding[j] = currentLen;
        }

        if(j > 0) {
            minLenEnding[j] = Math.min(minLenEnding[j], minLenEnding[j - 1]);
        }
    }

    return ans === Infinity ? -1 : ans;
};