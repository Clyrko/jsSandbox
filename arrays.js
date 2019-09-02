// Create some arrays

const numbers = [1, 2, 3, 4];
const number2 = new Array(1, 2, 3, 4);
const fruit = ['Apple', 'Banana', 'Orange', 'Strawberry'];
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 1 }, new Date()];

let val;

// Check array length

val = numbers.length;

// Check if is array

val = Array.isArray(numbers);

// get single value

val = numbers[2];

// insert into array

numbers[2] = 100;

// Find index of value

val = numbers.indexOf(36);

// MUTATING ARRAYS

// adding onto array

numbers.push(250);

// adding onto front

numbers.unshift(120);

// take off from end

numbers.pop();

// take off from front

numbers.shift();

// splice values

numbers.splice(1, 3);

// reverse arrays

numbers.reverse();

// Concatenate ARRAYS

val = numbers.concat(numbers2);

// sort

val = fruit.sort(); // puts in alphabetical order
val = numbers.sort(); // sorts by the firt number

// using the 'compare function'

val = numbers.sort(function (x, y) {
  return x - y;
});

// Reverse sorts

val = number.sort(function (y, x) {
  return y - x;
});

// find

function under50(num) {
  return num < 50;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);
