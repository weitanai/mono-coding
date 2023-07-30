class TestCal{
    constructor() {
        this.name = "name";
    }
    sayNmame() { 
        console.log(this.name, "say name");
    }
}
const testCal = new TestCal();
console.log(testCal.sayNmame());

function isBig(){
    var big = true;
    if(big){ 
        return 'big'
    }
}

function hello(arg){
    console.log(arg)
}

hello('every one');