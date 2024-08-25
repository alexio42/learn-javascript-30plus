// have access to students from data.js
console.log(students);

// updatedStudents
// 1. add role:'student' property to each object using MAP method
// 2. assign to 'updatedStudents' variable and log.

const updatedStudents = students.map(function (student) {
  student.role = 'student';
  return student;
});

console.log(updatedStudents);
