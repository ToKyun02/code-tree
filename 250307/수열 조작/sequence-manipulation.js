const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);

// Please Write your code here.

class Node {
    constructor(data){
        this.prev=null;
        this.next=null;
        this.data=data;
    }
}

class Deque{
    constructor(){
        this.head=null;
        this.tail=null;
        this.cnt=0;
    }
    pushBack(num){
        const newNode = new Node(num);
        if(this.cnt===0){
            this.head=newNode;
            this.tail=newNode;
        }
        else{
            newNode.prev=this.tail;
            this.tail.next=newNode;
            this.tail = newNode;
        }

        this.cnt++;
    }
    popFront(){
        const popValue = this.head.data;
        if(this.cnt===1){
            this.head=null;
            this.tail=null;
        }
        else{
            const prevHead = this.head;
            prevHead.next.prev=null;

            this.head=prevHead.next;
        }

        this.cnt--;
        return popValue;
    }
    size(){
        return this.cnt;
    }
}

const deque = new Deque();

for(let i=1; i<=n; i++){
    deque.pushBack(i);
}

while(deque.size()!==1){
    deque.popFront();
    deque.pushBack(deque.popFront());
}

console.log(deque.popFront())