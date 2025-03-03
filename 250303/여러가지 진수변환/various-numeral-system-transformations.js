const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [n, b] = input[0].split(' ').map(Number);

// Please Write your code here.

function decToBase(n, b){
    if(n<b) return [n];
    return [...decToBase(Math.floor(n/b), b),n%b];
}


console.log(decToBase(n,b).join(''));