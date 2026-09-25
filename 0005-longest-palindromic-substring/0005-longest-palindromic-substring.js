/**
 * @param {string} s
 * @return {string}
 */
var expand = function(s, left, right) {
    let len = 0;

    while(left >= 0 && right < s.length) {
        if(s[left] !== s[right]) {
            return {len, left, right};
        }

        len = right - left + 1;
        
        left--;
        right++;
    }

    return {len, left, right};
}

var longestPalindrome = function(s) {
    let maxLen = 0;
    let lonPal = '';

    for(let i = 0; i < s.length; i++) {
        let odd = expand(s, i, i);
        let even = expand(s, i, i + 1);

        if(odd.len > maxLen) {
            maxLen = odd.len;
            lonPal = s.slice(odd.left + 1, odd.right);
        }

        if(even.len > maxLen) {
            maxLen = even.len;
            lonPal = s.slice(even.left + 1, even.right);
        }
    }

    return lonPal;
};