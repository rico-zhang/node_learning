module.exports = (req, res, next) => {
    console.log(req.path,req.baseUrl);
    if (!req.path.startsWith('/api')) {
        next();
    } else {
        if (true) {//存在文件
            res.send('获取静态资源');
        } else {
            next()
        }
    }
}