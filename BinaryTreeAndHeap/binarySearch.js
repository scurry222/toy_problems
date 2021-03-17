/*
binarySearch.js
---
PROMPT
---
Given a sorted (in ascending order) integer array nums of n elements and a target value,
write a function to search target in nums.
If target exists, then return its index, otherwise return -1.
---
EXAMPLES
---
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
---
CONSTRAINTS
---
 1) You may assume that all elements in nums are unique.
 2) n will be in the range [1, 10000].
 3) The value of each element in nums will be in the range [-9999, 9999].
  }
*/

var binarySearch = function(nums, target) {
    var first = 0;
    var last = nums.length - 1;
    var mid;

    while (first < last) {
        mid = Math.floor(first + (last - first) / 2);
        if (nums[mid] < target) {
            first = mid + 1;
        } else if (nums[mid] > target) {
            last = mid - 1;
        } else if (nums[mid] === target) {
            return mid;
        }
    }
    return -1;
};

binarySearch([-1,0,3,5,9,12], 2);
