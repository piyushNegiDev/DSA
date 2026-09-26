/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function(s, knowledge) {
    let map = new Map();

    for(let i = 0; i < knowledge.length; i++) {
        map.set(knowledge[i][0], knowledge[i][1]);
    }

    let key = '';
    let ans = '';
    let buildingKey = false;

    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') {
            buildingKey = true;
        } else if (buildingKey && s[i] !== ')') {
            key += s[i];
        } else if (s[i] === ')') {
            if(map.has(key)) {
                ans += map.get(key); 
            } else {
                ans += '?';
            }
            buildingKey = false;
            key = '';
        } else {
            ans += s[i];
        }
    }

    return ans;
};