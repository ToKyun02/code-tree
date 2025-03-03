const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b] = input[0].split(' ').map(Number);
const n = input[1];
// Please Write your code here.

// n은 string, base는 진수
function baseToDec(n,base){
    if(n.length===1) return Number(n[0]);
    const e = n.length-1;
    return baseToDec(n.slice(1), base) + (base ** e) * Number(n[0]);
}

// n은 number, base는 진수
function decToBase(n,base){
    if(n<base) return n + '';

    return decToBase(Math.floor(n/base),base) + n%base + '';
}

console.log(baseToDec('1010',2));
console.log(decToBase(10,2));