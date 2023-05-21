//  lastModified 
const fs = require('fs');
const handleCache = (req, res, next) => {
    fs.stat(filename, function (err, stat) {
        const lastModified = stat.mtime.toUTCString();
        if(lastModified == req.headers['if-modified-since']){
            res.writeHead(304, 'not-modified');
            res.end();
        }else {
            fs.readFile(filename, function (err, file) {
                const lastModified = stat.mtime.toUTCString();
                res.setHeader('Last-Modified', lastModified);
                res.writeHead(200, 'ok');
                res.end(file)
            })
        }
    })
}



// cache-control better way to cache file 
function handleCacheControl(req, res) {
    fs.readFile(filename, function (err, file) {
        res.setHeader('Cache-Control', 'max-age' + 1000*60*60*24);
        res.writeHead(200, 'ok');
        res.end(file);
    })
}