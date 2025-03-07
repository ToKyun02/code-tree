const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(" ").map(Number);

function getPlace(arr,low,high){
    let i=low-1, j=low;
    const pivot = arr[high];
    while(j<high){
        if(arr[j]<pivot){
            i++;
            [arr[i],arr[j]] = [arr[j],arr[i]];
        }
        j++;
    }
    [arr[i+1],arr[j]] = [arr[j],arr[i+1]];

    return i+1;
}

// Please Write your code here.
function quick_sort(arr,low,high){
    if(low<high){
        const pos = getPlace(arr,low,high);
        quick_sort(arr,low,pos-1);
        quick_sort(arr,pos+1,high);
    }
}


quick_sort(arr,0,n-1);
console.log(arr.join(' '));