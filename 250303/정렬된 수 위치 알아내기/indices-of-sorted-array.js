const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
let copyArr = arr.map((num,index)=>{
    return {[num]:index};
})

copyArr.sort((a,b)=>{
    aKey = Number(Object.keys(a)[0]);
    bKey = Number(Object.keys(b)[0]);

    return aKey-bKey;
})

copyArr = copyArr.map((obj,index)=>{
    const key = Object.keys(obj)[0];
    return {[key]:index+1};
});


const result=[];

arr.forEach((num,i)=>{
    for(let j=0; j<copyArr.length; j++){
        const key = Object.keys(copyArr[j])[0];
        if(arr[i]===Number(key)){
            result.push(copyArr[j][key]);
            const tmp = [...copyArr.slice(0,j),...copyArr.slice(j+1)];
            copyArr = tmp;
            break;
        }
    }
})

console.log(result.join(' '));