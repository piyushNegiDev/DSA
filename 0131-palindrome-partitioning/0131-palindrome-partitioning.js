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

var helper = function(s, part, ans, start) {
    if(s.length <= start) {
        console.log(start);
        ans.push([...part]);
        return;
    }

    for(let i = start; i < s.length; i++) {
        if(isPalin(s.slice(start, i + 1))) {
            part.push(s.slice(start, i + 1));
            helper(s, part, ans, i + 1);
            part.pop();
        }
    }
}

var partition = function(s) {
    let ans = [];
    helper(s, [], ans, 0)
    return ans;
};