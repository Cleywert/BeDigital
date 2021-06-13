const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const connection = require("./database/database");

// habilitando o cors
app.use(cors());

// conectando ao banco
connection.authenticate().then(()=>{
    console.log("Conectado ao banco");
}).catch(err => {
    console.log(err);
})

// Setando o body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Definindo a pasta "public" como pasta de mídias e estáticos
app.use(express.static("public"));

// exportando model de usuário
require("./models/modelUser");
// importando e usando controller de usuários
const UsersController = require('./controllers/controllerUser');
app.use("/",UsersController);

// Setando porta da aplicação
app.listen(8080, ()=>{
    console.log("Servidor rodando");
})