/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
    const ans = [];

    const helper = (index, strExpr, expr, last) => {
        if (index === num.length) {
            if (expr === target) ans.push(strExpr);
            return;
        }

        for (let j = index; j < num.length; j++) {
            if (num[index] === '0' && j > index) break;

            const value = Number(num.slice(index, j + 1));

            if (index === 0) {
                helper(j + 1, `${value}`, value, value);
                continue;
            }

            helper(j + 1, `${strExpr}+${value}`, expr + value, value);
            helper(j + 1, `${strExpr}-${value}`, expr - value, -value);
            helper(j + 1, `${strExpr}*${value}`, expr - last + last * value, last * value);
        }
    };

    helper(0, '', 0, 0);
    return ans;
};