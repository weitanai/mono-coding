// import fs from 'fs';
// const allFiles = fs.readdirSync('./');
// const allJsFiles = allFiles.filter((item)=> item.includes('.js') && item !== 'test.js' &&  item !== 'index.js');

// for(let item of allJsFiles) {
//     const file = fs.readFileSync(`./${item}`);
//     console.log(file.toString('utf8'), item, '--');
//     const fileStr = file.toString('utf8');
// }


const allFiles  = ["bar.js", "foo.js"];
const res = allFiles.map((item)=> {
    return `export * from './${item}'`;
});

export * from "./bar.js";