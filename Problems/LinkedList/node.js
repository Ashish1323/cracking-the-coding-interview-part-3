class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}


var first=new Node("hey");
first.next=new Node("there");

console.log(first.next)