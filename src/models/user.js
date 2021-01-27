const mongoose = require('../dataBase');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    
    nome: {
        type:String,
        require:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    idade: {
        type:String,
        required:true,


    },
    cidade: {
        type:String,
        required:true,

    },
    estado: {
        type:String,
        required:true,

    },
    usuario: {
        type:String,
        required:true,

    },
    senha: {
        type:String,
        required:true,
        select:false,

    },
    tipo: {
        type:String,
        required:true,

    },
    funcao: {
        type:String,
        required:true,
        
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },


});

UserSchema.pre('save', async function(next){
        const hash = await bcrypt.hash(this.senha, 10);
        this.senha= hash;
        next();
})


const User = mongoose.model('User', UserSchema);

module.exports = User;


// CADASTRO DE USUÁRIO
// - nome
// - idade
// - cidade
// - estado
// - usuario
// - senha
// PERFIL DE ACESSO
// - tipo (USUARIO, ADMINISTRADOR)
// - funcionalidade - Array de funcionalidades ex: INSERIR, ATUALIZAR, DELETAR
    

//     "nome":"mario russo",
    //     "email":"mario@hotmail.com"
    //     "idade":"28",
    //     "cidade":"rio de janeiro",
    //     "estado":"rj",
    //     "usuario":"mario-russo",
    //     "senha":"mario",
    //     "tipo":"adm",
    //     "funcao":"ATUALIZAR"

    // {
    //     "statusCode": 200,
    //     "message": "Usuário atualizado com sucesso!",
    //     "data": {
    //         "nome": {
    //             "_id": "6010c23ab03b2026cc30aad7",
    //             "nome": "mario russo",
    //             "email": "mario1@hotmail.com",
    //             "idade": "28",
    //             "cidade": "rio de janeiro",
    //             "estado": "rj",
    //             "usuario": "mario-russo",
    //             "tipo": "adm",
    //             "funcao": "ATUALIZAR",
    //             "createdAt": "2021-01-27T01:30:34.742Z",
    //             "__v": 0
    //         }
    //     }
    // }