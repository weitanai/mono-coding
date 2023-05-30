const prompts = require("prompts");
const pro = require("child_process");


const proData = [
    {
        type: "text",
        name: "version",
        message: "please input version"
    }
];


async function inputPro() {
    const res = await prompts(proData);
    return res;
}
inputPro().then(res => {
    console.log(res);
    const {version} = res;
    updateVersion(version);
});


function updateVersion(version) {
    pro.exec(`npm version ${version}`, (err, stdout, stderr) => {
        if (err) {
            console.error(err);
        }
        console.log(stdout, "--patch");
        pro.exec("npm publish", (err, stdout, stderr) => {
            if (err) {
                console.error(err);
            }
            console.log(stdout, "--");
        });
    });
}
async function publishVersion() {
    pro.exec("npm publish", (err, stdout, stderr) => {
        if (err) {
            console.error(err);
        }
        console.log(stdout, "--");
    });
}
