const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.send('获取全部学生');
});

router.get('/:id',(req,res)=>{
    res.send('获取单个学生');
    console.log(req.params.id);
});

router.post('/:id',(req,res)=>{
    res.send('添加一个学生');
    console.log(req.params.id);
});

router.put('/:id',(req,res)=>{
    res.send('更新一个学生');
    console.log(req.params.id);
});

router.delete('/:id',(req,res)=>{
    res.send('删除一个学生');
    console.log(req.params.id);
});

module.exports = router;