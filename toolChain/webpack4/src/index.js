import hello from './data.js';
import './index.css';


function component() {
    const ele = document.createElement('div');
    ele.classList.add('hello');
    ele.innerHTML = hello;
    return ele;
}


document.body.appendChild(component());