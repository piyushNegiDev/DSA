/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let map = new Map();
  let left = 0;
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);

    while (map.get(s[i]) > 1) {
      map.set(s[left], map.get(s[left]) - 1);
      left++;
    }

    maxLen = Math.max(maxLen, i - left + 1);
  }

  return maxLen;
};