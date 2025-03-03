const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const students = [];
for (let i = 1; i <= n; i++) {
    const [height, weight] = input[i].split(" ").map(Number);
    students.push([height, weight, i]);
}

const compare = (a,b)=>{
    if(a[0]>b[0]) return -1;
    else if(a[0]<b[0]) return 1;

    if(a[1]>b[1]) return -1;
    else if(a[1]<b[1]) return 1;

    return a[2] - b[2];
};

// Please Write your code here.
console.log(students.sort(compare).map((value)=>value.join(' ')).join('\n'));