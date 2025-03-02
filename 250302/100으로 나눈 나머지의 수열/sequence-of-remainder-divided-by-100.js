const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
// Please Write your code here.

function getSequence(n){
    if(n<=2) return 2*n;
    return( getSequence(n-1) * getSequence(n-2)) %100;
}

console.log(getSequence(N));