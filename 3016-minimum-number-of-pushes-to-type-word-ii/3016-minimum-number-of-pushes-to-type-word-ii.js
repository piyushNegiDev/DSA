/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    let freq = new Array(26).fill(0);

    for (let char of word) {
        freq[char.charCodeAt(0) - 97]++;
    }

    freq.sort((a, b) => b - a);

    let ans = 0;

    for (let i = 0; i < 26; i++) {
        let cost = Math.floor(i / 8) + 1;
        ans += freq[i] * cost;
    }

    return ans;
};