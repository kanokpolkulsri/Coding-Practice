/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let romans = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };
    let count = 0;
    let palm = '';
    let skip = -1;
    for(let i=0; i<s.length; i++) {
        if(i == skip) {
            continue;
        } else if(romans[s[i]] < romans[s[i+1]]) {
            count += (romans[s[i+1]] - romans[s[i]]);
            skip = i+1;
        } else {
            count += romans[s[i]];
        }
        palm += s[i];
        console.log(palm, count);
    }
    return count;
};