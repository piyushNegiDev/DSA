/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let i = 0;
    let j = 0;
    let count = 0;
    g = g.sort((a,b)=>a-b)
    s = s.sort((a,b)=>a-b)
    while(i < g.length && j < s.length) {
        if(s[j] >= g[i]) {
            count++;
            j++;
            i++;
        } else {
            j++;
        }
    }
    return count;
};