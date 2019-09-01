const num1 = 100;
const num2 = 50;

let val;

// Simple Math with numbers

val = num1 + num2; // Addition
val = num1 * num2; // Multiplication
val = num1 - num2; // Subtraction
val = num1 / num2; // Division
val = num1 % num2; // Modulus

// Math Object

val = Math.PI; // Math is an object (properties & methods)
val = Math.round(2.8);
val = Math.ceil(2.4); // TO round up
val = Math.floor(2.8); // To round down
val = Math.sqrt(64); // Square Root
val = Math.abs(-3); // Ablosute value
val = Math.pow(8, 2); // To the power
val = Math.min(2, 33, 5, 95); // Return min number
val = Math.max(); // Returns the max number
val = Math.random(); // Returns a random decimal

val = Math.floor(Math.random() * 20 + 1); // To get a random number between 1-20

console.log(val);
