/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var helper = function(k, n, start, comb, ans, sum) {
    if(sum === n && comb.length === k) {
        ans.push([...comb]);
    }

    for(let i = start; i <= 9; i++) {
        if(sum + i > n) {
            break;
        } 
        comb.push(i);
        helper(k, n, i + 1, comb, ans, sum + i);
        comb.pop();
    }
}

var combinationSum3 = function(k, n) {
    let ans = [];
    helper(k, n, 1, [], ans, 0);
    return ans;
};