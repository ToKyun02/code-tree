const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

function getFibonacci(n){
    if(n<=2) return 1;
    return getFibonacci(n-1) + getFibonacci(n-2);
}


console.log(getFibonacci(n));