/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let depthCount = 0;
    let maxDepth = 0;

    for(let char of s) {
        if(char === '(') {
            depthCount++;
        } else if (char === ')') {
            depthCount--;
        } 

        maxDepth = Math.max(maxDepth, depthCount);
    }

    return maxDepth;
};