interface Person {
    name: string;
    age: number;
}
declare function processPerson(person: Person): string;
declare function getGlobalPerson(person: LibPerson): Person;

export { Person, getGlobalPerson, processPerson };
