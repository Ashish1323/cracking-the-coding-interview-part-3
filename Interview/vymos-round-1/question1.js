//10, 8, 5, 6, 7
// 2, 4

function firstIncreasingPoint(nums){
    let left=0;
    let right=nums.length-1;

    while(left<right){
        let mid= Math.floor((left+right)/2)
        if(nums[mid]>nums[right]) left=mid+1
        else right=mid;
    }
    return left
}

console.log(firstIncreasingPoint([10, 8, 5, 6, 7]))
console.log(firstIncreasingPoint([2, 4]))
console.log(firstIncreasingPoint([10, 8, 7, 6]))

