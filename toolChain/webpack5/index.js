const {globSync} = require("glob");

const path = require("path");

function getList(localPath) {
    const res = globSync(localPath);
    for(let i of res) {
        console.log(i, "base -- i", path.basename(i));
    }
}

const url = path.join(process.cwd(), "../{assets,css}/**/*.{jpg,html}");
console.log(process.cwd());
console.log(url);

getList(url);

// how to use, match dir file, get file name and 