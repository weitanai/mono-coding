// test for node14 feature es module


function testFun() {
    const  {res} = import("./exportTest.js");
    console.log(res);
}
testFun();