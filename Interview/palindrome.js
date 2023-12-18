//input =[1,2,1]
//
//rev =[1,2,1]

// 1->2->1
// [1,2,1]

function palidrome(input){
    var startInput=0
    var endInput=input.length-1
    var middleInput=Math.round((startInput+endInput)/2)
    for(startInput;startInput<middleInput;startInput++,endInput--){
        if(input[startInput]!=input[endInput]) return false
    }

    return true
}

console.log(palidrome("abaa"))

