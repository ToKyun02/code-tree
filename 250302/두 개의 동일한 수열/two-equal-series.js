const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const a = input[1].trim().split(' ').map(Number);
const b = input[2].trim().split(' ').map(Number);

// Please Write your code here.
a.sort();
b.sort();

a.every((a,i)=>a===b[i]) ? console.log('Yes') : console.log('No');

