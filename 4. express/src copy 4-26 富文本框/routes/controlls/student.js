const express = require("express");
const router = express.Router();

router.get("/",  (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  res.render("./student.ejs", {
    datas: [{ name: 'rico' }, { name: 'zhang' }],
    page,
    limit,
    total:2
  });
});

module.exports = router;
