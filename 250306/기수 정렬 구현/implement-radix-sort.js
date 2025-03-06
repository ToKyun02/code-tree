const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please write your code here.

function getDigitSort(arr){
    let div=1;
    for(let i=0; i<6; i++){
        const digitArr = Array.from({length:10},()=>[]);
    
        for(let j=0; j<arr.length; j++){
            const digit = Math.floor(arr[j]/div)%10;
            digitArr[digit].push(arr[j]);
        }

        const storeArr = [];
        for(let j=0; j<10; j++){
            for(let k=0; k<digitArr[j].length; k++){
                storeArr.push(digitArr[j][k]);
            }
        }
        arr = storeArr;
        div*=10;
    }
    return arr;
}


console.log(getDigitSort(arr).join(' '));