 const express= require('express');
//  colocando o express na variavel app
const router = express.Router();

const usuarioController = require('../controllers/UsuarioController');
const usuarioLogin = require('../controllers/usuarioLogin');
const authmiddleware = require('../middlewares/auth');

// const usuarioController = require('../controllers/UsuarioController');
router.use(authmiddleware);
router.get('/', (req , res) => {
    res.send('ok aprovado')
});
router.get('/usuario', usuarioController.get ,);
router.post('/usuario',usuarioController.post);
router.post('/login', usuarioLogin.post);

module.exports = app => app.use('/api', router);