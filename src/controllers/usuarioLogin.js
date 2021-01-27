const User = require('../models/user');
const bcrypt =require('bcryptjs');
const jwt = require('jsonwebtoken');

const jtwHash = require('../config/jwt.json');

const post = async (req, res) => {
    try {
        const email = req.body.email;
        const senha =req.body.senha;

       const user = await User.findOne({email}).select('+senha');
    

    //   return res.send({user.senha});
       if(!user)
           return res.status(400).send({error :'ao encontra O USUARIO'});
         

        if(!await bcrypt.compare(senha , user.senha ))
           return res.status(400).send({error: 'ao encontra a SENHA'}); 

    const token = jwt.sign({id:user.id}, jtwHash.secret,{
        expiresIn:86400,
    });

       
    
       user.senha= undefined;
        
       res.send({ user, token,
    });
      
    } catch (error) {
        res.status(400).send({
            erro:'erro ao logar',
        });
        
    }
}
module.exports = { post };