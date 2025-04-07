const users = [
  { name: "Amina Al-Farsi", credit: 28, role: "admin" },
  { name: "Hassan El-Sayed", credit: 34, role: "user" },
  { name: "Leila Haddad", credit: 22, role: "user" },
  { name: "Yara Mansour", credit: 30, role: "manager" },
  { name: "Santiago Alvarez", credit: 26, role: "user" },
  { name: "Camila Rojas", credit: 31, role: "admin" },
  { name: "Mateo Fernandez", credit: 29, role: "user" },
  { name: "Luciana Ortega", credit: 24, role: "manager" },
  { name: "Wei Zhang", credit: 40, role: "admin" },
  { name: "Hana Kim", credit: 27, role: "user" },
  { name: "Kenji Nakamura", credit: 32, role: "user" },
  { name: "Min-Jae Park", credit: 21, role: "user" },
  { name: "Fatima Zahra", credit: 35, role: "manager" },
  { name: "Omar Khalil", credit: 23, role: "admin" },
  { name: "Isabela Mendes", credit: 36, role: "user" },
  { name: "Thiago Silva", credit: 29, role: "user" },
  { name: "Mei Lin", credit: 41, role: "admin" },
  { name: "Sofia Torres", credit: 25, role: "manager" },
  { name: "Aliyah Nasr", credit: 33, role: "user" },
  { name: "Takashi Yamamoto", credit: 38, role: "admin" },
];

// 1. print the array to the console to make sure your project is set up correctly
console.log("All users:", users);

// 2. write a function that returns an array with the names of all the users and print it to the console
const names = users.map((user) => user.name);

console.log("All user names:", names);
// 3. write a function that returns an array with the names of all the users that have the role "admin" and print it to the console
const adminNames = users
  .filter((user) => user.role === "admin")
  .map((user) => user.name);

console.log("Admin names:", adminNames);

// 4. write a function that sums the credits of all the users and print it to the console
const totalCredits = users.reduce((sum, user) => sum + user.credit, 0);

console.log("Total credits of all users:", totalCredits);
