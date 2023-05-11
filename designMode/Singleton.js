// const singleton = function(name) {
//     this.name = name;
//     this.instance = null;

// }

// singleton.prototype.getName = ()=>{
//     console.log('this.name',this.name);
// }

// singleton.getInstance = (name)=>{
//     if(!this.instance) {
//         this.instance = new singleton(name);
//     }
//     return this.instance;
// }


// const a  = singleton.getInstance('wei');
// const b = singleton.getInstance('ye');

// // use proxy to implement singleton



// const creatDiv = function(html) {
//     this.html;
//     this.init();
// }

// creatDiv.prototype.init = function() {
//     const div = document.createElement('div');
//     div.innerHTML = this.html;
//     document.body.appendChild(div);
// }


// const proxySingleTon = (function() {
//     let instance;
//     return function(html) {
//         if (!instance) {
//             instance = new creatDiv(html);
//         }
//         return instance;
//     }
// })()


const getSingle = function(fn){
    let result;
    return function() {
        return result || (result = fn.apply(this, arguments));
    }
}

const createLoginLayer =  function() {
    const div = document.createElement('div');
    div.innerHTML = 'i am login popover';
    div.style.display = 'none';
    document.body.appendChild(div);
    return div;
}

const createSingleLoginLayer = getSingle(createLoginLayer);

document.querySelector('#loginBtn').addEventListener('click', function() {
    const loginLay = createSingleLoginLayer();
    loginLay.style.display = 'block';
})