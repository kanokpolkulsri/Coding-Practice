/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    let sum = 0, min = 0;
    for(let i=0; i<arr.length; i++) {
        min = arr[i];
        sum += min;
        for(let j=i+1; j<arr.length; j++) {
            if(j >= arr.length) continue;
            min = Math.min(min, arr[j]);
            sum += min;
        }
    }
    return sum % (Math.pow(10, 9) + 7);
};