/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let tmp = [];
    let count = 0, max = 0;
    for(let i=0; i<s.length; i++) {
        count = 1;
        tmp.push(s[i]);
        for(let j=i; j<s.length; j++) {
            if(i == j) continue;
            if(!tmp.includes(s[j])) {
                tmp.push(s[j]);
                count += 1;
            } else {
                tmp = [];
                break;
            }
        }
        max = Math.max(max, count);
    }
    return max;
};