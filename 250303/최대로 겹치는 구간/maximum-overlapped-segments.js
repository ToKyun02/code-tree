const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
    segments.push(input[i].split(' ').map(Number));
}

// Please write your code here.
const overlayList = new Array(201).fill(0);

segments.forEach((segment)=>{
    const startPoint = segment[0] + 100;
    const endPoint = segment[1] + 100;

    for(let i=Math.min(startPoint,endPoint); i<Math.max(startPoint,endPoint); i++){
        overlayList[i]++;
    }
})

console.log(Math.max(...overlayList));