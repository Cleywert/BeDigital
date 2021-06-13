const Sequelize = require("sequelize");
const conn = require("../database/database");

const User = conn.define("user",{
    cpf:{
        type: Sequelize.STRING,
        allowNull: false
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: true
    },
    cep: {
        type: Sequelize.STRING,
        allowNull: false
    },
    uf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bairro: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rua: {
        type: Sequelize.STRING,
        allowNull: false
    },
    numCasa: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

User.sync({force: true}).then(() => {});

module.exports = User;