const path = require('path');
const fs = require('fs');
const buffer = require('buffer');
const currentFile = path.join(__dirname, '');
console.log(currentFile, 'curr--', __dirname);
const allFiles = fs.readdirSync('./');
const allJsFiles = allFiles.filter((item)=> item.includes('.js') && item !== 'test.js' &&  item !== 'index.js');

for(let item of allJsFiles) {
    const file = fs.readFileSync(`./${item}`);
    console.log(file.toString('utf8'), item, '--');
    const fileStr = file.toString('utf8');
}
