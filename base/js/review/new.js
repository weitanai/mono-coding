// custom new;

function newP(fn, ...arg) {
    const obj = Object.create(fn.prototype);
    console.log('first create obj', obj);
    const res = fn.apply(obj, arg);
    return res instanceof Object ? res : obj;
  }
  function Ttest(name) {
    this.name = name;
  }
  const t = new Ttest('ye');

  console.log(t, t.name)

  const nT = newP(Ttest, 'hello my new test');
  console.log(nT); 
