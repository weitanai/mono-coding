

type  getArrayType<T> = T extends (infer U)[] ? U : T;

type TestArr = Array<{name: string}>


type GetT = getArrayType<TestArr>;


function CaError(): never {
    throw new Error('error')
}