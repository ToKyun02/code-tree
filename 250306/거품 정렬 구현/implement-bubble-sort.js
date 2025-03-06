const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
function sortedArray(arr){

    let sorted=true;
    do{
                sorted=true;
        for(let i=0; i<arr.length; i++){
            if(arr[i]>arr[i+1]){
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                sorted=false;
            }
        }

    }while(sorted===false)
    return arr;
}


console.log(sortedArray(arr).join(' '))