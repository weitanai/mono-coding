// how to use readonly in reality

// 1.  as props type
// 2.  as immutable arguments  for  function
interface ReadO {
    readonly hello: string;
    world: number;
    
}

const  rObj: ReadO = {
    hello: "hello",
    world: 11,
};

// rObj.hello = 'hellofdfas';


// generic readOnly

type canChange = {
    bar: string;
    foo: string;
}

type RObj = Readonly<canChange>;


const canC : canChange = {
    bar: "hello",
    foo: "world",
};

canC.foo = "dog";

const rO: RObj = {
    bar: "hello",
    foo: "world",
};
rO.bar = "bar";


// combine  more interface

type GenIndex = {
    readonly [x: string]:  string;
}

const gItem: GenIndex = {
    hello: "hello",
    world: "world"
};



type ANum =  number;

type RAnum = Readonly<ANum>

type RObjA = {
    ra: RAnum;
}
const rrObj: RObjA ={
    ra: 1
};
rrObj.ra = 2;

