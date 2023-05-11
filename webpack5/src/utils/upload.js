function upload(url, file) {
    return new Promise(resolve => {
        console.log('uploadMap:', file)

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
        )
        fs.createReadStream(file)
            .on("data", chunk => {
                req.write(chunk);
            })
            .on("end", () => {
                req.end();
                resolve()
            });
    })
}