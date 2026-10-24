/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    if(s.length < 4) return [];
    if(s.length > 12) return [];
    if(Number(s) > 255255255255) return [];

    let ans = [];

    var check = function(n) {
        if(n.length > 1 && n[0] === '0') return false;

        n = Number(n);

        if(n > 255) return false;

        return true
    }

    var helper = function(string, ip, segments) {
        if(string === '' && segments > 3) {
            ans.push(ip);
            return;
        }

        if(segments > 3) {
            return;
        }

        for(let i = 0; i < string.length; i++) {
            let n = string.slice(0, i + 1);
            if(n.length <= 3) {
                if(check(n)) {
                    if(i === string.length - 1) {
                        helper(string.slice(i + 1), ip + n, segments + 1);
                    } else {
                        helper(string.slice(i + 1), ip + n + '.', segments + 1);
                    }
                }
            } else {
                break;
            }
        }
    }

    helper(s, '', 0);

    return ans; 
};