const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rawStudentData = input.slice(1, n + 1).map((value)=>value.trim().split(' '));

// Please Write your code here.
class Student{
    constructor(name, kor, eng, mat){
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.mat = mat;
    }
}

const students = rawStudentData.map((rawStudent)=>(new Student(rawStudent[0], Number(rawStudent[1]),Number(rawStudent[2]),Number(rawStudent[3]))));

const compare = (a,b)=>{
    if(a.kor>b.kor) return -1;
    else if(a.kor<b.kor) return 1;
    
    if(a.eng>b.eng) return -1;
    else if(a.eng<b.eng) return 1;

    if(a.mat>b.mat) return -1;
    else if(a.mat<b.mat) return 1;

    return 0;
}

students.sort(compare).forEach((student)=>{
    const str = student.name +' '+student.kor + ' ' + student.eng + ' ' + student.mat;
    console.log(str);
})

