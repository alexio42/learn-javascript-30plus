// submit event listener
// prevent default
// how to get a value

const form = document.getElementById('form');
const name = document.getElementById('name');
const password = document.getElementById('password');
form.addEventListener('submit', function (e) {
  e.preventDefault(); // default sends form to server and refreshes page. Need to prevent this to handle form in frontend
  console.log('form submitted');
  console.log(name.value);
  console.log(password.value);
});
