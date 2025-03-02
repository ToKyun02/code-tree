const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].trim().split(' ').map(Number);

// Please Write your code here.

function getGroupMaxOfMin(nums){
    nums.sort((a,b)=>a-b);
    let groupMax = 0;
    for(let i=0; i<n; i++){
        const groupSum = nums[i] + nums[2*n-1-i];
        if(groupSum>groupMax){
            groupMax=groupSum
        }
    }
    return groupMax;
}

console.log(getGroupMaxOfMin(nums));