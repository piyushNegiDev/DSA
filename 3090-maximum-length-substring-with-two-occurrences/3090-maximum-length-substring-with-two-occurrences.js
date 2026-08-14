/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
    let map = new Map();
    let left = 0;
    let max = 0;

    for(let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);

        while(map.get(s[i]) > 2) {
            map.set(s[left], map.get(s[left]) - 1);
            left++;
        }

        max = Math.max(max, i - left + 1);
    }

    return max;
};