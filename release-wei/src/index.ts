import type {Company} from " ./company";

export {processPerson, getGlobalPerson} from "./tsup";


const obj: Company = {name: "wei", total: 12};

import {Validation} from "./stringValidator";

const stringVali = new Validation.LettersOnlyValidator();

const isString = stringVali.isAcceptable("hello");

export {Company};


function hh<T>(input: T) : T {
    return input;
}

type HH<T, U> =  {
    [P in keyof T]:  P extends U ? never : P;
}

type HT = {
    name: string;
    age: number;
    city: string;
}

type HTT  = HH<HT, "name">

const htt: HTT = {
    age: 12,
    city: "ci"
};

console.log(htt);