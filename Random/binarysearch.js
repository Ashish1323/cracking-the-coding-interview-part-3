function binarySearch(nums,key){
    let left=0;
    let right=nums.length-1;

    while(left<=right){
        let mid=Math.floor((left+right)/2);
        if(nums[mid]==key) return mid;
        else if(nums[mid]>key) right=mid;
        else left=mid+1;
    }
    return "Elemet not found ;(";
}

console.log(binarySearch([1,3,7,11,21], 90))

