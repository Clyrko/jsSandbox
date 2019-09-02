const id = 100;

// EQUAL TO

if (id == 100) {
  console.log('correct');
} else {
  console.log('incorrect');
}

// Not EQUAL TO

if (id != 100) {
  console.log('correct');
} else {
  console.log('incorrect');
}

// EQUAL TO VALUE & TYPE

if (id === 100) {
  console.log('correct');
} else {
  console.log('incorrect');
}

// Not EQUAL TO VALUE & TYPE

if (id !== 100) {
  console.log('correct');
} else {
  console.log('incorrect');
}

// GREATER OR LESS THAN

if (id > 200) {
  console.log('correct');
} else {
  console.log('incorrect');
}

// IF ELSE

const color = 'red';

if (color === 'red') {
  console.log('The color is red');
} else if (color === 'blue') {
  console.log('The color is blue');
} else {
  console.log('The color is not red or blue');
};

// LOGICAL OPERATORS

const name = 'Steve';
const age = 25;

// AND &&

if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR ||

if (age < 16 || age > 65) {
  console.log(`${name} cannot run in race`);
} else {
  console.log(`${name} is regitered for race`);
}

// TERNARY OPERATOR

console.log(id === 100 ? 'correct' : 'inccorect');

// WITHOUT BRACES

if (id === 100)
  console.log('correct');
else
  console.log('incorrect');
