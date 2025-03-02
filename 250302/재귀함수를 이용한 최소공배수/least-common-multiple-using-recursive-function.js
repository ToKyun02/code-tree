const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const numbers = input[1].split(" ").map(Number);
// Please Write your code here.


/**
 * 공약수 구하기
 * 
 * 길이 - 1 : n
 * 길이 - 2 : a,b의 최대 공약수
 * 길이 - 3 : 길이 - 2, c의 최대 공약수
 * 길이 - 4 : 길이 - 3, d의 최대 공약수
 * 
 * 결국 한번이라도 최대 공약수가 1이되면 탐색할 필요없이 최대 공약수는 1이 되고,
 * 최대 공약수도 합성수 이기 때문에 이걸로 나머지 숫자들과 연산해줘야 함
 * 
 */

function getLcm(arr){
    const aDivisor = [];
    const bDivisor = [];
    let gcd = 0;
    if(arr.length===1) return arr[0];

    for(let i=1; i<=arr[0]; i++){
        if(arr[0]%i===0) aDivisor.push(i);
    }

    for(let i=1; i<=arr[1]; i++){
        if(arr[1]%i===0) bDivisor.push(i);
    }


    for(let i=0; i<aDivisor.length; i++){
        for(let j=0; j<bDivisor.length; j++){
            if(aDivisor[i]===bDivisor[j] && aDivisor[i]>gcd) gcd=aDivisor[i];
        }
    }

    const lcm = Math.floor(arr[0] * arr[1] / gcd);

    return getLcm([lcm,...arr.slice(2)]);
}

console.log(getLcm(numbers));