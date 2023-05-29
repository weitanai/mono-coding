class TestCal{
    constructor() {
        this.name = 'name';
    }
    sayNmame() { 
        console.log(this.name, 'say name')
    }
}
const testCal = new TestCal();
console.log(testCal.sayNmame())