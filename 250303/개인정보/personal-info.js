const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const students = [];
for (let i = 0; i < 5; i++) {
  const [name, heightStr, weightStr] = input[i].split(' ');
  const height = Number(heightStr);
  const weight = Number(weightStr);
  students.push({ name, height, weight });
}

// Please Write your code here.
students.sort((a,b)=>{
  if(a.name>b.name) return 1;
  else if(a.name<b.name) return -1;
  return 0;
})

console.log('name');
console.log(students.map((student)=>`${student.name} ${student.height} ${student.weight}`).join('\n'));

students.sort((a,b)=>{
  const aW = Number(a.height);
  const bW = Number(b.height);
  return bW -aW;
})

console.log();
console.log('height');
console.log(students.map((student)=>`${student.name} ${student.height} ${student.weight}`).join('\n'));