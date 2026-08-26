/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var shortestBeautifulSubstring = function(s, k) {
    let left = 0;
    let count = 0;
    let ans = '';

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') count++;

        while (count === k) {
            let candidate = s.slice(left, i + 1);

            if (ans === '' || candidate.length < ans.length ||
                (candidate.length === ans.length && candidate < ans)) {
                ans = candidate;
            }

            if (s[left] === '1') count--;
            left++;
        }
    }

    return ans;
};