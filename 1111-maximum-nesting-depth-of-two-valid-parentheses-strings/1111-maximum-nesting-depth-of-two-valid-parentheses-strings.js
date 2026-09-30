/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
    let depth = 0;
    let ans = [];

    for(let i = 0; i < seq.length; i++) {
        if(seq[i] === '(') {
            depth++;
            depth % 2 ? ans.push(0) : ans.push(1);
        } else {
            depth % 2 ? ans.push(0) : ans.push(1);
            depth--;
        }
    }

    return ans;
};