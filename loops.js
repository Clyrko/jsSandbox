// FOR LOOP - WHen you know how many times it'll run

for (let i = 0; i < 10; i++) {
  if (i = 2) {
    console.log('2 is my favorite number');
    continue; // Keep going with the loop
  }

  if (i = 5) {
    console.log('Stop the loop');
    break; // Breaks out of the loop
  }

  console.log('number' + i);
}

// WHILE LOOP

let i = 0;

while (i < 10) {
  console.log('Number' + i);
  i++;
}

// DO WHILE - always going to run at least once

let i = 100;

do {
  console.log('Number ' + i);
  i++;
}

while (i < 10);

// LOOP THROUGH ARRAY

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// FOR EACH

cars.forEach(function (car, index, array) {
  console.log(`${index} : ${car}`);
  console.log(array);
});

// MAP - to return a different ARRAY

const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Sara' },
  { id: 3, name: 'Karen' },
];

const ids = users.map(function (user) {
  return user.id;
});

console.log(ids);

const user = {
  firstName: 'Jay',
  lastName: 'Smith',
  age: 40,
};

for (let x in user) {
  console.log('$(x) : ${user[x]}');
}
