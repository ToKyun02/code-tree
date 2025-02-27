const fs = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);

const [n, m] = fs.sort((a, b) => a - b);

/**
 * 최대 공약수 구하고 그 나머지들을 곱하면 됨
 * 
 * 
 */




const aArr = [];
const bArr = [];
const equal = [];

function getEven(n, m) {
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) aArr.push(i);
    }
    for (let i = 1; i <= m; i++) {
        if (m % i === 0) bArr.push(i);
    }
}

getEven(n,m);
for (let i = 0; i < aArr.length; i++) {
    for (let j = 0; j < bArr.length; j++) {
        if (aArr[i] === bArr[j]) { equal.push(aArr[i]); j = bArr.length; }
    }
}


const maxEven = equal[equal.length - 1];

console.log(maxEven * ((n/maxEven) * (m/maxEven)));