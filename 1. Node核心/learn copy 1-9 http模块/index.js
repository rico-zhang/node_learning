const http = require('http');
const URL = require('url');
const path = require('path');
const fs = require('fs');

const getStat = async (filePath) => {
    try {
        return await fs.promises.stat(filePath)
    } catch (error) {
        return null;
    }
}

const getFileInfo = async (req) => {
    let urlObj = URL.parse(req.url);
    let filePath = path.resolve(__dirname, 'public', urlObj.pathname.substr(1));
    console.log(filePath);
    let stat = await getStat(filePath);
    if (!stat) {
        return null;
    } else if (stat.isDirectory()) {
        filePath = path.join(filePath, 'index.html');
        console.log(filePath);
        stat = await getStat(filePath);
        if (!stat) {
            return null;
        } else {
            return await fs.promises.readFile(filePath);
        }
    } else {
        return await fs.promises.readFile(filePath);
    }
}

const handler = async (req, res) => {
    const info = await getFileInfo(req);
    if (info) {
        res.write(info);
    } else {
        res.statusCode = 404;
        res.write('Resource is not exist')
    }
    res.end();
}
const server = http.createServer(handler)

server.listen(9527);
server.on('listening', () => {
    console.log('listening on 9527');
})

