const express = require("express");
const router = express.Router();

router.post(
  "/",
  (req, res, next) => {
    console.log(req.body);
    res.send({
      code: 0,
      data: 'success'
    });
  }
);

module.exports = router;
