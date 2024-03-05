// You are given a string s and an array of strings words. All the strings of words are of the same length.
// A concatenated substring in s is a substring that contains all the strings of any permutation of words concatenated.
// For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is not a concatenated substring because it is not the concatenation of any permutation of words.
// Return the starting indices of all the concatenated substrings in s. You can return the answer in any order.

// Input: s = "barfoothefoobarman", words = ["foo","bar"]Output: [0,9]Explanation: Since words.length == 2 and words[i].length == 3, the concatenated substring has to be of length 6.
// The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
// The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.
// The output order does not matter. Returning [9,0] is fine too.


// Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]Output: []Explanation: Since words.length == 4 and words[i].length == 4, the concatenated substring has to be of length 16.
// There is no substring of length 16 in s that is equal to the concatenation of any permutation of words.
// We return an empty array.
 

function findSubStrIndexes(s, words){
    if(!words) return [];

    let totalLength= words.length*words[0].length;

    let wordFreq={};

    words.forEach(word => {
        if(wordFreq[word]) {
            wordFreq[word]++
        }
        else {
            wordFreq[word]=1; 
        }
    })


    let res=[];


    for(let i=0; i<s.length-totalLength;i++){
        const seen={};
        let j=0;

        while(j<totalLength){
            let word=s.substring(i+j, i+j+words[0].length);
            console.log(word)

            if(!wordFreq[word]) break;

            seen[word]  += seen[word]>0 ? 1 : 0;

            if(seen[word]> wordFreq[word]) break;
            j+=words[0].length
        }

        if(j==totalLength) res.push(i);
    }



    // let peakIndex=s.length-wordLength;
    // for (let i=0; i<wordLength; i++){
    //     let left =i;
    //     let count=0;

    //     let seen={}

    //     for(let j=i;j<=maxIndex; j+=wordLength){
    //         let word=s.substring(j,j+wordLength);

    //         if(wordFreq[word]){
    //             seen[word] +=1;
    //             count++;

    //             while(seen[word]>wordFreq[word]){
    //                 leftWord=s.substring(left,left+words[0].length);

    //                 seen[leftWord]--;
    //                 count--;
    //                 left+=words[0].length;

    //                 if(count==word)
    //             }
    //         }
    //     }
    // }

    return res;
}

console.log(findSubStrIndexes("barfoothefoobarman",["foo","bar"]))

console.log(findSubStrIndexes("wordgoodgoodgoodbestword",["word","good","best","word"]))
