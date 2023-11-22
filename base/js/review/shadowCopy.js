const syb = Symbol(1);

const obj = {
    arr:  [1, 2, 3],
    sym: syb,
    str: 'hello',
    de: {
        first: 'first',
        arr: [1, 3,6],
    objD: {
            deepK: 'deep key',
        }
    }
}

// JSON.parse 

const jsonRes = JSON.parse(JSON.stringify(obj));
console.log('jsonRes', jsonRes, jsonRes.objD == obj.objD);

const restSymbol = {...obj};
console.log('restSymbol', restSymbol, restSymbol.objD == obj.objD);


console.log('')


obj.de.arr.push(7);

