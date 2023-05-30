interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}

function getSmallPet(animal: Fish | Bird): Fish | Bird {
    // ...
    return animal;
}
const b: Bird = {
    fly() {
        console.log("fly");
    },
    layEggs() {
        console.log("lay eggs");
    }
};

const pet = getSmallPet(b);

if ((<Fish>pet).swim()) {
    (<Fish>pet).swim();
}
else {
    (<Bird>pet).fly();
}


type Proxy<T> = {
    get(): T;
    set(value: T): void;
}
type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
}
function proxify<T>(o: T): Proxify<T> {
   // ... wrap proxies ...
    const res = {} as Proxify<T>;
    for (const i in o) {
        res[i].get = ()=>{
            return o[i];
        };
        res[i].set = (value) => {
            o[i] = value;
        };
    }
    return res;
}
const props = {
    key: "key"
};
const proxyProps = proxify(props);

class BasicCalculator {
    public constructor(protected value: number = 0) { }
    public currentValue(): number {
        return this.value;
    }
    public add(operand: number): this {
        this.value += operand;
        return this;
    }
    public multiply(operand: number): this {
        this.value *= operand;
        return this;
    }
    // ... other operations go here ...
}

const v = new BasicCalculator(2)
            .multiply(5)
            .add(1)
            .currentValue();



type SomeObject = {
    a: number;
    b: string;
}

type Example = {
    [K in keyof SomeObject]: {
        key: K
    }
}[keyof SomeObject]