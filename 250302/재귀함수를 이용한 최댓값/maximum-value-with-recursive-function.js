const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

// Please Write your code here.

function getMax(arr, max=0){
    if(arr.length===0) return max;

    if(arr[0]>max) return getMax(arr.slice(1), arr[0]);
    else return getMax(arr.slice(1), max);

}

console.log(getMax(arr));