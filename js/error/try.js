function testTry(num) {
    try {
        if(num>10) {
            throw new Error('num more than 10');
        }
    } catch(e) {
        console.error(e);
        // console.error(e, 'catch an error');
    }
}
testTry(11)