const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

// Please Write your code here.
function getDay(m){
    switch(m){
        case 2 : return 28;
        case 1 :
        case 3 :
        case 5 :
        case 7 :
        case 8 :
        case 10 :
        case 12 : return 31;
        default : return 30;
    }
}

let a=d1;
let b=d2;

for(let i=1; i<m1; i++){
    a+=getDay(i);
}

for(let i=1; i<m2; i++){
    b+=getDay(i);
}

console.log(b-a + 1);


