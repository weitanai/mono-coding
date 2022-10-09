const fs = require('fs');
const path = require('path');

function readEnv() {
    const dotEnvPath = path.resolve(process.cwd(), '.env');
    const fileRes = fs.readFileSync(dotEnvPath, 'utf8');
    console.log(fileRes.length);
}

readEnv();