/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(p, s) {
    let map1 = new Map();
    let map2 = new Map();
    s = s.split(' ');
    p = p.split('');

    if(s.length !== p.length) return false;

    for(let i = 0; i < p.length; i++){
        if(!map1.has(p[i])) {
            map1.set(p[i], s[i]);
        } else if(map1.has(p[i]) && map1.get(p[i]) !== s[i]) {
            return false;
        }

        if(!map2.has(s[i])) {
            map2.set(s[i], p[i]);
        } else if(map2.has(s[i]) && map2.get(s[i]) !== p[i]) {
            return false;
        }
    }  
    return true;
};