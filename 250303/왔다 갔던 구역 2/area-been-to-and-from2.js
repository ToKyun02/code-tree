const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please Write your code here.

const overlayList = new Array(1001).fill(0);

let curPoint = 500;

commands.forEach((command)=>{
    const [moveCnt, direction] = command.trim().split(' ').map((value,i)=>{
        if(i===0) return Number(value);
        return value;
    });

    const startPoint = curPoint;
    const endPoint = direction === 'L' ? curPoint-moveCnt : curPoint+moveCnt;

    for(let i=Math.min(startPoint,endPoint); i<Math.max(startPoint,endPoint); i++){
        overlayList[i]++
    }
    curPoint=direction === 'L' ? curPoint-moveCnt : curPoint+moveCnt;
})

console.log(overlayList.filter((cnt)=>cnt>=2).length);
