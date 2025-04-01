// Objects in Depth: Advanced JavaScript Concepts

// 1. Simple Object Definition
const person = {
  firstName: "Ned",
  lastName: "Stark",
  age: 40,
};
console.log("Simple Object  ==>", person);

console.log("------");

// 2. Accessing Object Properties
console.log("Dot Notation  ==>", person.firstName);
console.log("Bracket Notation ==>", person["lastName"]);

console.log("------");

// 3. Looping Through Object Properties
for (let key in person) {
  console.log(`Key: ${key}, Value: ${person[key]}`);
}

console.log("------");

// 4. The 'this' Keyword & Object Methods
const personWithMethod = {
  firstName: "Ned",
  lastName: "Stark",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log("Full Name Method ==>", personWithMethod.fullName());

console.log("------");

// 5. Constructor Function
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const myCar = new Car("Eagle", "Talon TSi", 1993);
const kensCar = new Car("Nissan", "300ZX", 1992);
console.log("Car Objects ==>", myCar, kensCar);

console.log("------");

// 6. Spread Syntax
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log("Spread Syntax with Objects ==>", obj2);

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log("Spread Syntax with Arrays ==>", arr2);

console.log("------");

// 7. Destructuring Assignment
const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log("Destructured Values ==>", first, second);
console.log("Rest Operator ==>", rest);

const { firstName, lastName } = person;
console.log("Destructured Object ==>", firstName, lastName);
