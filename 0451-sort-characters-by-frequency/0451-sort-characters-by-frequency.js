/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    s = s.split('');
    let map = new Map();
    let ans = '';

    for(let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }

    let sortedMap = [...map.entries()].sort((a, b) => b[1] - a[1]);

    for(let [key, value] of sortedMap) {
        while(value > 0) {
            ans += key;
            value--;
        }
    }

    return ans;
};