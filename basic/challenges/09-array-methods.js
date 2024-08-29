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

console.log(specificId.name); // use array.key to return specific value of matching ID

// averageScore
// 1. sum up all student.score values with reduce
// 2. divide by the length of the students array
// 3. assign to 'averageScore' and log

const averageScore =
  students.reduce(function (scoresTotal, student) {
    scoresTotal += student.score;
    return scoresTotal;
  }, 0) / students.length;

console.log(`Average score = ${averageScore}`);

// Reduce #2 - survey
// 1. list favourite subjects with reduce
// {
//  maths: 2
//  philosophy: 1
//  science: 1
//  english: 1
//  }
// 2. assign to survey and log

const survey = students.reduce(function (survey, student) {
  // console.log(student.favouriteSubject);
  const favSubject = student.favouriteSubject;
  // if (survey[favSubject] === undefined) {
  //   survey[favSubject] = 1;
  // } else {
  //   survey[favSubject]++;
  // }  My solution.

  if (survey[favSubject]) {
    survey[favSubject]++;
  } else {
    survey[favSubject] = 1;
  } // instructor solution.

  return survey;
}, {}); // using {} here means reduce will return an object

console.log(survey);
