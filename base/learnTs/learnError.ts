import  sum from './types/type';
const S:  typeof sum = (a: number, b: number) => a + b;
S.operator = '+';
console.log(S(1, 2));

import {Person, getPersonName} from "./types/index";

const person: Person = { 
    name: "jack",
    age: 18
};

const  getPeron: getPersonName = (person: Person) => {
    console.log(person.age);
};

// type  getArrayType<T> = T extends (infer U)[] ? U : T;

// type TestArr = Array<{name: string}>


// type GetT = getArrayType<TestArr>;


// function CaError(): never {
//     throw new Error('error')
// }

// // create debounce function
// function debounce(fn: Function, delay: number): Function {
//     let timer: number;
//     return function() {
//         if (timer) {
//             clearTimeout(timer);
//         } 
//         timer = setTimeout(fn, delay);
//     }
// }


// function append(demo='', file=''){
//     const pathname = demo ? `/${demo}/`: '/';
//     return
// }



// class Animal {
//     name: string;
//     constructor(name: string) {
//       this.name = name;
//     }
//   }
  
//   class Dog extends Animal {
//     breed: string;
//     constructor(name: string, breed: string) {
//       super(name);
//       this.breed = breed;
//     }
//   }
  
//   function isDog(animal: Animal): animal is Dog {
//     return (<Dog>animal).breed !== undefined;
//   }
  
//   function processAnimal(animal: Animal) {
//     if (isDog(animal)) {
//       // 在这个块中，animal 被缩小为 Dog 类型
//       console.log(animal.breed);
//     } else {
//       // 在这个块中，animal 仍然是 Animal 类型
//       console.log(animal.name);
//     }
//   }
interface Fizz {
  id: number;
  fizz: string;
}

interface Buzz {
  id: number;
  buzz: string;
}

function fn(arr : Fizz[]  | Buzz[] ) {

  return arr.filter(item=> item.id <5)
}













