const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1).map(line => line.split(' '));

// Please Write your code here.

const overlayList = Array.from({ length: 200_001 }, () => ({
    black: 0,
    white: 0,
    lastColor: '',
    gray: 0
}));

let cur=100000;

commands.forEach((command)=>{
    const [moveCnt, direction] = command.map((value,i)=>(i===0?Number(value):value));
    const startPoint = cur;
    const endPoint = direction === 'L' ? cur - moveCnt : cur + moveCnt;
    const step = direction === 'L' ? -1 : 1;

    for(let i=startPoint; i!==endPoint; i+=step){
        if(overlayList[i].gray===1) continue;

        if(direction==='L') {
            overlayList[i].white++;
            overlayList[i].lastColor='white';
        }
        else{
            overlayList[i].black++;
            overlayList[i].lastColor='black'
        }
        
        if(overlayList[i].white>=2 && overlayList[i].black>=2){
            overlayList[i].white = 0;
            overlayList[i].black = 0;
            overlayList[i].gray = 1;
            overlayList[i].lastColor= 'gray';
        }

    }
    cur = direction === 'L' ? endPoint + 1 : endPoint - 1;
});

let wCnt=0;
let bCnt=0;
let gCnt=0;

overlayList.forEach((overlay)=>{
    switch(overlay.lastColor){
        case 'white' :  wCnt++; break;
        case 'black' : bCnt++; break;
        case 'gray' : gCnt++; break;
    }
});

console.log(wCnt, bCnt, gCnt);

