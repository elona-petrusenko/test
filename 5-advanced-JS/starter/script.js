// Function constructor
/*
var john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  // this.calculateAge = function() {
  //   console.log(2016 - this.yearOfBirth);
  // }
}

Person.prototype.calculateAge = 
function() {
  console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge()
mark.calculateAge()

console.log(john.lastName, jane.lastName, mark.lastName);
*/


// Object.create
/*
var personProto = {
  calculateAge: function() {
    console.log(2019 - this.yearOfBirth);
  }
};
var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto,
{
  name: {value: 'Jane'},
  yearOfBirth: {value: 1969},
  job: {value: 'designer'}
});
*/


// Primitives vs objects
/*
// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a, b);

// Objects
var obj1 = {
  name: 'Jone',
  age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age, obj2.age);

// Functions
var age = 27;
var obj = {
  name: 'Jonas',
  city: 'Lisbon'
};
function change(a, b) {
  a = 30;
  b.city = 'San Francisco';
}
change(age, obj);
console.log(age, obj.city);
*/


// Lecture: Passing functions as arguments
var yesrs = [1990, 1965, 1937, 2005, 1998];
function arrayCalc(arr, fn) {
  var arrRes [];
  for (var i = 0; i < arr.length; i++) {

  }
}