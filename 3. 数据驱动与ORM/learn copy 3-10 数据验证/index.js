require("./init");

//  使用validate.js 库的验证
const stuServ = require("./services/studentService");
stuServ
  .addStudent({
    name: "adfddfhjdhgjdjfg",
    birthday: "2010-3-5",
    sex: true,
    mobile: "15454545444",
    ClassId: 3,
    deletedAt: "2010-1-1",
    a: 3,
    b: 4,
  })
  .catch((err) => {
    console.log(err);
  });

//使用 sequelizea的验证
//const Student = require('./models/Student');

// Student.create({
//   // name: "adfd",
//   birthday: "2010-3-5",
//   sex: true,
//   mobile: "15454545444",
//   ClassId: 3,
//   deletedAt: "2010-1-1",
// });

// const stu= Student.build({
//      name: "adfd",
//      birthday: "2010-3-5",
//      sex: true,
//      mobile: "15454545444",
//      ClassId: 3,
//      deletedAt: "2010-1-1",
// });

// const res= stu.validate();
