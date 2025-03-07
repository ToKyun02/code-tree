const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please write your code here.
class Queue{
    constructor(){
        this.list=[];
        this.head=0;
        this.tail=0;
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
    empty(){
        return this.size() ? 0 : 1;
    }
    front(){
        return this.list[this.head];
    }
}

const queue = new Queue();
const result = [];

commands.forEach((line)=>{
    const [command, num] = line.trim().split(' ');
    switch(command){
        case 'push' : queue.push(Number(num)); break;
        case 'pop': result.push(queue.pop()); break;
        case 'size': result.push(queue.size()); break;
        case 'empty' : result.push(queue.empty()); break;
        default :  result.push(queue.front());
    }
})

console.log(result.join('\n'));