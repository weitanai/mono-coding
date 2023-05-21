'use strict'
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.sayHello();
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
    hello () {
        this.sayHello();
    }
  }
  
  const person = new Person("Alice", 25);