const Usuario = require('../models/Usuarios');

// module.exports = {
//     async store(req, res){
//         const { email } = req.body
//         // ...
//         usuario = await Usuario.create({ email});

//         return res.json(usuario)
//     }
// };

const store = async (req, res) =>{
    const { email } = req.body
    usuario = await Usuario.create({ email});

    return res.json(usuario)
}

module.exports = { store }


//Note que exportamos um objeto com os métodos (aqui só store).
//No routes.js, ao chamar SessaoController.store, o Express vai executar essa função.