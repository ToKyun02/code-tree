const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const bracketStr = input[0];
// Please write your code here.

function isValid(str){
    const arr = [];
    for(let i=0; i<str.length; i++){
        if(arr.length===0&&str[i]===')') return false;
        
        if(str[i]==='(') arr.push(str[i]);
        else {
            arr.pop();
        }
    }
    if(arr.length===0)return true;
    return false;
}


console.log(isValid(bracketStr)?'Yes':'No');