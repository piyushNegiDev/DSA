/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let temp;
    for(let i = 0; i < Math.floor(s.length/2);i++){
        temp = s[i];
        s[i] = s[s.length - i - 1];
        s[s.length - i - 1] = temp;
    }
    return s;
};