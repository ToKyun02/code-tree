const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const studentData = input.map(line => line.trim().split(' '));

// Please write your code here.

console.log(studentData.sort((a,b)=>{
    const aTotal = a.slice(1).map(Number).reduce((acc,cur)=>acc+cur,0);
    const bTotal = b.slice(1).map(Number).reduce((acc,cur)=>acc+cur,0);

    return aTotal - bTotal;
}).map((value)=>value.join(' ')).join('\n'));