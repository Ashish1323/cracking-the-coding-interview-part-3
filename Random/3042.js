/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {

    var res=0
    for(let i=0;i<words.length;i++){
        for(let j=i+1;j<words.length;j++){
            var subWord=words[i]
            var setWord=words[j]
            if(isPrefixAndSuffix(subWord,setWord)) res++
        }
    }

    return res
};

    function isPrefixAndSuffix(str1,str2){
        var prefix=str2.slice(0,str1.length);
        var suffix=str2.slice(str2.length-str1.length,str2.length)

        return prefix==str1 && suffix ==str1;
    }