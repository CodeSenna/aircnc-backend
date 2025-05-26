// routes/index.js
const express = require('express');
const sessaoRoutes  = require('./Sessao.routes');  //  <--- rota para endereço sessão

const router = express.Router();   //  <------ monta meu roteamento nesta variavel ?

// prefixo de URL   →   módulo de rotas
router.use('/sessao',  sessaoRoutes); //  <----  router usa essa rota aqui e diz vai lá no Sessao.routes  (está apontando)

module.exports = router;


