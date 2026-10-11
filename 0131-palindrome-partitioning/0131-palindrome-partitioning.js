/**
 * @param {string} s
 * @return {string[][]}
 */
var isPalin = function(subS) {
    let left = 0;
    let right = subS.length - 1;

    while(left <= right) {
        if(subS[left] !== subS[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

var helper = function(s, part, ans) {
    if(s.length === 0) {
        ans.push([...part]);
        return;
    }

    for(let i = 0; i < s.length; i++) {
        if(isPalin(s.slice(0, i + 1))) {
            part.push(s.slice(0, i + 1));
            helper(s.slice(i+1), part, ans);
            part.pop();
        }
    }
}

var partition = function(s) {
    let ans = [];
    helper(s, [], ans)
    return ans;
};