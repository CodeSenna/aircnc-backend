// aqui no controller é onde serão criados os metodos CRUD  POST GET UPDATE DELETE


const Usuario = require('../models/Usuarios');


const store = async (req, res) =>{
    const { email } = req.body    //<---  isso é uma desconstrução, ele ta pegando os dados inseridos no body,
    // console.log(email)                  tudo o que foi inserido no body naquela situação é = email ( email = um campo)     



    let usuario = await Usuario.findOne({ email }); // verifica se usuario existe, usuario existe?

    if (!usuario){  // se usuario não existir usuario, insira (create)
        usuario = await.create({ email });   //  <---- então crie aqui. 

    }

    return res.json(usuario)   // <----   me mostra aqui? 


    usuario = await Usuario.create({ email });



    return res.json(usuario)
}

module.exports = { store }


// http://localhost:3335/sessao/


// module.exports = {
//     async store(req, res){
//         const { email } = req.body
//         // ...
//         usuario = await Usuario.create({ email});

//         return res.json(usuario)
//     }
// };