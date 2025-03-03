const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1).map(line => line.trim().split(' ').map(Number));

// Please Write your code here.
const distances = points.map((point, index)=>{
    const distance = Math.abs(point[0]) + Math.abs(point[1]);

    return [distance, index+1];
})

console.log(distances.sort((a,b)=>{
    if(a[0]>b[0]) return 1;
    else if(a[0]<b[0]) return -1;
}).map((value)=> value[1]).join('\n'));