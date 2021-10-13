const express = require('express');
const Mock = require('mockjs');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('获取全部学生');
});

router.get('/:id', (req, res) => {
    res.send('获取单个学生');
    console.log(req.params.id);
});

router.post('/:id', (req, res) => {
    res.send('添加一个学生');
    console.log(req.params.id);
});

router.put('/:id', (req, res) => {
    res.send('更新一个学生');
    console.log(req.params.id);
});

router.delete('/:id', (req, res) => {
    res.send('删除一个学生');
    console.log(req.params.id);
});

router.get('/test/data', (req, res) => {
    const stus = Mock.mock({
        'datas|3-5': [{
            'id|+1': 1,
            'name': '@cname',
            'age|10-20': 1,
            'sex|1': true,
            'sexc|1':['男','女']
        }],
        'total': function () {
            return this.datas.length
        }
    })
    res.json(stus);
});

router.get('/test/jsonp', (req, res) => {
    const stus = Mock.mock({
        'datas|3-5': [{
            'id|+1': 1,
            'name': '@cname',
            'age|10-20': 1,
            'sex|1': true,
            'sexc|1':['男','女']
        }],
        'total': function () {
            return this.datas.length
        }
    })
    //自己写

    let params = new URLSearchParams(req.query);
    const callback = params.get('callback');
    const script = `${callback}(${JSON.stringify(stus)})`;
    res.header('Content-Type','application/json').send(script);

    //使用express的方法
    //  console.log(req.app.get('jsonp callback name'));
    // res.jsonp(stus);
});

module.exports = router;