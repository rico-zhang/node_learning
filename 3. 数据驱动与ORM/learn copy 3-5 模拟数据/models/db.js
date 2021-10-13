const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("myschooldb", "root", "123654", {
  host: "localhost",
  dialect: "mysql",
  // logging: null
});

module.exports = sequelize;

