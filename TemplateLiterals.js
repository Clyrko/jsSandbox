const name = 'Jay';
const age = 20;
const job = 'Developer';
const city = 'Tema';
let html;

// Without template strings (es5)

html = '<ul><li>Name: ' + name + '<li>Age: ' + age + '</li><li>Job: ' + job +
 '</li><li>City: ' + city + '</li></li></ul>';

html = '<ul>' +
       '<li>Name: ' + name + '<li>' +
       '<li>Age: ' + age + '<li>' +
       '<li>Job: ' + job + '<li>' +
       '<li>City: ' + city + '<li>' +
       '</ul>';

// With Template strings
// uses backtick(``) & {}

html = `
  <ul>
    <li>Name ${name}</li>
    <li>Age ${age}</li>
    <li>Job ${job}</li>
    <li>City ${city}</li>
  </ul>
`;

document.body.innerHTML = html;
