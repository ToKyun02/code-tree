const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);

// Please Write your code here.

function print(n,m){
    for(let i=0; i<n; i++){
        let tmp = '';
        for(let j=0; j<m; j++){
            tmp+=1;
        }
        console.log(tmp);
    }
}
print(n,m);