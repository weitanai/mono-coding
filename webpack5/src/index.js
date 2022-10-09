import './index.css';
import prototype from '../assets/prototype.jpg';
import data from './data.json';

console.log(data);

function component() {
    const ele = document.createElement('div');
    ele.classList.add('hello');
    ele.innerHTML = data.json;
    const myIcon = new Image();
    myIcon.src = prototype;
    return ele;
}


document.body.appendChild(component());