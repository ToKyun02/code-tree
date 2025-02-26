const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// Please Write your code here.

const printTenStar=() => {
    console.log('**********');
}

for(let i = 0; i<5; i++) printTenStar();