const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [s_code, m_point, time] = input[0].split(' ');
// Please Write your code here.

class SecretClass {
    constructor(code, point, time){
        this.s_code = code;
        this.m_point = point;
        this.time = time;
    }
}

const secret = new SecretClass(s_code,m_point,time);

console.log(`secret code : ${secret.s_code}`)
console.log(`meeting point : ${secret.m_point}`)
console.log(`time : ${secret.time}`)