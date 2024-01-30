function palindrome (str){
    var lastIdx=str.length-1
    for(let i=0;i<(str.length/2);i++,lastIdx--){
        if(str[i]!=str[lastIdx]) return false
    }
    return true
}

console.log(palindrome("assa"))