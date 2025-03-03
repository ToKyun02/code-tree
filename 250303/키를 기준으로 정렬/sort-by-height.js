const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const studentsInput = [];
for (let i = 1; i <= n; i++) {
    studentsInput.push(input[i].split(' '));
}
// Please Write your code here.
class Student {
    constructor(name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
}

const students = studentsInput.map((student) => (new Student(student[0], Number(student[1]), Number(student[2]))));

students.sort((a,b)=>a.height-b.height);

students.forEach((student)=>{
    console.log(`${student.name} ${student.height} ${student.weight}`);
})