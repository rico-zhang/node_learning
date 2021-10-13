const express = require('express');
const svgCaptcha = require('svg-captcha');
const router = express.Router();

router.get('/captcha', (req, res) => {
    const captcha = svgCaptcha.createMathExpr({});
    res.type('svg');
    req.session.captcha = captcha.text.toLocaleLowerCase();
    res.send(captcha.data);
    console.log(req.session.captcha);
});

function validateCaptcha(req, res, next) {
    const captcha = req.body.captcha?.toLowerCase();
    console.log(captcha, req.session);
    if (captcha !== req.session.captcha) {
        res.send({
            code: 401,
            msg: '验证码错误'
        });
    } else {
        next();
    }
}

function captchaHandler(req, res, next) {
    req.session.record || (req.session.record = []);
    const repaeat = 3, diffTime = 10000;
    req.session.record.push(+Date.now());
    const begintime = +Date.now() - diffTime;
    req.session.record = req.session.record.filter(t => t > begintime);
    //10s 内请求接口超过三次或者参数中带有captcha 则需要验证
    if (req.session.record.length > repaeat || req.body.captcha) {
        validateCaptcha(req,res,next);
    }else{
        next();
    }
}

router.post('*', captchaHandler);

module.exports = router;