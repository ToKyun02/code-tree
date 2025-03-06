const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

function getInsertSort(arr){

    for(let i=1; i<arr.length; i++){
        let j = i-1;
        const selectValue = arr[i];

        while(j>=0&& arr[j]>selectValue){
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j+1] = selectValue;
    }
    return arr;
}


console.log(getInsertSort(arr).join(' '));