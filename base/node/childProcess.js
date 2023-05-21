const cp = require('child_process');

cp.exec('node udp.js', function (err, stdout, stderr) {
    console.log(err,'--');
    console.log(stderr);
    console.log(stdout)
})