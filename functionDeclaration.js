// FUNCTION DECLARATIONS

function greet(firstName = 'John', lastName = 'Doe') {
  // console.log('Hello');
  return 'Hello' + firstName + ' ' + lastName;
}

console.log(greet('John', 'Doe'));

// FUNCTION EXPRESSIONS

const square = function (x) {
  return x * x;
};

console.log(square(8)); // 64

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - ITFEs

(function (name) {
  console.log('Hello' + name);
})('Jay');

// Property Methods

const todo = {
  add: function () {
    console.log('Add todo..');
  },

  edit: function (id) {
    console.log(`Edit todo ${id}`);
  },
};

todo.delete = function () {
  console.log('Delete todo..');
};

todo.add;
todo.edit(22);
todo.delete();
