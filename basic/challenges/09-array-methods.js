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

// highScores
// 1. filter array and return only scores >= 80
// 2. assign to 'highScores' variable and log

const highScores = students.filter(function (student) {
  //   if (student.score >= 80) {
  //     return student;
  //   }  OR
  // if (student.score >= 80) return student; OR
  return student.score >= 80;
});

console.log(highScores);

// specificId
// 1. find specific id in array
// 2. assign to 'specificId' variable and log

const specificId = students.find(function (student) {
  if (student.id === 3) {
    return student; // returns entire object/array/string/number that matches. Undefined if no match
  }
  // OR return student.id === 3;
});

console.log(specificId.name); // just returns name of matching ID
