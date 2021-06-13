const Sequelize = require("sequelize");

const conn = new Sequelize("bemolApp","root","",{
    host: "localhost",
    dialect: "mysql"
});

module.exports = conn;