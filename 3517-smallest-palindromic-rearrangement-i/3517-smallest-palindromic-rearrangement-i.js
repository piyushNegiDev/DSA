/**
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function(s) {
    let n = s.length;
    let mid = Math.floor(n / 2);
    let chars = s.split('');

    let freq = new Array(26).fill(0);

    for (let i = 0; i < mid; i++) {
        freq[chars[i].charCodeAt(0) - 97]++;
    }

    let index = 0;
    for (let i = 0; i < 26; i++) {
        while (freq[i] > 0) {
            chars[index] = String.fromCharCode(i + 97);
            index++;
            freq[i]--;
        }
    }

    for (let i = 0; i < mid; i++) {
        chars[n - 1 - i] = chars[i];
    }

    return chars.join('');
};