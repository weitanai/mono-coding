function addCount(num: number, payload = 1) : number {
    console.log('---- add count')
    return  num + payload;
}

function delCount(num: number, payload = 1) : number {
    return num - payload;
}


export {addCount, delCount};``