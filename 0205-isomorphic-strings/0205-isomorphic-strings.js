/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false;

    let sMap = new Map();
    let tMap = new Map();

    for(let i = 0; i < s.length; i++) {
        sMap.set(s[i], t[i]);
        tMap.set(t[i], s[i]);
    }

    for(let i = 0; i < t.length; i++) {
        if(t[i] !== sMap.get(s[i])) return false;
        if(s[i] !== tMap.get(t[i])) return false;
    }

    return true;
};