// .map() method
//  - It takes a function as an argument.
//  - Returns a manipulated array of the same length as the original.
//  - Transfers the return value of the given function to each position in the resulting array.

// Sample 1
const originalNumbers = [1, 2, 3];

const doubledNumbers = originalNumbers.map((eachNumber) => {
  return eachNumber * 2;
});

console.log("The new numbers are ==>", doubledNumbers);

console.log("------");

// Sample 2
const drinks = ["water", "coffee", "juice", "tea"];

const capitalizedDrinks = drinks.map((eachDrink) => {
  const firstLetter = eachDrink[0].toUpperCase();
  const rest = eachDrink.substring(1);
  return firstLetter + rest;
});

console.log("The new drinks are ==>", capitalizedDrinks);
