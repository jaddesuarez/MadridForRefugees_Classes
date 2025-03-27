// sort() method
//  - It takes a function as an argument.
//  - Otherwise, it sorts the elements according to the `Unicode` encoding.
// - IMPORTANT: It mutates the original array.

// Sample 1
const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

numbers.sort();

console.log("Unicode sort ==>", numbers);

console.log("------");

// Sample 2
numbers.sort((a, b) => {
  return a - b;
});

console.log("Custom sort ==>", numbers);
