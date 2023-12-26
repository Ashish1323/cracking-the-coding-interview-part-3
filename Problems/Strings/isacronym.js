/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    var res=""
    for(let i of words) res+=i[0]

    return words.length==s.length ? res==s : false
};