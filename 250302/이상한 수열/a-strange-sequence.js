const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);
// Please Write your code here.

function getSequence(n){
    if(n<=2) return n;

    return getSequence(Math.floor(n/3)) + getSequence(n-1);
}

console.log(getSequence(n));