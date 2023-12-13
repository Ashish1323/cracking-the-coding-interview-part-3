/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    var res=[0,0]
    var nums1Set=new Map()
    for(let i of nums1){
        if(!nums1Set.has(i)) nums1Set.set(i,0)
        var count=nums1Set.get(i)
        nums1Set.set(i,++count)
    }

    var nums2Set=new Map()
    for(let i of nums2){
        if(!nums1Set.has(i)) nums2Set.set(i,0)
        var count=nums2Set.get(i)
        nums2Set.set(i,++count)
    }

    for(let i of nums1)
        if(nums2Set.has(i)) res[0]++
    
    for(let i of nums2)
        if(nums1Set.has(i)) res[1]++

    return res
};