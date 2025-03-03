const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.


function decTobinary(n,list=[]){
    if(n<=1){list.push(n); return list;}
    decTobinary(Math.floor(n/2),list);
    list.push(n%2);
    return list;
}

console.log(decTobinary(n).join(''));