function processPerson(person) {
  return `name: ${person.name}
 age: ${person.age}`;
}
function getGlobalPerson(person) {
  return person;
}

export { getGlobalPerson, processPerson };
