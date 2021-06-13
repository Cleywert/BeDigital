const express = require('express');
const router = express.Router();
const User = require("../models/modelUser");
const jwt = require("../jwt");

const JWTSecret = "jdhsfkjdhkd#$%@vsvsdvsdvgfhjhbsdbshd66564861315jhcbsdjhbjsdhhh";

function auth(req, res, next) {
    var authToken = req.headers['authorization'];
    if (authToken == undefined) {
        res.statusCode = 401;
        res.json({ err: "Token Inválido" });
    } else {
        var token = authToken.split(" ")[1];
        jwt.verify(token, JWTSecret, (err, data) => {
            if (err) {
                res.statusCode = 401;
                res.json({ err: "Token Inválido" });
            } else {
                req.token = token;
                req.userLog = {
                    id: data.id,
                    cpf: data.cpf,
                    nome: data.nome
                }
                next();
            }
        })
    }
}

// cadastrar usuario
router.post("/user", (req, res) => {
    var { cpf, nome, email, phone, senha, cep, uf, cidade, bairro, rua, numCasa } = req.body;
    User.create({
        cpf,
        nome,
        email,
        phone,
        senha,
        cep,
        uf,
        cidade,
        bairro,
        rua,
        numCasa
    }).then(() => {
        res.statusCode = 200;
        User.findAll().then(users => {
            res.json(users);
        })
    })
})

// Listar usuário pelo CPF
router.get("/user/:cpf", auth, (req, res) => {
    const cpf = req.params.cpf;
    User.findOne({
        where: { cpf }
    }).then(user => {
        res.json(user);
    })
});

// Editar usuário
router.put('/user/:cpf', auth, (req, res) => {
    const cpf = req.params.cpf;
    const { nome, email, phone, senha, cep, uf, cidade, bairro, rua, numCasa } = req.body;
    User.update(
        {
            cpf,
            nome,
            email,
            phone,
            senha,
            cep,
            uf,
            cidade,
            bairro,
            rua,
            numCasa
        },
        {
            where: { cpf }
        }
    ).then(()=>{
        User.findOne({where:{cpf}}).then(user=>{
            res.statusCode = 200;
            res.json(user);
        })
    })
})

// Rota para logar
router.get("/login/:cpf/:senha", (req, res) => {
    var { cpf, senha } = req.params;
    User.findOne({
        where: { cpf }
    }).then(user => {
        if (senha == user.senha) {
            jwt.sign({
                id: user.id,
                cpf: user.cpf,
                nome: user.nome
            }, JWTSecret, { expiresIn: "48h" }, (err, token) => {
                if (err) {
                    res.statusCode = 500;
                    res.json({ err: "Erro interno" });
                } else {
                    res.statusCode = 200;
                    res.json({
                        token: token,
                        user: {
                            cpf: user.cpf,
                            nome: user.nome
                        }
                    });
                }
            })
        } else {
            res.statusCode = 400;
            res.json({ err: "As crenciais informadas não conferem" })
        }
    }).catch(() => {
        res.statusCode = 404;
        res.json({ err: "CPF não cadastrado" })
    })
})

module.exports = router;