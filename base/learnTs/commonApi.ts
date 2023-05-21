/// <reference path="./create.ts" />

interface Person {
    name: string;
    age: number;
    location?: string;
}

type pP = Partial<Person>;

const b: Pick<Person, 'name'> = {
    name: 'wei',
}


// omit 

const omitName: Omit<Person, 'name'> = {
    age: 1,
}



class Amimal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    private getName() {
        console.log(this.name);
    }
    usePrivate() {
        this.getName();
    }
}

