/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack=[]
    var map=new Map()
    map.set(")","(")
    map.set("]","[")
    map.set("}","{")
    for(let i of s){
        if(map.has(i)) {
            if(stack.pop() != map.get(i)) return false
        }
        else stack.push(i) 
    }
    return stack.length==0 && s.length %2==0
};