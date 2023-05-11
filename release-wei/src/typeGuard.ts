// type myOmit<T, U> = Pick<T, {
//     [P in key of T] : P extends U ? never : P;
// }[keyof T]>


type HH<T, U> =  {
    [P in key of T] : P extends U ? never : P;
}[keyof T]