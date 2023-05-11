(function createElement(eleName = 'div') {
    const ele = document.createElement(eleName);
    ele.innerHTML = 'promisify';
    document.body.appendChild(ele);
})()
