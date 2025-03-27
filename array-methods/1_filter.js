// .filter() method
//  - It takes a function as an argument.
//  - Returns an array with a maximum length equal to the length of the original array.
//  - Transfers each position of the original array to the resulting array where the argument function returns a _truthy_ value.

// Sample 1
const numbers = [2, 3, 4, 7, 66, 5, 4, 7, 8, 6, 43, 23];

const highValues = numbers.filter((eachNumber) => {
  return eachNumber > 10;
});

console.log("The high values are ==>", highValues);

console.log("------");

// Sample 2
const oddValues = numbers.filter(function (eachNumber) {
  return eachNumber % 2 != 0;
});

console.log("The odd values are ==>", oddValues);
