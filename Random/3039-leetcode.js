// 3039. Apply Operations to Make String Empty
// Solved
// Medium
// Companies
// Hint
// You are given a string s.

// Consider performing the following operation until s becomes empty:

// For every alphabet character from 'a' to 'z', remove the first occurrence of that character in s (if it exists).
// For example, let initially s = "aabcbbca". We do the following operations:

// Remove the underlined characters s = "aabcbbca". The resulting string is s = "abbca".
// Remove the underlined characters s = "abbca". The resulting string is s = "ba".
// Remove the underlined characters s = "ba". The resulting string is s = "".
// Return the value of the string s right before applying the last operation. In the example above, answer is "ba".

 

// Example 1:

// Input: s = "aabcbbca"
// Output: "ba"
// Explanation: Explained in the statement.

var lastNonEmptyString = function(s) {
    var map=new Map()
    var maxCount=0

    //finding the max.
    for(let i of s){
        if(!map.has(i)) map.set(i,0)
        var count=map.get(i)
        maxCount=Math.max(maxCount,count+1)
        map.set(i,++count)
    }

    //removing the garbage values.
    for(let i of map.entries()) {
        if(i[1]==maxCount) map.set(i[0], 1);
        else map.delete(i[0])
    }


    var res=""

    //returning the answer in reverse order.
    for(let i=s.length-1;i>=0;i--){
        if(map.has(s[i])) res+=s[i], map.delete(s[i])
    }

    return res.split("").reverse().join("")

};