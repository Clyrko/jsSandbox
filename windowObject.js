// WINDOW METHODS / OBJECTS / PROPERTIES

// Alert

window.alert('Hello World');

// Prompt

const input = prompt();
alert(input);

// Confirm

if (confirm('Are you sure')) {
  console.log('yes');
} else {
  console.log('no');
}

// Properties

let val;

// Outter Height & Width

val = window.outerHeight;
val = window.outerWidtht;

// Inner Height & Width

val = window.innerHeight;
val = window.innerWidtht;

// Scroll Points

val = window.scrollY;
val = window.scrollX;

// location OBJECTS

val = window.location;
val = window.location.hostname;
val = window.location.port;

// Redirect

val = window.location.href = 'http://google.com';

// Reload

val = window.location.reload();

// Histort Object

window.history.go();
val = window.history.length;

// Navigator Object - browser

val = window.navigator;

console.log(val);
