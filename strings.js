const firstName = 'William';
const lastName = 'Smith';
const age = 22;
const str = 'Hello there my name is Jay';
const tags = 'web development, artist, design, programming'

let val;

val = firstName + lastName;

// Concatenation

val = firstName + ' ' + lastName; // Adding a space

// Append

val = 'Brad';
val += 'Pitt';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping

val = 'That\'s awesome, I can\'t wait'; /* Using backslash to ignore the
 single quotes in the sentence */

// length

val = firstName.length;

// Concat

val = firstName.concat(' ', lastName);

// Change case

val = firstName.toUpperCase();
val = firstName.toLowerCase();

// indexOf()

val = firstName.indexOf('l'); // Lets you know the array position

// charAt()

val = firstName.charAt('2'); // find the letter at that Array

// get last charAt
val = firstName.charAt(firstName.length - 1);

// substring()

val = firstName.substring(0, 4); // Getting the letters in that range

// slice()

val = firstName.slice(0, 4); // similair to substring. with a negative number starts at the end

// split()

val = str.split(' '); // turns words in string into indivual arrays
val = tags.split(',');

// replace()

val = str.replace('Jay', 'Chris');

console.log(val);
