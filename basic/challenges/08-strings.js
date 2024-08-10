/* 
## Strings #8

1. create function fullName
2. accept two parameters "firstName", "lastName"
3. add them together (concat) and return result in uppercase
4. invoke fullName and pass some values
5. log result
6. change the order of arguments
7. refactor to object parameter

*/

function fullName(firstName, lastName) {
  //firstName = firstName.toUpperCase();
  //lastName = lastName.toUpperCase();
  //return `${firstName} ${lastName}`;

  // One-line solution
  return `${firstName.toUpperCase()} ${lastName.toUpperCase()}`;
}

console.log(fullName('David', 'Smith'));

// Refactor as object
function fullNameRev({ firstName, lastName }) {
  const fullName = `${firstName} ${lastName}`;
  return fullName.toUpperCase();
}

// Order of arguments in object does not matter.
console.log(fullNameRev({ lastName: 'Jones', firstName: 'Rhys' }));
