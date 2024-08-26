// find
// returns single instance - (in this case object)
// returns first match, if no match, returns undefined
// great for getting unique value

const people = [
  { name: 'bob', age: 20, position: 'developer', id: 1 },
  { name: 'peter', age: 25, position: 'designer', id: 2 },
  { name: 'susy', age: 30, position: 'the boss', id: 3 },
  { name: 'anna', age: 35, position: 'the boss', id: 4 },
];

const names = ['bob', 'peter', 'susy'];

console.log(
  names.find(function (name) {
    return name === 'bob';
  })
);

// returns object
const person = people.find(function (person) {
  return person.id === 3;
});

console.log(person); // can access name using person.name

//returns array
const person2 = people.filter(function (person) {
  return person.id === 3;
});

console.log(person2); // need to use person2[0].name to access name
