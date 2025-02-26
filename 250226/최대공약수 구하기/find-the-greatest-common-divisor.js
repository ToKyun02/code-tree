const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let n = Number(input[0]);
let m = Number(input[1]);
// Please Write your code here.

const a = [];
const b = [];

let cnt=1;
while(1){
    if(n%cnt===0) a.push(cnt);
    cnt++;

    if(cnt>n) break;
}

cnt=1;
while(1){
    if(m%cnt===0) b.push(cnt);
    cnt++;

    if(cnt>m) break;
}

let max = 0;


a.forEach((value)=>{
    b.forEach((bValue)=>{
        if(value===bValue && value>max) max=value;
    })
})

console.log(max);