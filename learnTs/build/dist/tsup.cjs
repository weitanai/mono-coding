'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function processPerson(person) {
  return `name: ${person.name}
 age: ${person.age}`;
}
function getGlobalPerson(person) {
  return person;
}

exports.getGlobalPerson = getGlobalPerson;
exports.processPerson = processPerson;
