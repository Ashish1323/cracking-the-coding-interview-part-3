/**
 * @param {string} word
 * @return {number}
 */
var removeAlmostEqualCharacters = function(word) {
    var res=0
    
    for(let i=1; i<word.length;i++){
        if (word[i]==word[i-1] || 
        (Math.abs(word.charCodeAt(i) -  word.charCodeAt(i-1)) < 2)){
            res++
            i++
        }
    }
    return res
};