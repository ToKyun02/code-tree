const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

// Please Write your code here.
class Stack{
    constructor(){
        this.list=[];   
    }
    push(num){
        this.list.push(num);
    }
    pop(){
        return this.list.pop();
    }
    size(){
        return this.list.length;
    }
    empty(){
        return this.list.length ? 0 : 1;
    }
    top(){
        return this.list[this.list.length-1];
    }
}

const result = [];

const stack = new Stack();

commands.forEach((line)=>{
    const [command, num] = line.trim().split(' ');
    switch(command){
        case 'push' : stack.push(Number(num)); break;
        case 'pop' : result.push(stack.pop()); break;
        case 'size' : result.push(stack.size()); break;
        case 'empty' : result.push(stack.empty()); break;
        case 'top' : result.push(stack.top()); break;
    }
})

console.log(result.join('\n'));