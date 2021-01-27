const express= require('express');
const router = express.Router();

const authmiddleware = require('../middlewares/auth');
router.use(authmiddleware);


router.get('/', (req, res) => {
    res.send('tudo certo');
});

module.exports = app => app.use('/registro', router);