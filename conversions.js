let val;

// Number to String
val = String(5);

// Boolean to String
val = String(true);

// Date to String
val = String(new Date());

// Array to String
val = String([1, 2, 3, 4]);

// toString()

val = (5).toString();

// String to Number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number([1, 2, 3]);

val = parseInt('100'); // Only the integer
val = parseFloat('100.30'); // Adds decimals

// Output
console.log(val);
console.log(typeof val);
console.log(val.length);
console.log(val.toFixed()); // To get decimals logged

const val1 = 5;
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);
