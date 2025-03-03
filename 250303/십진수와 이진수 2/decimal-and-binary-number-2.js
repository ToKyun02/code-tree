const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryInput = input[0].trim();

// Please Write your code here. 

function binaryToDec(binary){
    if(binary.length===1) return Number(binary[0]);
    const e = binary.length-1;
    
    return binaryToDec(binary.slice(1)) + (2 ** e) * Number(binary[0]);
}

function decToBinary(dec){
    if(dec<2) return dec+'';

    return decToBinary(Math.floor(dec/2)) + '' + dec%2;
}

console.log(decToBinary(binaryToDec(binaryInput)*17));