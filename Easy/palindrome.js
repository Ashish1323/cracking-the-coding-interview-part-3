function palindrome (str){
    var lastIdx=str.length-1
    for(let i=0;i<(str.length/2);i++,lastIdx--){
        if(str[i]!=str[lastIdx]) return false
    }
    return true
}

console.log(palindrome("assa"))



class MyQueue {
    constructor() {
        this.s1 = [];
        this.s2 = [];
    }

    push(x) {
        while (this.s1.length > 0) {
            this.s2.push(this.s1.pop());
        }
        this.s1.push(x);
        while (this.s2.length > 0) {
            this.s1.push(this.s2.pop());
        }
    }

    pop() {
        return this.s1.pop();
    }

    peek() {
        return this.s1[this.s1.length - 1];
    }

    empty() {
        return this.s1.length === 0;
    }
}

[1,2,3,4,5]

[] s2
[3, 2, 1] s1
