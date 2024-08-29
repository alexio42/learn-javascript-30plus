// Math
// Standard built-in objects - always available.

// const number = 4.56789;
// const result = Math.floor(number); // rounds DOWN
const floorResult = Math.floor(8.9999); // rounds DOWN
console.log(floorResult);

const ceilingResult = Math.ceil(8.333);
console.log(ceilingResult);

// const number = 25;
// const result = Math.sqrt(number);

// const result = Math.PI;

// const result = Math.min(4, 5, 6, 7, 8);
// const result = Math.max(4, 5, 6, 7, 8);

// const result = Math.random();
// const result = Math.random() * 10; // decimal between 0-9
// const result = Math.floor(Math.random() * 10);  // 0-9
// const result = Math.ceil(Math.random() * 10); // 1-10 - very small chance of getting 0 back, so floor + 1 is preferred.
const result = Math.floor(Math.random() * 10 + 1); // 1-10 with floor

console.log(result);
