const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
const result = [];

arr.forEach((_,index)=>{
    if(index%2===0) {
        const mid = arr.slice(0,index+1).sort((a,b)=>a-b)[Math.floor(index/2)];
        result.push(mid);
    }  
})

console.log(result.join(' '));