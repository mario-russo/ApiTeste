const jwt = require('jsonwebtoken');

const authConfig = require('../config/jwt.json')

module.exports = (req, res, next) => {
const authHeader = req.headers.authorization;
 if(!authHeader)
    return  res.status(401).send({erro:'nao existe token'});

const parts = authHeader.split('');


 if(!parts.lenght == 2)
    return res.status(401).send({error:'erronop token'});
    
const [scheme , token] = parts;

if(!/^bearer$/i.test(scheme))  
    return res.status(401).send({error:'token mal informado'});

jwt.verify(token,authConfig.secret,(err,decoded)=>{
    if(err)
    return res.status(401).send({error:'token invalido'});

    req.userId=decoded.id;
    return next();
});


}