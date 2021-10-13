const express = require("express");
const router = express.Router();
const cryptor = require("../../util/crypt");

router.post(
  "/login",
  async (req, res) => {
    if (req.body.loginId == 'rico' && req.body.loginPwd == '1') {
      let value = 'rico';
      value = cryptor.encrypt(value.toString());
      //登录成功
      res.cookie("token", value, {
        path: "/",
        domain: "localhost",
        maxAge: 7 * 24 * 3600 * 1000, //毫秒数
        sameSite: "Lax",
      });
      res.header("authorization", value);
      res.send({
        code: 0,
        data: {
          username: 'rico'
        }
      });
    } else {
      res.send({
        code: 1,
        msg: '登录失败'
      });
    }
  }
);

module.exports = router;
