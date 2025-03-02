const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);

// Please Write your code here.
function getWhile(n, cnt=0){
    if(n===1) return cnt;

    if(n%2===0) return getWhile(Math.floor(n/2),++cnt);
    return getWhile(n*3+1,++cnt);
}

console.log(getWhile(n));