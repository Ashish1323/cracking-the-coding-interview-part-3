// Given 2 arrays of integers, find if they are anagrams of each other.
// [1, 3, 4] and [1, 4, 3]
// [1, 3] and [4, 3]

function anagram(array1, array2){
    var freqArray1=new Map()
    for(let i of array1){
        if(!freqArray1.has(i)) freqArray1.set(i,0)
        var v=freqArray1.get(i)
        freqArray1.set(i,++v)
    }

    var freqArray2=new Map()
    for(let i of array2){
        if(!freqArray2.has(i)) freqArray2.set(i,0)
        var v=freqArray2.get(i)
        freqArray2.set(i,++v)
    }

    for(let i of array1){
        if(freqArray1.get(i) != freqArray2.get(i)) return false
    }

    return true
}

var array1=[1,3, 3 ,4]
var array2=[4,3 ,3 ,1]

console.log(anagram(array1,array2))