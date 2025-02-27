const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);

// Please Write your code here.

function mulSum(n){
    if(n<10) return n*n;

    return mulSum(Math.floor(n/10)) + (n % 10) * (n%10);
}

console.log(mulSum(n));