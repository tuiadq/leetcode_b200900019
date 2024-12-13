/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    return recursiveMajority(nums, 0, null, 0);
};

function recursiveMajority(nums, index, candidate, count) {
    if (index === nums.length) {
        return candidate;
    }

    if (count === 0) {
        candidate = nums[index];
    }

    count += (nums[index] === candidate ? 1 : -1);
    return recursiveMajority(nums, index + 1, candidate, count);
}
