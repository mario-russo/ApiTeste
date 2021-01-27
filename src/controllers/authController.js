const express=require('express');

const User = require('../models/User');

const router = express.Router();

router.post('/registro', async (req, res) => {
    try {
        const user = await  User.create(req.body);
        return res.send({user});
    } catch (error) {
       return res.status(400).send({error:'falha ao registrar'});
        
    }

});
module.exports = app => app.use('/auth', router);