/**
 * @param {number[][]} arr
 * @return {number[][]}
 */
var merge = function(arr) {
    arr.sort((a, b) => a[0] - b[0]);

    let n = arr.length;
    let ans = [];

    for(let i = 0; i < n; i++) {
        let last = ans.length - 1;
        
        if(ans.length === 0 || arr[i][0] > ans[last][1]) {    
            ans.push(arr[i]);
        } else {
            ans[last][1] = Math.max(ans[last][1], arr[i][1]);
        }
    }

    return ans;
};