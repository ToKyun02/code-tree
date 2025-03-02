const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = parseInt(input[0]);
const nums = input[1].split(' ').map(Number);

// Please Write your code here.
const ascArr = nums.sort((a,b)=>a-b);
console.log(ascArr.join(' '));
const descArr = ascArr.reverse();


console.log(descArr.join(' '));