const jtwHash = require('./jwt.json');
const jwt = require('jsonwebtoken');

const token = id => {
      return jwt.sign(id , jtwHash.secret , {
        expiresIn:86400,
    });
}

module.exports= token;
