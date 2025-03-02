const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

// Please Write your code here.

function getSum(n){
    if(n<=2) return n;

    return n + getSum(n-2);
}


console.log(getSum(n));