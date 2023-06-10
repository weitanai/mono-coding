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



const arrr = [1, 2, 3] as const;