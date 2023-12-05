/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var left =0
    var right=nums.length-1

    while(left < right){
        var mid=Math.floor((left+right)/2)
        if(nums[mid]>nums[right]) left=mid+1 
        else right=mid
    } // find minimum in a rotated array x

    var start=left
    left=0
    right=nums.length-1

    if(target>=nums[start] && target<=nums[right]) left=start
    else right=start

    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;

};



