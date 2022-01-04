/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    let count = 0;
    for(let i of s) if(i === '0') count += 1;
    
    let tmp = count;
    for(let i of s) {
        if(i === '0') tmp -= 1;
        else tmp += 1;
        count = Math.min(count, tmp);
    }
    return count;
};