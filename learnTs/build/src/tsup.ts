export interface Person { 
    name: string;
    age: number;
}

export function processPerson(person: Person) {
    return `name: ${person.name}\n age: ${person.age}`;
}


export function getGlobalPerson(person: LibPerson): Person {
    return  person;
}