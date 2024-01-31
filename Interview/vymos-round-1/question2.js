// "hello world"
// "hurray 3 2 1"
// world hello
// 1 2 3 hurray

function reverseWords(str){
    var wordArray=str.split(" ");
    var res=""

    for(let i=wordArray.length-1;i>=0;i--){
        if(wordArray[i]=='') continue
        res+=wordArray[i] 
        if(i!=0) res+=" "
    }

    return res;
}

// console.log(reverseWords("hello world"))
// console.log(reverseWords("hurray 3 2 1"))
console.log(reverseWords("We love JS "))
console.log(reverseWords("hi"))



