function smallestPositive(nums){
    var set=new Set(nums);
    var startVal=Math.min(...nums);
    for(let i=startVal; i<nums.length; i++){
        if(!set.has(i)) return i
    }
}

function smallestPositive(nums){
    var arrayHash=[]
    for(let i=0;i<nums.length;i++){
        arrayHash[i]=0
    }
    for(let i=0;i<nums.length;i++){
        arrayHash[nums[i]] =-1
    }
    
    for(let i=1;i<arrayHash.length;i++){
        if(arrayHash[i]!=-1) return i;
    }
}

console.log(smallestPositive([-1, -5, -7, 1, -10, -4]))
console.log(smallestPositive([-1, -5, -7, 0, -10, -4]))