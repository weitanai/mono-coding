const MYQueue = function(){
    this.s1 = [];
    this.s2 = [];
}

MYQueue.prototype.push = function(x) {
    this.s1.push(x);
}


MYQueue.prototype.pop = function () {
    if (this.s2.length === 0) {
        while(this.s1.length > 0) {
            this.s2.push(this.s1.pop());
        }
    }
    if (this.s2.length > 0) {
        return this.s2.pop();
    }
}

const q = new MYQueue();
q.push(1);
q.push(2);

console.log(q.pop())
q.push(3);
console.log(q.pop(), q.pop())
