// map
// DOES return new array
// Does not change size of original array
// use values from original array when making new one

const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'the boss' },
];

const ages = people.map(function (person) {
  // return person.age + 20;
  // return 'hello world';
});

const newPeople = people.map(function (person) {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age + 20,
  };
});

const names = people.map(function (person) {
  return `<h1>${person.name}<h1>`;
});

document.body.innerHTML = names.join('');

console.log(names);
console.log(newPeople);
console.log(ages);
