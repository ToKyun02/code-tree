const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

function getDivCount(n, cnt=0){
    if(n===1) return cnt;
    if(n%2===0){
        return getDivCount(Math.floor(n/2), ++cnt);
    }
    else{
        return getDivCount(Math.floor(n/3), ++cnt);
    }
}

console.log(getDivCount(n));