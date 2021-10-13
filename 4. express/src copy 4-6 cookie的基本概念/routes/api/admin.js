const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    const body = req.body;
    if (body.userid = 'rico' && body.password == '1') {
        res.header('set-cookie','token=rico;path=/;max-age=3600;httponly')
        res.send('登录成功');
    }else{
        res.header('set-cookie','token=rico;path=/;max-age=-1')
        res.send('登录失败');
    }
})

module.exports = router;