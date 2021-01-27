const router = require('express').Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const authmiddleware = require('../middlewares/auth');

const jtwHash = require('../config/jwt.json');


const get = async (req, res) => {
    try {
        res.send('login login feito com sucesso!!!')
    } catch (error) {
        return responseErrorJson(res, 'movie::get', error);
    }
};
const post = async (req, res) => {
    try {
        
        
        const user = await  User.create(req.body);
        user.senha = undefined;
        const token = jwt.sign({id:user.id}, jtwHash.secret,{
            expiresIn:86400,
        });
        // return user
        return res.send({
            "statusCode": 200,
            "message": "Usuário atualizado com sucesso!",
            "data": {
            "nome": user,
            "token":token,
            }
            });  
        
    } catch (err) {
        return res.status(400).send(
            {
            "statusCode": 400,
            "message": "Usuário  NAO ATUALIZADO!",
            "data": {
            "nome": "Teste"
            }
            });   
    }
};
module.exports = { get , post};

// 