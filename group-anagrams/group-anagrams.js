/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let output = [];
    for(let s of strs) {
        let sorted = s.split('').sort().join('');
        output[sorted] = output[sorted] ? [...output[sorted], s] : [s];
    }
    return Object.values(output);
};