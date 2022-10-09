function processFile() {
    setTimeout(()=> {
        console.log(1);
    }, 100);
    setTimeout(()=> {
        console.log(2);

    }, 100);
    setTimeout(()=> {
        console.log(3);

    }, 100);
    
    const p1 = new Promise((res, rej)=>{
        setTimeout(()=>res(1), 100);       z
    });
    p1.then((res)=> {console.log(res, 'promise1')});

}
processFile()