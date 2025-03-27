// .reduce() method
//  - It takes a function as an argument.
//  - It takes two parameters by default: accumulator and iterated value.
//  - It can receive a second argument taking this as the initial value for the accumulator.
//  - It takes as the value of the accumulator for the second and subsequent iterations the value returned by the previous iteration.

// Sample 1
const numbers = [2, 9, 4];

const sumNumbers = numbers.reduce((acc, eachNumber) => {
  console.log("In this iteration the accumulator value is ->", acc);
  console.log("In this iteration the iterated value is ->", eachNumber);
  console.log(
    "We are going to return the sum of one and the other which is ->",
    acc + eachNumber
  );
  console.log("------");
  return acc + eachNumber;
});

console.log("The sum of the values is ==>", sumNumbers);

console.log("------");

// Sample 2
const words = ["This", "is", "one", "big", "string"];

const bigString = words.reduce((acc, word) => {
  return acc + word;
});

console.log("The big string is ==>", bigString);
