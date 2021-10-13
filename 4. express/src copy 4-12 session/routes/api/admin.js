const express = require('express');
const router = express.Router();
const cry = require('../../util/crpyt');

router.post('/login', (req, res) => {
    const body = req.body;
    if (body.userid = 'rico' && body.password == '1') {
        let value = 'rico';
        value = cry.encrypt(value);
        console.log(value);
        res.cookie('token', value, {
            path: '/',
            domain: 'localhost',
            maxAge: 1000 * 60 * 60,
            httpOnly: true,
            // signed:true
        });
        res.header('Auth', value);
        res.send('登录成功');
    } else {
        res.cookie('token', '', {
            path: '/',
            domain: 'localhost',
            maxAge: -1,
            httpOnly: true,
        });
        res.header('Auth', '');
        res.send('登录失败');
    }
});

router.get('/login1', (req, res) => {
    const body = req.body;
    if (body.userid = 'rico' && body.password == '1') {
        req.session.loginUser = 'rico';
        res.send('登录成功');
    } else {
        res.send('登录失败');
    }
});
module.exports = router;