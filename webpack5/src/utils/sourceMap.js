const fs = require('fs')
var http = require('http');
const {globSync} = require('glob');
const path = require('path');
class UploadSourceMapWebpackPlugin {
    constructor(options) {
        this.options = options
    }

    apply(compiler) {
        console.log('UploadSourceMapWebPackPlugin apply----------')
        // 定义在打包后执行
        compiler.hooks.done.tap('upload-sourecemap-plugin', async status => {
            // 读取sourcemap文件
            const sourcePath = path.join(status.compilation.outputOptions.path, `./**/*.{js.map,}`);
            const list = globSync(sourcePath)
            console.log('list---', list);
            for (let filename of list) {
                await this.upload(this.options.uploadUrl, filename)
            }
        })
    }
    upload(url, file) {
        return new Promise(resolve => {
            console.log('uploadMap--------:', file)
            console.log('upload url------',   `${url}?name=${path.basename(file)}`)
            const req = http.request(
                `${url}?name=${path.basename(file)}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/octet-stream',
                        Connection: "keep-alive",
                        "Transfer-Encoding": "chunked"
                    }
                }
            );
            fs.createReadStream(file)
                .on("data", chunk => {
                    console.log('chunk--------', chunk)
                    req.write(chunk);
                })
                .on("end", () => {
                    req.end();
                    console.log("-------upload sucess")
                    resolve()
                });
        })

    }
}

module.exports = UploadSourceMapWebpackPlugin;
