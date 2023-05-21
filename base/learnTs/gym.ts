type MyExclude<T, K> = T extends K ? never : T;

interface Person {
    name: string;
    age: number;
    avatar: string;
}
