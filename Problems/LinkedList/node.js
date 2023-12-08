class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    push(val){
       var node =new Node(val);
       if(this.length==0){
        this.head=node;
        this.tail=node;
       }
       else {
        let current=this.head;
        while(current.next){
            current=current.next;
        }
        this.tail=node
        current.next=node;
       }
       this.length++;
    }
}


var first=new Node("hey");
first.next=new Node("there");

var list=new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);

console.log(list.head.next, list.length, list.tail)

console.log(first.next)