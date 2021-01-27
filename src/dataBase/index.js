const mongoose = require('mongoose');



// utilizando um banco de dados para teste 
mongoose.connect('mongodb://localhost/api',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    
  });
mongoose.Promise = global.Promise;

module.exports = mongoose;