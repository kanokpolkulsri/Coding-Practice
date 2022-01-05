/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let findLarge = (idx) => {
        for(let j=nums.length-1; j>idx; j--) {
            if(nums[j] > nums[idx]) return j;
        }
    }
    let swap = (i, j) => {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    let reverse = (idx) => {
        let start = idx, end = nums.length-1;
        while(start < end) {
            swap(start, end);
            start += 1;
            end -= 1;
        }
    }
    // find first decending index backwards
    for(let i=nums.length-1; i>=0; i--) {
        if(nums[i] < nums[i+1]) {
            let large = findLarge(i);
            swap(i, large);
            reverse(i+1);
            return;
        }
    }
    reverse(0);
    
    
    // swap the next larger amount
    // reverse next index til the end
};