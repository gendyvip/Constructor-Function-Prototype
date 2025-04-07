function Person(name, age) {
  this.name = name;
  this.age = age;
}
var person1 = new Person("ahmed", 25);
var person2 = new Person("mona", 13);
var person3 = new Person("samia", 25);
console.log(person1.name);
console.log(person1.age);
Person.prototype.greet = function () {
  return this.name;
};
console.log(person1.greet());
console.log(person2.greet());
console.log(person3.greet());
