const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/:filename', (req, res) => {
    const filePath = path.resolve(__dirname, "../../resoureces", req.params.filename);
    console.log(filePath);
    res.download(filePath, req.params.filename);
});

module.exports = router;