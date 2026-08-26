/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var shortestBeautifulSubstring = function(s, k) {
    let ans = '';
    let len = Infinity;
    let left = 0;
    let map = new Map();
    let sMap = new Map();

    for(let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
        ans += s[i];
        while((map.get(s[i]) > k && s[i] === '1') || ans.startsWith('0')) {
            ans = ans.slice(1);
            map.set(s[left], (map.get(s[left])) - 1);
            left++;
        }
        if(map.get('1') === k) {
            sMap.set(ans, ans.length);
            len = ans.length;
        }
    }

    if(sMap.size === 0) return '';

    for(let [key, value] of sMap) {
        if(value <= len && Number(key) < Number(ans)) {
            ans = key;
            len = value;
        }
    }

    return ans;
}; 