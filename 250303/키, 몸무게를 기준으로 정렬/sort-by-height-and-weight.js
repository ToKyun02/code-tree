const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const records = [];
for (let i = 1; i <= n; i++) {
  const [name, height, weight] = input[i].split(" ");
  records.push([name, Number(height), Number(weight)]);
}

// Please Write your code here.

const compare =(a,b)=>{
  if(a[1]>b[1]) return 1;
  else if(a[1]<b[1]) return -1;

  return b[2] - a[2];
}

console.log(records.sort(compare).map((value)=>value.join(' ')).join('\n'));