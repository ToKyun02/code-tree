const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let index = 0;
const [n, k, t] = input[index++].split(' ');
const words = [];
for (let i = 0; i < Number(n); i++) {
    words.push(input[index++]);
}
// Please Write your code here.

const filterWords = words.filter((word)=>{
    for(let i=0; i<t.length; i++){
        if(t[i]!==word[i]) return false;
    }
    return true;
})

console.log(filterWords.sort()[k-1]);