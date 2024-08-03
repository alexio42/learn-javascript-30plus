/*
## Functions #5

1. create "calculateTotal" function
2. add two parameters subTotal, tax
3. return sum of parameters

4. create 3 vars "order1","order2","order3"
5. call calculateResult, pass in some values and assign result to each order
6. log all three orders
7. refactor "calculateTotal" to function expression

*/

// function calculateTotal(subTotal, tax) {
//   return subTotal + tax;
// }

const calculateTotal = function (subTotal, tax) {
  return subTotal + tax;
};

const order1 = calculateTotal(4, 6);
const order2 = calculateTotal(45, 3);
const order3 = calculateTotal(6, 7);

console.log(order1, order2, order3);
