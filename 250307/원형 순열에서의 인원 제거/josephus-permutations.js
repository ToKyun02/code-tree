const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(" ").map(Number);
// Please Write your code here.
class Queue{
    constructor(){
        this.head=0;
        this.tail=0;
        this.list=[];
    }
    push(n){
        this.list.push(n);
        this.tail++;
    }
    pop(){
        const popValue = this.list[this.head];
        this.head++;
        return popValue;
    }
    size(){
        return this.tail-this.head;
    }
}

const queue = new Queue();

for(let i=1; i<=n; i++){
    queue.push(i);
}

const result = [];
while(queue.size()!==0){
    for(let i=0; i<k-1; i++){
        queue.push(queue.pop());
    }
    result.push(queue.pop());
}

console.log(result.join(' '))
