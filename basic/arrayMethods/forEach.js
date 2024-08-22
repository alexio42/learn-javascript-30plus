// forEach
// does not return new array

const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'the boss' },
];

function showPerson(person) {
  console.log(person.position.toUpperCase());
  // can invoke string methods on strings in objects
}

// Can use function as argument
people.forEach(showPerson);

// can use anonymous function with forEach
people.forEach(function (item) {
  console.log(item.position.toUpperCase());
});
