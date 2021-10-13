const path = require('path');
const express = require('express');
const router = express.Router();
const multer = require('multer');
let uploadPath = path.resolve(__dirname, '../../public/upload');

// const upload = multer({ dest: uploadPath });
// router.post('/', upload.single('img'), (req, res) => {
//     console.log(req.file);
//     console.log(req.files);
//     console.log(req.body);
//     const url = `/upload/${req.files.filename}`;
//     res.send({
//         code: 0,
//         mag: '',
//         data: url
//     });
// })

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        // 时间戳-6位随机字符.文件后缀
        const timeStamp = Date.now();
        const ramdomStr = Math.random().toString(36).slice(-6);
        const ext = path.extname(file.originalname);
        const filename = `${timeStamp}-${ramdomStr}${ext}`;
        cb(null, filename);
    }
});
const upload = multer({
    storage,
    limits:{
        // fileSize:150*1024
    },
    fileFilter(req,file,cb){
        const extname = path.extname(file.originalname);
        const whitelist = [".jpg",".gif",".png",".xls"];
        if(whitelist.includes(extname)){
            cb(null,true);
        }else{
            cb(new Error(`your ext name of ${extname} is not support`));
        }
    }
})
router.post('/', upload.single('img'), (req, res) => {
    console.log(req.file);
    console.log(req.files);
    console.log(req.body);
    const url = `/upload/${req.file.filename}`;
    res.send({
        code: 0,
        mag: '',
        data: url
    });
});

router.post('/1',upload.single('img'),(req,res)=>{
    res.send({
        // errno 即错误代码，0 表示没有错误。
        //       如果有错误，errno != 0，可通过下文中的监听函数 fail 拿到该错误码进行自定义处理
        "errno": 0,
    
        // data 是一个数组，返回图片Object，Object中包含需要包含url、alt和href三个属性,它们分别代表图片地址、图片文字说明和跳转链接,alt和href属性是可选的，可以不设置或设置为空字符串,需要注意的是url是一定要填的。
        "data": [
            {
                url: `/upload/${req.file.filename}`,
                 alt: 'test',
                href: ""
            },
        ]
    });
});

module.exports = router;