const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryStr = input[0];

// Please Write your code here.

function binaryToDec(binary, acc=0){
    if(binary.length<1) return acc;
    const e = binary.length-1;
    const digit = Number(binary[0]);
    return binaryToDec(binary.slice(1), acc+2**e * digit);
}

console.log(binaryToDec(binaryStr));