const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [a, b, c] = input[0].split(" ").map(Number);

// Please Write your code here.
function getSum(n){
    if(Math.floor(n/10)===0) return n;

    return getSum(Math.floor(n/10)) + n%10;
}

console.log(getSum(a*b*c));