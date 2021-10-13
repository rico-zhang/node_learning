const express = require("express");
const app = express(); //创建一个express应用

// 匹配任何get请求
app.get("*", (req, res) => {
  console.log("abc");
});

const port = 9528;  
app.listen(port, () => {
  console.log(`server listen on ${port}`);
}); 
