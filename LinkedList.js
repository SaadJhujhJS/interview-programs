class node{
    constructor(value){
    this.value=value;
    this.next=null;
}
}
class linkedlist{
    constructor(){
        this.head=null;
        this.tail=null;
    }


append(value){
    const newNode=new node(value);
    if(!this.head){
        this.head=newNode;
        this.tail=newNode;
    }
    else{
        this.tail.next=newNode;
        this.tail=newNode;
    }
}

printLinkedList(){
    let current=this.head;
    while(current){
        console.log(current.value);
        current=current.next;
    }
}
}

const mylist=new linkedlist;
mylist.append(10);
mylist.append(20);
mylist.append(30);
mylist.printLinkedList();