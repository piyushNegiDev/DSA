/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    let ans = 0;
    let n = word.length;
    let map = new Map();
    word = word.split('');
    let freq = [];
    for(let i = 0; i < n; i++) {
        map.set(word[i], (map.get(word[i]) || 0) + 1);
    }

    for(const [key, value] of map) {
        freq.push(value);
    }

    freq.sort((a, b) => b - a);

    for(let i = 0; i < freq.length; i++) {
        let cost = Math.floor(i / 8) + 1
        ans += freq[i] * cost;
    }

    return ans;
};